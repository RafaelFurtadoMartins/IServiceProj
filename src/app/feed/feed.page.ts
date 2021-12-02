import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { servico, ServicoService } from '../services/servico.service';
import { service } from '../models/models.servicos.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
servicos: servico[];
  constructor(
    private route: Router,
    private service: ServicoService
       ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.servicos = response;
    })
  }

  navigateService() {
    this.route.navigate(['/add-service']);
  }
}
