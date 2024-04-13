import { Directive, HostListener, Input, inject } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Directive({
  selector: '[dipDeleteProduct]',
  standalone: true,
})
export class DeleteProductDirective {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  deleteProduct(): void {
    // 1. display confirmation dialog
    // 2. if user confirm then delete product
    // otherwise do nothing
    this.productService.delete(this.product);
  }
}
