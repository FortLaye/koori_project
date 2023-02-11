import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './components/home/home.component';
import { KooriIboxComponent } from './components/koori-ibox/koori-ibox.component';
import { KooriComponent } from './components/koori-ibox/koori/koori.component';
import { IboxComponent } from './components/koori-ibox/ibox/ibox.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    KooriIboxComponent,
    KooriComponent,
    IboxComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
