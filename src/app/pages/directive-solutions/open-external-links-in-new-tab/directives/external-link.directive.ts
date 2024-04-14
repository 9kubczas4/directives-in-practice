import { afterNextRender } from '@angular/core';
import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  selector: 'a:not([noBlank])',
  standalone: true,
})
export class ExternalLinkDirective {
  private readonly elRef: ElementRef<HTMLAnchorElement> = inject(ElementRef);

  @HostBinding('target') target: '_blank' | '_self' | '_parent' | '_top' | '' = '';

  constructor() {
    afterNextRender(() => {
      this.setAnchorTarget();
    });
  }

  private setAnchorTarget(): void {
    if (this.isLinkExternal(this.elRef.nativeElement.href)) {
      this.elRef.nativeElement.target = '_blank';
    }
  }

  private isLinkExternal = (url: string): boolean =>
    new URL(url).origin !== location.origin;
}
