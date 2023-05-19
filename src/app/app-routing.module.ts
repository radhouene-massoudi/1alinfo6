import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'detail/:idt',component:DetailProductComponent},
  {path:'test',component:TestComponent},
  {path:'add',component:AddProductComponent},
  {path:'first',component:FirstComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
