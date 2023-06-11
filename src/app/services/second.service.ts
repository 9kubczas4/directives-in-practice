import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SecondService {
  private readonly snackBar = inject(MatSnackBar);

  executeAction(productName: string): void {
    this.snackBar.open(`Second service - execute action for ${productName}`, undefined, {
      duration: 3000
    });
  }
}
