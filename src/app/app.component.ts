import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor( public router: Router) {

  }

  onToggleSidenav(data: sideNavToggle): void {

    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
}
