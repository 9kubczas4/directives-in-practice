import { Directive, HostListener, Input, OnInit, inject } from '@angular/core';
import { TooltipDirective } from 'src/app/pages/directive-solutions/tooltip/tooltip.directive';
import { Product, ProductService } from 'src/app/services/product.service';

@Directive({
  selector: '[dipDeleteProduct]',
  standalone: true,
  hostDirectives: [{ directive: TooltipDirective, inputs: ['message']}],
})
export class DeleteProductDirective {
  @Input({required: true}) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  deleteProduct(): void {
    // 1. display confirmation dialog
    // 2. if user confirm then delete product
    // otherwise do nothing
    this.productService.delete(this.product);
  }
}
