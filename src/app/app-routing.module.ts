import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from '../app/components/products/products.component'
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component'
import {ProductDispalyPageComponent} from './components/product-dispaly-page/product-dispaly-page.component'
const routes: Routes = [
  // {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'order', component:CheckoutComponent},
  {path:'confirmation',component: OrderConfirmationComponent},
  {path:'pdp/:id', component:ProductDispalyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
