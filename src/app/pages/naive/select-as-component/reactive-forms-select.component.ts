import {
  Component,
  DestroyRef,
  Input,
  ViewChild,
  forwardRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'dip-user-reactive-forms-select',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  template: `
    <p-dropdown
      #select
      [formControl]="formControl"
      [options]="(users$ | async)!"
      [optionLabel]="optionLabel"
      [placeholder]="placeholder"></p-dropdown>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserReactiveFormsSelectComponent),
      multi: true,
    },
  ],
})
export class UserReactiveFormsSelectComponent implements ControlValueAccessor {
  @Input({ required: true }) formControl!: FormControl;
  @Input() optionLabel = 'fullName';
  @Input() placeholder = 'Select user';

  @ViewChild('select')
  set select(next: ControlValueAccessor) {
    this.value$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: number) => {
        next.writeValue(value);
      });

    this.disabled$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: boolean) => {
        next.setDisabledState!(value);
      });
    next.registerOnChange(this.onChange);
    next.registerOnTouched(this.onTouch);
  }

  private readonly destroyRef = inject(DestroyRef);
  private readonly userService$ = inject(UserService);

  private onChange: unknown;
  private onTouch: unknown;
  private value$ = new Subject<number>();
  private disabled$ = new Subject<boolean>();

  users$ = this.userService$.getUsers();

  writeValue(obj: number): void {
    this.value$.next(obj);
  }
  registerOnChange(fn: unknown): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: unknown): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled$.next(isDisabled);
  }
}
