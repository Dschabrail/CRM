import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isOnDashboard: boolean;
  public isOnUser: boolean;
  public isOnImprint: boolean;
  public isOnTools: boolean;
  sidenavOpen: boolean = false;
  displayNone: boolean = false;
  icon: boolean = false;
  onStartpage: boolean = true;

  constructor(private router: Router) {
    this.checkRoute();
    this.checkOnWichPage();
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
    if (window.innerWidth <= 1200 && this.sidenavOpen == true) {
      this.displayNone = true;
    } else {
      this.displayNone = false;
    }
  }

  closeSidenav() {
    if (window.innerWidth <= 1200) {
      this.sidenavOpen = false;
    }
  }

  showIcon() {
    if (window.innerWidth <= 1200) {
      this.icon = true;
    } else {
      this.icon = false;
    }
  }

  checkRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.onStartpage = true;
          this.sidenavOpen = false;
        } else {
          this.onStartpage = false;
          this.checkSideNavOpen();
        }
      }
    });
  }

  checkOnWichPage() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/dashboard') {
          this.isOnDashboard = true;
          this.isOnImprint = false;
          this.isOnUser = false;
          this.isOnTools = false;
        } else if (event.url === '/user') {
          this.isOnDashboard = false;
          this.isOnImprint = false;
          this.isOnUser = true;
          this.isOnTools = false;
        } else if (event.url === '/imprint') {
          this.isOnDashboard = false;
          this.isOnImprint = true;
          this.isOnUser = false;
          this.isOnTools = false;
        } else if (event.url === '/tools') {
          this.isOnTools = true;
          this.isOnDashboard = false;
          this.isOnImprint = false;
          this.isOnUser = false;
        }
      }
    });
  }

  checkSideNavOpen() {
    if (window.innerWidth > 1450) {
      this.sidenavOpen = true;
    } else {
      this.sidenavOpen = false;
    }
  }
}
