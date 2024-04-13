import { Directive, Self } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Directive({
  selector: 'p-calendar',
  standalone: true,
})
export class CalendarDirective {
  constructor(@Self() private readonly calendar: Calendar) {
    this.calendar.dateFormat = 'dd/mm/yy';
    this.calendar.hourFormat = '12';
    (this.calendar.todayButtonStyleClass = 'btn btn--primary'),
      (this.calendar.clearButtonStyleClass = 'btn btn--secondary'),
      (this.calendar.showButtonBar = true);
    this.calendar.showIcon = true;
    this.calendar.showTime = true;
    this.calendar.firstDayOfWeek = 1;
  }
}
