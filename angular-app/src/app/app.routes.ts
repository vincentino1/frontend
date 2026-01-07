import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { AccountPageComponent } from './pages/account/account-page.component';
import { CheckoutPageComponent } from './pages/checkout/checkout-page.component';
import { RegistrationPageComponent } from './pages/registration/registration-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent, title: 'VogueThreads | Modern Fashion Store' },
  { path: 'products', component: ProductsPageComponent, title: 'Collection | VogueThreads' },
  { path: 'account', component: AccountPageComponent, title: 'My Account | VogueThreads' },
  { path: 'checkout', component: CheckoutPageComponent, title: 'Checkout | VogueThreads' },
  { path: 'register', component: RegistrationPageComponent, title: 'Create Account | VogueThreads' },
  { path: '**', redirectTo: '' },
];

