import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestComponent,
    NotfoundComponent,
    LoginComponent,
    NavComponent,
    DetailProductComponent,
    AddProductComponent,
    AddoffreComponent,
    ListoffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
