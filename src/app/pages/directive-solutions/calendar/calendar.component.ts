import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CalendarDirective } from './calendar.directive';

@Component({
  selector: 'dip-calendar',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule, CalendarDirective],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  date = new Date();
}
