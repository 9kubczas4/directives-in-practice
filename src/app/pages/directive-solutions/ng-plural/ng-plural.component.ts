import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dip-ng-plural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-plural.component.html',
  styleUrls: ['./ng-plural.component.scss'],
})
export class NgPluralComponent {
  items: string[] = [];

  addItem(): void {
    this.items = [...this.items, 'item'];
  }
}
