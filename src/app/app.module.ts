import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { CookieService } from './services/coookie.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    LoginGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
