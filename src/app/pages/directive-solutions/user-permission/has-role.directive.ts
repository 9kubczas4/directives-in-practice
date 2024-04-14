import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  inject,
  DestroyRef,
  OnInit,
  input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserRole, UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[hasRole]',
  standalone: true,
})
export class HasRoleDirective implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly userService = inject(UserService);
  private readonly viewContainer = inject(ViewContainerRef);

  roles = input.required<UserRole[]>({ alias: 'hasRole' });

  ngOnInit(): void {
    this.userService
      .hasRole(this.roles())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((hasRole: boolean) => {
        hasRole ? this.addTemplate() : this.clearTemplate();
      });
  }

  private addTemplate(): void {
    this.clearTemplate();
    this.viewContainer.createEmbeddedView(this.templateRef!);
  }

  private clearTemplate(): void {
    this.viewContainer.clear();
  }
}
