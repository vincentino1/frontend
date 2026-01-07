import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

type Section = 'profile' | 'orders' | 'addresses' | 'settings';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [PageHeaderComponent, NgFor],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss',
})
export class AccountPageComponent {
  active: Section = 'profile';

  menu: Array<{ id: Section; label: string; icon: string }> = [
    { id: 'profile', label: 'Profile', icon: 'fa-user' },
    { id: 'orders', label: 'Orders', icon: 'fa-box' },
    { id: 'addresses', label: 'Addresses', icon: 'fa-map-marker-alt' },
    { id: 'settings', label: 'Settings', icon: 'fa-gear' },
  ];

  setActive(id: Section) {
    this.active = id;
  }
}

