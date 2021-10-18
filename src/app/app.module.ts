import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageModule } from './register/register.module';
import { LoginPageModule } from './login/login.module';
import { FeedPageModule } from './feed/feed.module';
import { LoginPageRoutingModule } from './login/login-routing.module';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [AppComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), LoginPageModule, RegisterPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
