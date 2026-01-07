import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [PageHeaderComponent, NgFor],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  filtersOpen = true;
}
