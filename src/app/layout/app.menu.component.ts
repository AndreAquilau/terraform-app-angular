import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Modulos',
        items: [
          {
            label: 'Console Home',
            icon: 'pi pi-fw pi-microsoft',
            items: [
              {
                label: 'Console',
                icon: 'pi pi-fw pi-angle-right',
                routerLink: ['/modulos/console']
              },
              {
                label: 'Terraform',
                icon: 'pi pi-fw pi-sitemap',
                routerLink: ['/modulos/terraform']
              },
            ]
          },
        ]
      },
    ];
  }
}
