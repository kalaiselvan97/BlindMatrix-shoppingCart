import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { ViewModule } from './view/view.module';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './product/header/header.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ViewModule,LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
