import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.isMenuButtonClicked = false;
  }

  ngOnInit(): void {
  }

  isMenuButtonClicked: boolean;
  onMenuButtonClick() {
    this.isMenuButtonClicked = !this.isMenuButtonClicked;
    console.log(this.isMenuButtonClicked);
  }

}
