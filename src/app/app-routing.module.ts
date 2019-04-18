import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductDetailsComponent } from './edit-product-details/edit-product-details.component';

export const routes: Routes = [
  { path: '', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'editProduct', component: EditProductDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
