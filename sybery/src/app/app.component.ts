import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public altLogo = 'sybery';
  public isHomeActive = true;
  public isServiceActive = false;
  public isPortfolioActive = false;
  public isAboutActive = false;
  public isContactActive = false;

  ngOnInit() {

  }

  onSelectNav(navType) {

    if (navType == 'Home') {
      this.isHomeActive = true;
      this.isServiceActive = false;
      this.isPortfolioActive = false;
      this.isAboutActive = false;
      this.isContactActive = false;

    } else if (navType == 'Service') {
      this.isServiceActive = true;
      this.isHomeActive = false;
      this.isPortfolioActive = false;
      this.isAboutActive = false;
      this.isContactActive = false;

    } else if (navType == 'Portfolio') {
      this.isPortfolioActive = true;
      this.isServiceActive = false;
      this.isHomeActive = false;
      this.isAboutActive = false;
      this.isContactActive = false;

    } else if (navType == 'About') {
      this.isAboutActive = true;
      this.isPortfolioActive = false;
      this.isServiceActive = false;
      this.isHomeActive = false;
      this.isContactActive = false;

    } else if (navType == 'Contact') {
      this.isContactActive = true;
      this.isAboutActive = false;
      this.isPortfolioActive = false;
      this.isServiceActive = false;
      this.isHomeActive = false;

    }
  }
}
