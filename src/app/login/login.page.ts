// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AlertController, NavController, NavParams } from '@ionic/angular';
// import { AuthProvider } from '../auth/auth';
// import { FeedPage } from '../feed/feed.page';


// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {


//   email:string = '';
//   password:string = '';

//   errorMsg:string;



//   constructor(public navCtrl: NavController, 
//     public navParams: NavParams,
//     public authService: AuthProvider ,
   
//     public alertCtrl: AlertController ,
  
//   ) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginPage');
//   }


//   async errorFunc(message){
//     let alert = this.alertCtrl.create({
//       header: 'Warning!',
//       message: 'error',
//       buttons: ['OK']
//     });
//     (await alert).present();
//   }




// logIn(){
 
//     if (this.email.trim() !==''    ) {    
      
//       console.log(this.email.trim() + "   " + this.password.trim() )
       
//       if (this.password.trim()  === '') {
//         this.errorFunc('Please put your password')
 
//       }else{
 
//         let credentials = {
//           email: this.email,
//             password: this.password
//         };
 
        
//          this.authService.login(credentials).then((result) => {
//             console.log(result);
//             this.navCtrl.navigateForward('FeedPage');
           
//         }, (err) => {
     
//             console.log(err);
//             this. errorFunc('Wrong credentials ! try again')
//             console.log("credentials: "+JSON.stringify(credentials))
            
//         });
 
//       }
      
//    }
//    else{
    
//     this. errorFunc('Please put a vaild password !  for ex:(123456)')
   
//     }
 


// }


// }
