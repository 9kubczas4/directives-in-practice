import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ProductService } from 'src/app/services/product.service';
import { actions } from './actions';

@Component({
  selector: 'dip-products-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, ...actions],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  private readonly productService = inject(ProductService);
  products$ = this.productService.products$;
}
