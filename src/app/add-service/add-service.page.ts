
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicoService } from '../services/servico.service';
import { EditService } from '../services/edit.service';
import { NavController } from '@ionic/angular';

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
    private fb: FormBuilder,
    private Storage: StorageService,
    private alertService: AlertService,
    private authService: AuthService,
    private addService: AddService,
    private route: Router,
    private router: ActivatedRoute,
    private servico: ServicoService,
    private servicoservice:EditService,
    private navCtrl:NavController,
    


  ) { }

  ngOnInit() {
    this.router.params.subscribe(response => {
      this.createForm()
      if (response.hasOwnProperty('id')
      ) {
        this.Storage.getToken('token').then((token: any) => {
          this.servico.show(response['id'], token).subscribe(responda => {
            console.log(responda);
            this.createForm(responda);
          })
        })


      }
    }
    )

  }

  cadastroServico() {
    this.Storage.getToken('token').then((token: any) => {
      this.addService.registerServico(
        this.formulario.value,
        token
      ).subscribe(
        data => {
          console.log(data);
          this.alertService.presentToast("Serviço salvo com sucesso");
          return this.navCtrl.navigateRoot('/feed')

        },
        error => {
          console.log(error);
        },
      )
    })

  }
  createForm(data?) {
    this.formulario = this.fb.group({
      id: data ? data.id : '',
      titulo: data ? data.titulo : '',
      descricao: data ? data.descricao : '',
      categoria: data ? data.categoria : '',
      subCategoria: data ? data.subcategoria : '',
      cidade: data ? data.Cidade_estado : ''
    })
  }
  atualizarServico() {
    this.Storage.getToken('token').then((token: any)=>{
      this.servicoservice.Atualizar(
        token,
        this.formulario.value,
       ).subscribe(
        data => {
          console.log(data);
          this.alertService.presentToast("Serviço salvo com sucesso");
          return this.navCtrl.navigateRoot('/feed')

        },
        error => {
          console.log(error);
        },
       )
    })


  }
  salvarDados() {
    return this.formulario.value.id ? this.atualizarServico() : this.cadastroServico()
  }
}

