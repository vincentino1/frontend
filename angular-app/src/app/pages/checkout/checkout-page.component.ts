import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

type Step = 1 | 2 | 3;

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [PageHeaderComponent, NgFor, NgIf],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent {
  step: Step = 1;

  go(step: Step) {
    this.step = step;
  }

  get isShipping() {
    return this.step === 1;
  }

  get isPayment() {
    return this.step === 2;
  }

  get isReview() {
    return this.step === 3;
  }
}
