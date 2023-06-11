import { Directive, HostListener, Input, inject } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Directive({
  selector: '[dipEditProduct]',
  standalone: true
})
export class EditProductDirective {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  editProduct(): void {
    this.productService.edit(this.product);
  }
}
