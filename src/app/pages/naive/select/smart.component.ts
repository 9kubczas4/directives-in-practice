import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbFirstComponent } from './dumb-first/dumb-first.component';
import { DumbSecondComponent } from './dumb-second/dumb-second.component';

@Component({
  selector: 'dip-smart',
  standalone: true,
  imports: [CommonModule, DumbFirstComponent, DumbSecondComponent],
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent {

}
