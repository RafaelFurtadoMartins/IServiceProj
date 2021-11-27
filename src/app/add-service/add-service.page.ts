import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  constructor(
    private addService: AddService,

  ) { }

  ngOnInit() {
  }
cadastroServico(form: NgForm){
this.addService.registerServico(
  form.value.titulo, 
  form.value.descricao, 
  form.value.cidade
).subscribe

}

}

