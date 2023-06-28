import { Directive, TemplateRef, ViewContainerRef, inject, DestroyRef, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { UserRole, UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective {
  private readonly destroyRef = inject(DestroyRef);
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly userService = inject(UserService);
  private readonly viewContainer = inject(ViewContainerRef);

  @Input('hasRole') set roles(value: UserRole[]) {
    this.userService.hasRole(value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((hasRole) =>
        hasRole ? this.addTemplate() : this.clearTemplate()
      );
  };

  private addTemplate(): void {
    this.clearTemplate();
    this.viewContainer.createEmbeddedView(this.templateRef!);
  }

  private clearTemplate(): void {
    this.viewContainer.clear();
  }
}
