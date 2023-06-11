import { Directive, TemplateRef, ViewContainerRef, inject, DestroyRef, OnInit, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserRole, UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly userService = inject(UserService);
  private readonly viewContainer = inject(ViewContainerRef);

  @Input('hasRole') roles: UserRole[] | undefined = undefined;

  ngOnInit(): void {
    if (this.roles) {
      this.userService.hasRole(this.roles)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((hasRole) =>
          hasRole ? this.addTemplate() : this.clearTemplate()
        );
    } else {
      this.addTemplate();
    }
  }

  private addTemplate(): void {
    this.clearTemplate();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  private clearTemplate(): void {
    this.viewContainer.clear();
  }
}
