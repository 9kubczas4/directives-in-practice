import { Directive, HostListener, Input, inject } from '@angular/core';
import { AuthorizedAccessOnlyDirective } from 'src/app/pages/directive-solutions/disable-interactive-elements/authorized-access-only.directive';
import { Product, ProductService } from 'src/app/services/product.service';
// import { UserRole } from 'src/app/services/user.service';

@Directive({
  selector: '[dipCopyProduct]',
  standalone: true,
  hostDirectives: [
    {
      directive: AuthorizedAccessOnlyDirective,
      inputs: ['roles: activeFor'],
    },
  ],
})
export class CopyProductDirective {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductService);

  @HostListener('click')
  copyProduct(): void {
    this.productService.copy(this.product);
  }
}

// DEMO:
// private readonly authorizedAccessOnlyDirective = inject(AuthorizedAccessOnlyDirective);

// ngOnInit(): void {
//   this.authorizedAccessOnlyDirective.roles = [UserRole.ADMIN, UserRole.MANAGER]
// }
