import { Directive, HostListener, Input, inject } from '@angular/core';
import { SecondService } from 'src/app/services/second.service';

@Directive({
  selector: '[dipSecondActionProduct]',
  standalone: true,
})
export class SecondActionProductDirective {
  @Input({ required: true }) productName!: string;

  private readonly secondService = inject(SecondService);

  @HostListener('click')
  executeAction(): void {
    this.secondService.executeAction(this.productName);
  }
}
