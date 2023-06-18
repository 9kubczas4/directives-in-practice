import { Injectable, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { of } from "rxjs";

export interface Product {
  id: number;
  name: string;
}

const MOCKED_PRODUCTS: Product[] = [
  { id: 1, name: 'Huawei P30' },
  { id: 2, name: 'Huawei P20' },
  { id: 3, name: 'Samsung S20' },
  { id: 4, name: 'Samsung S50' },
  { id: 5, name: 'iPhone 13 Pro' },
  { id: 6, name: 'iPhone 14 Pro' },
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly snackBar = inject(MatSnackBar);

  products$ = of(MOCKED_PRODUCTS);

  edit(product: Product): void {
    this.snackBar.open(`Edit - ${product.name}`, undefined, {
      duration: 3000
    });
  }

  delete(product: Product): void {
    this.snackBar.open(`Delete - ${product.name}`, undefined, {
      duration: 3000
    });
  }

  copy(product: Product): void {
    this.snackBar.open(`Copy - ${product.name}`, undefined, {
      duration: 3000
    });
  }
}
