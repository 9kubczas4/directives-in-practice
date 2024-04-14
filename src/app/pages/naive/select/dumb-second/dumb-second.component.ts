import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from 'src/app/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dip-dumb-second',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './dumb-second.component.html',
  styleUrls: ['./dumb-second.component.scss'],
})
export class DumbSecondComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly userService$ = inject(UserService);

  users$ = this.userService$.getUsers();

  formGroup = new FormGroup({
    user: new FormControl(null, Validators.required),
    // it could be more controls
  });

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        console.log(`DumbSecondComponent: ${JSON.stringify(value)}`);
      });
  }
}
