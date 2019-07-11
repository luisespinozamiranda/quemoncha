import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/servicios/util.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private utilitario:UtilService) { }

  ngOnInit() {
  }

}
