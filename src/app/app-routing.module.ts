import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
import { RemoveoffreComponent } from './removeoffre/removeoffre.component';
import { UpdateoffreComponent } from './updateoffre/updateoffre.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'list',component:ListoffreComponent},
  {path:'addOffre',component:AddoffreComponent},
  {path:'detail/:idt',component:DetailProductComponent},
  {path:'remove/:idt',component:RemoveoffreComponent},
  {path:'update/:id',component:UpdateoffreComponent},
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
