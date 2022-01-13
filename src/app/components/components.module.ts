import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { FilterPipe } from '../shared/filter.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    BannerComponent,
    FilterPipe,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    ProductsComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
