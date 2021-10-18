import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { ApiService } from '../auth/api.service';
import { AuthenticationService } from '../auth/auth';
import { FeedPage } from '../feed/feed.page';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  email:string = '';
  password:string = '';
  errorMsg:string;
    alertController: any;



  constructor(public navCtrl: NavController,
    private apiService: ApiService, 
    public navParams: NavParams,
    public authService: AuthenticationService ,
    public alertCtrl: AlertController ,
    private router: Router,

  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  async errorFunc(message){
    let alert = this.alertCtrl.create({
      header: 'Warning!',
      message: 'error',
      buttons: ['OK']
    });
    (await alert).present();
  }




logIn(){


    return this.apiService
      .logar({ email: this.email, password: this.password })
      .subscribe(response => {
        if (response.success == true) {
          this.authService.login(response.data);
          this.router.navigate(["home-page"]);
        }

      },
        error => {

               const alert = await this.alertController.create({
                  cssClass: 'my-custom-class',
                  header: 'Alert',
                  subHeader: 'Subtitle',
                  message: 'This is an alert message.',
                  buttons: ['OK']
                });
        

      );
  }


}
