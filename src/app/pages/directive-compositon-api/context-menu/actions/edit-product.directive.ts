import { Directive, HostListener, Input, OnInit, inject } from '@angular/core';
import { AuthorizedAccessOnlyDirective } from 'src/app/pages/directive-solutions/disable-interactive-elements/authorized-access-only.directive';
import { Product, ProductService } from 'src/app/services/product.service';

@Directive({
  selector: '[dipEditProduct]',
  standalone: true,
  hostDirectives: [
    {
      directive: AuthorizedAccessOnlyDirective,
      inputs: ['roles: activeFor']
    }
  ],
})
export class EditProductDirective {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  editProduct(): void {
    this.productService.edit(this.product!);
  }
}
