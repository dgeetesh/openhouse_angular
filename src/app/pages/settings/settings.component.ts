import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
