import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ProfileComponent implements OnInit {
  username = 'testUsername';
  leverScore = 27;
  cheerCount = 0;
  cheerButtonPressed = false;

  leverStats = {
    round1 : 6,
    round2 : 4,
    round3 : 3,
    round4 : 1,
  };

  constructor() {}

  ngOnInit() {}

  cheerOn() {
    this.cheerCount++;
    this.cheerButtonPressed = true;
  }

}
