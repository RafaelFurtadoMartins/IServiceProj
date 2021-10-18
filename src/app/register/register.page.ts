// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {  NavController, AlertController, NavParams } from '@ionic/angular';
// import { AuthenticationService } from '../auth/auth';
// import { LoginPage } from '../login/login.page';
// import { AuthProvider } from '../auth/auth';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.page.html',
//   styleUrls: ['./register.page.scss'],
// })
// export class RegisterPage implements OnInit {
//   nome:string = '';
//   email:string = '';
//   cpf:string = '';
//   senha:string = '';
//   confirmarSenha:string = '';
//   errorMsg:string;
//   navCtrl: any;

//   constructor(private route: Router,
//     public navParams: NavParams,
//     public authService: AuthenticationService ,
//     public alertCtrl: AlertController ,) { }

//   ngOnInit() {}
  
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad RegisterPage');
//   }


//   async errorFunc(message){
//     let alert = this.alertCtrl.create({
//       header: 'Warning!',
//       buttons: ['OK']
//     });
//     (await alert).present();
//   }
  

// home(){
//   this.route.navigate(['/login']);

// }
// register(){
//   if (this.nome.trim()  &&  this.email.trim()  && this.cpf.trim()  && this.senha.trim()  
//   && this.senha.trim()  && this.confirmarSenha.trim() ) {    
      
    
       
//     if (this.senha.trim()  === '') {
//       this.errorFunc('Digite sua senha')

//     }else{

//       let credentials = {
//         nome: this.nome,
//         email: this.email,
//         cpf: this.cpf,
//         senha: this.senha,
//         confirmarSenha: this.confirmarSenha,

//       };

      
//        this.authService.createAccount(credentials).then((result) => {
//           console.log(result);
//           this.navCtrl.setRoot(LoginPage);
         
//       }, (err) => {
   
//           console.log(err);
//           this. errorFunc('Wrong credentials ! try again')
//           console.log("credentials: "+JSON.stringify(credentials))
          
//       });

//     }
    
//  }
//  else{
  
//   this. errorFunc('Please put a vaild password !  for ex:(123456)')
 
//   }

//   }
// }
