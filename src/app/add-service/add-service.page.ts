import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { service } from '../models/models.servicos.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
 
  constructor (
  ){ }

  ngOnInit() {
  }
cadastrar(form: NgForm){
  
}


}

// register(form: NgForm) {
//   this.authService.register(form.value.name, form.value.email, form.value.telephone, form.value.cpf, 
//     form.value.password).subscribe(