import {
  Directive,
  inject,
  DestroyRef,
  Input,
  ElementRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatMenuItem } from '@angular/material/menu';
import { Button } from 'primeng/button';
import { Dropdown } from 'primeng/dropdown';
import { UserRole, UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[dipAuthorizedAccessOnly]',
  standalone: true,
})
export class AuthorizedAccessOnlyDirective {
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService = inject(UserService);

  private readonly elementRef = inject(ElementRef, { self: true });
  private readonly button = inject(Button, { self: true, optional: true });
  private readonly select = inject(Dropdown, { self: true, optional: true });
  private readonly menuItem = inject(MatMenuItem, {
    self: true,
    optional: true,
  });

  @Input({ required: true }) set roles(value: UserRole[]) {
    this.userService
      .hasRole(value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(hasPermission => {
        this.updateDisabledStatus(!hasPermission);
      });
  }

  private updateDisabledStatus(disabled: boolean): void {
    if (this.button) {
      this.button.disabled = disabled; // in v16 detectChanges() call was required.
    } else if (this.select) {
      this.select.disabled = disabled;
    } else if (this.menuItem) {
      this.menuItem.disabled = disabled;
    } else if (
      this.elementRef.nativeElement &&
      'disabled' in this.elementRef.nativeElement
    ) {
      this.elementRef.nativeElement.disabled = disabled;
    }
  }
}
