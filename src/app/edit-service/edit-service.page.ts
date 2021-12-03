import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage/storage.service';
import { service } from '../models/models.servicos.component';
import { servico, ServicoService } from '../services/servico.service';
import { EditService } from '../services/edit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {
  // Token: any;
  formulario: FormGroup;
  categoria: string;
  subCategoria: string;
  servicos: servico[];
  // usuario: any = JSON.parse(this.authService.getToken())
  constructor(
    private fb: FormBuilder,
    private Storage: StorageService,
    private alertService: AlertService,
    private authService: AuthService,
    private addService: AddService,
    private service: EditService,
    private route: ActivatedRoute,
    private servico: ServicoService
  ) { }

  // ngOnInit() {
  //   this.formulario=this.fb.group({
  //     titulo:'',
  //     descricao:'',  
  //     categoria:'',
  //     subCategoria:'',
  //    cidade:'',
  //   })
  ngOnInit() {
   this.BuscarServicos()
   
  }
  editService() {
    this.Storage.getToken('token').then((token: any) => {
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
  delete(id) {
    this.Storage.getToken('token').then((token: any) => {
      this.service.Deletar(
        token,
        id

      ).subscribe(
        data => {
          console.log(data);
          this.alertService.presentToast("Serviço deletado com sucesso");
          this.BuscarServicos()

        },
        error => {
          console.log(error);
        },
      )
    })

  }
  BuscarServicos(){
    this.Storage.getToken('token').then((token: any) => {
      this.service.Mservice(token).subscribe(response => {
        this.servicos = response;

      })
    })
  }
}



