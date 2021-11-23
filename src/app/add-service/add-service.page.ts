import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { service } from '../models/models.servicos.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
 
  
  constructor (
    private authService: AuthService,
  ){ }

  ngOnInit() {
  }

  cadastrar(form: NgForm){
  this
    
  }

}

