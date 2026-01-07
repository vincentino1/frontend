import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

export type BreadcrumbItem = { label: string; link?: string };

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', link: '/' }];
}
