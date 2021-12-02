import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
  formulario: FormGroup;
  categoria: string;
  subCategoria: string;
  // usuario: any = JSON.parse(this.authService.getToken())
  constructor(
    private fb : FormBuilder,
    private Storage : StorageService,
    private alertService: AlertService,
    private authService: AuthService,
    private addService: AddService,

  ) { }

  ngOnInit() {
    this.formulario=this.fb.group({
      titulo:'',
      descricao:'',  
      categoria:'',
      subCategoria:'',
     cidade:'',
    })
  }
cadastroServico(){
this.Storage.getToken('token').then((token:any)=>{
  this.addService.registerServico(
   this.formulario.value,
    token
  ).subscribe(
    data => {
      console.log(data);
      this.alertService.presentToast("Serviço salvo com sucesso");
  
    },
    error => {
      console.log(error);
    },
  )
})
  


}

}

