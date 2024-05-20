import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'products', component: ProductsComponent },
];
