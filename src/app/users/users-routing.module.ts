import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KooriComponent } from './components/koori-ibox/koori/koori.component';
import { IboxComponent } from './components/koori-ibox/ibox/ibox.component';
import { KooriIboxComponent } from './components/koori-ibox/koori-ibox.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'koori-ibox', component: KooriIboxComponent, children: [
    {path: 'koori', component: KooriComponent},
    {path: 'ibox', component: IboxComponent}
  ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
