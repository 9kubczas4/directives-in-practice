import { DestroyRef, Directive, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Dropdown } from 'primeng/dropdown';
import { UserService } from 'src/app/services/user.service';

@Directive({
  selector: 'p-dropdown[users]',
  standalone: true
})
export class UserSelectDirective implements OnInit {
  private readonly select = inject(Dropdown, { self: true });
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService$ = inject(UserService);

  ngOnInit(): void {
    this.userService$.getUsers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((users) => {
        this.select.options = users;
      });

    this.select.optionLabel = `fullName`;
  }
}
