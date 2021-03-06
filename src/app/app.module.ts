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
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    LoginPageModule,
    RegisterPageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],

  providers: [
    SplashScreen,
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
