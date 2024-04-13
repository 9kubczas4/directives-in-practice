import { Component } from '@angular/core';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dip-calendar',
  standalone: true,
  imports: [CalendarModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  date = new Date();
}
