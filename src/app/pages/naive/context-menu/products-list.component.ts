import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { Product, ProductService } from 'src/app/services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { FirstService } from 'src/app/services/first.service';
import { SecondService } from 'src/app/services/second.service';
import { ThirdService } from 'src/app/services/third.service';

@Component({
  selector: 'dip-products-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  private readonly productService = inject(ProductService);
  private readonly firstService = inject(FirstService);
  private readonly secondService = inject(SecondService);
  private readonly thirdService = inject(ThirdService);

  products$ = this.productService.products$;

  deleteProduct(product: Product) {
    // 1. display confirmation dialog
    // 2. if user confirm then delete product
    // otherwise do nothing
    this.productService.delete(product);
  }

  editProduct(product: Product): void {
    this.productService.edit(product);
  }

  duplicateProduct(product: Product): void {
    this.productService.copy(product);
  }

  executeAction1(productName: string): void {
    this.firstService.executeAction(productName);
  }

  executeAction2(productName: string): void {
    this.secondService.executeAction(productName);
  }

  executeAction3(productName: string): void {
    this.thirdService.executeAction(productName);
  }
}
