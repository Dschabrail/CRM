import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavOpen = false;
  displayNone = false;
  icon = false;

  sidenavToggle() {
    if (this.sidenavOpen == false) {
      this.sidenavOpen = true;
      this.showIcon();
    } else {
      this.sidenavOpen = false;
      this.showIcon();
    }
  }

  sidenavToggleResponsiv() {
    if (window.innerWidth <= 1070 && this.sidenavOpen == true) {
      this.displayNone = true;
    } else {
      this.displayNone = false;
    }
  }

  closeSidenav() {
    if (window.innerWidth <= 1070) {
      this.sidenavOpen = false;
    }
  }

  showIcon() {
    if (window.innerWidth <= 1070) {
      this.icon = true;
    } else {
      this.icon = false;
    }
  }
}
