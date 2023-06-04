import { Directive, OnInit, inject, DestroyRef, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Button } from 'primeng/button';
import { Dropdown } from 'primeng/dropdown';
import { UserRole, UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[dipAuthorizedAccessOnly]',
  standalone: true
})
export class AuthorizedAccessOnlyDirective implements OnInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService = inject(UserService);
  private readonly elementRef = inject(ElementRef, { self: true });
  private readonly button = inject(Button, { self: true, optional: true });
  private readonly select = inject(Dropdown, { self: true, optional: true });

  @Input() roles: UserRole[] | undefined = undefined;

  ngOnInit(): void {
    if (this.roles) {
      this.userService.hasRole(this.roles)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((hasPermission) => {
          this.updateDisabledStatus(!hasPermission);
        });
    }
  }

  private updateDisabledStatus(disabled: boolean): void {
    if (this.button) {
      this.button.disabled = disabled;
      this.changeDetectorRef.detectChanges();
    } else if (this.select) {
      this.select.disabled = disabled;
    } else if (
      this.elementRef.nativeElement &&
      'disabled' in this.elementRef.nativeElement
    ) {
      this.elementRef.nativeElement.disabled = disabled;
    }
  }
}
