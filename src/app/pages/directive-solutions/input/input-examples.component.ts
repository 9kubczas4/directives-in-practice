import { Component } from '@angular/core';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'dip-input-examples',
  standalone: true,
  imports: [NgIf, PasswordStrengthDirective],
  templateUrl: './input-examples.component.html',
  styleUrls: ['./input-examples.component.scss']
})
export class InputExamplesComponent {

}
