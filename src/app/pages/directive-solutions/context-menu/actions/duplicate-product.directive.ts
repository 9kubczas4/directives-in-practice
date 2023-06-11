import { Directive, HostListener, Input, inject } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Directive({
  selector: '[dipDuplicateProduct]',
  standalone: true
})
export class DuplicateProductDirective {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  duplicateProduct(): void {
    this.productService.duplicate(this.product);
  }
}
