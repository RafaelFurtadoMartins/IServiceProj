import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { service } from '../models/models.component';
import { CadastroService } from '../services/add_service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

    public service: service = ;

  constructor (private cadastrar: CadastroService){ }

  ngOnInit() {
  }

  public async salvar(){
    this.cadastrar.cadastrar(this.service).subscribe(retorno => {
        // this.service = retorno;

    });
  }

}