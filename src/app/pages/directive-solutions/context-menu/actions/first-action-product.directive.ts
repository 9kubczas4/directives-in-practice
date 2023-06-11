import { Directive, HostListener, Input, inject } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';

@Directive({
  selector: '[dipFirstActionProduct]',
  standalone: true
})
export class FirstActionProductDirective {
  @Input({ required: true }) productName!: string;

  private readonly firstService = inject(FirstService);

  @HostListener('click')
  executeAction(): void {
    this.firstService.executeAction(this.productName);
  }
}
