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
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [AppComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), LoginPageModule, RegisterPageModule, HttpClientModule, NativeStorage,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
