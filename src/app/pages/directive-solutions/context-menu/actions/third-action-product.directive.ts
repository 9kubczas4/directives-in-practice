import { Directive, HostListener, Input, inject } from '@angular/core';
import { ThirdService } from 'src/app/services/third.service';

@Directive({
  selector: '[dipThirdActionProduct]',
  standalone: true,
})
export class ThirdActionProductDirective {
  @Input({ required: true }) productName!: string;

  private readonly thirdService = inject(ThirdService);

  @HostListener('click')
  executeAction(): void {
    this.thirdService.executeAction(this.productName);
  }
}
