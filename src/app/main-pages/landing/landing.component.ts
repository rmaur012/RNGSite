import { Component, OnInit } from '@angular/core';
import { VersusGameTableComponent } from './versus-game-table/versus-game-table.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'   ]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
