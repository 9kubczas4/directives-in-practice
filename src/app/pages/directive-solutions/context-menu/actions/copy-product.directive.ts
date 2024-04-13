import { Directive, HostListener, Input, inject } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Directive({
  selector: '[dipCopyProduct]',
  standalone: true,
})
export class CopyProductDirective {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  copyProduct(): void {
    this.productService.copy(this.product);
  }
}
