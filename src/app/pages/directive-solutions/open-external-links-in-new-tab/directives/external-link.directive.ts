import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  selector: 'a:not([noBlank])',
  standalone: true,
})
export class ExternalLinkDirective {
  private readonly elRef: ElementRef<HTMLAnchorElement> = inject(ElementRef);

  @HostBinding('target') target?: '_blank' | '_self' | '_parent' | '_top' | '';

  ngOnInit() {
    this.setAnchorTarget();
  }

  private setAnchorTarget() {
    if (this.isLinkExternal(this.elRef.nativeElement.href)) {
      this.target = '_blank';
    }
  }

  private isLinkExternal = (url: string) =>
    new URL(url).origin !== location.origin;
}
