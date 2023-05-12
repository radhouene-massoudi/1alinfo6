import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'first',component:FirstComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
