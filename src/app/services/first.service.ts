import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  private readonly snackBar = inject(MatSnackBar);

  executeAction(productName: string): void {
    this.snackBar.open(
      `First service - execute action for ${productName}`,
      undefined,
      {
        duration: 3000,
      }
    );
  }
}
