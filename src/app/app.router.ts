import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';



export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'products', component: ProductsComponent, },
    {path: 'about', component: AboutComponent},
    {path: 'cart', component: CartComponent},
    {path: 'sidebar', component: SidebarComponent},
]

export const routes:ModuleWithProviders = RouterModule.forRoot(router);