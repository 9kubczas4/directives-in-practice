import { Component } from '@angular/core';
import { ExternalLinkDirective } from './directives/external-link.directive';

@Component({
  selector: 'dip-open-external-links-in-new-tab',
  standalone: true,
  imports: [ExternalLinkDirective],
  templateUrl: './open-external-links-in-new-tab.component.html',
  styleUrls: ['./open-external-links-in-new-tab.component.scss'],
})
export class OpenExternalLinksInNewTabComponent {}
