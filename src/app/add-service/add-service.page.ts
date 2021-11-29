import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
 
  select: string;

  constructor(
    private alertService: AlertService,

    private addService: AddService,

  ) { }

  ngOnInit() {
  }
cadastroServico(form: NgForm){
this.addService.registerServico(
  form.value.categoria,
  form.value.subCategoria,
  form.value.titulo, 
  form.value.descricao, 
  form.value.cidade
).subscribe(
  data => {
    console.log(data);
    this.alertService.presentToast("Serviço salvo com sucesso");

  },
  error => {
    console.log(error);
  },
)


}

}

