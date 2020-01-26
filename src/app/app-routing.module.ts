import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'items', component: ItemsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
