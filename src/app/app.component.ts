import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavOpen = false;
  displayNone = false;
  icon = false;
  onStartpage = true;

constructor(private router: Router) {
  this.checkRoute()
}

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

  checkRoute() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.onStartpage = true;
          this.sidenavOpen = false;
        } else {
          this.onStartpage = false;
        }
      }
    });
  }
}
