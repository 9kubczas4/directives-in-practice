import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';

// Directive written by ChatGPT
@Directive({
  selector: '[dipTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input({ required: true }) message!: string;
  private tooltip: HTMLElement | null = null;

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.createTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeTooltip();
  }

  private createTooltip() {
    if (!this.tooltip) {
      this.tooltip = this.renderer.createElement('div');
      this.tooltip?.classList.add('tooltip');
      this.tooltip!.textContent = this.message;
      this.renderer.appendChild(document.body, this.tooltip);

      const { top, left } = this.el.nativeElement.getBoundingClientRect();
      this.renderer.setStyle(this.tooltip, 'top', `${top + 10}px`);
      this.renderer.setStyle(this.tooltip, 'left', `${left + 140}px`);
    }
  }

  private removeTooltip() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}
