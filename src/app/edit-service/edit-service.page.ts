import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {

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
  editService(){
    this.Storage.getToken('token').then((token:any)=>{
      this.addService.registerServico(
       this.formulario.value,
        token
      ).subscribe(
        data => {
          console.log(data);
          this.alertService.presentToast("Serviço alterado com sucesso");
      
        },
        error => {
          console.log(error);
        },
      )
    })
      
  }
}
