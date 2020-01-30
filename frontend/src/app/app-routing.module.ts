import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/member/login/login.component';
import { RegisterComponent } from './components/member/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { AuthGuard } from './services/auth.guard';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'stock', children: [
      { path: '', component: StockHomeComponent },
      { path: 'create', component: StockCreateComponent },
      { path: 'edit/:id', component: StockEditComponent },
    ], canActivate: [AuthGuard]
  },
  { path: 'shop', component: ShopHomeComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
