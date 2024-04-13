import { UserRole } from './../../../services/user.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ProductService } from 'src/app/services/product.service';
import { actions } from './actions';
import { HasRoleDirective } from '../../directive-solutions/user-permission/has-role.directive';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'dip-products-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    ...actions,
    HasRoleDirective,
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  private readonly productService = inject(ProductService);
  products$ = this.productService.products$;

  UserRole = UserRole;
}
