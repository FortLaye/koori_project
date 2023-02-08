import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdbModalModule,
    NgChartsModule,
    SharedModule
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    MdbModalModule,
    NgChartsModule
  ],
})
export class CoreModule { }
