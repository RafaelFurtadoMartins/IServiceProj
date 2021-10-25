import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { RegisterPage } from '../register/register.page';


@Component({
    selector: 'page-login',
    templateUrl: 'login.page.html',
})
export class LoginPage {

    constructor(    private modalController: ModalController,
        private authService: AuthService,
        private navCtrl: NavController,
        private alertService: AlertService

    ) {
    }

    ngOnInit() {
    }
  
    // Dismiss Login Modal
    dismissLogin() {
      this.modalController.dismiss();
    }
  
    // On Register button tap, dismiss login modal and open register modal
    async registerModal() {
      this.dismissLogin();
      const registerModal = await this.modalController.create({
        component: RegisterPage
      });
      return await registerModal.present();
    }
  
    login(form: NgForm) {
      this.authService.login(form.value.email, form.value.password).subscribe(
        data => {
          this.alertService.presentToast("Logged In");
        },
        error => {
          console.log(error);
        },
        () => {
          this.dismissLogin();
          this.navCtrl.navigateRoot('feed-page');
        }
      );
    }
  
  }