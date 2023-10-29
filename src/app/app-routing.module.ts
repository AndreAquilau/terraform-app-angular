import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { AppLayoutComponent } from "./layout/app.layout.component";


const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'modulos',
        loadChildren: () => import('./views/modulos/modulos.module').then(m => m.ModulosModule)
      }

    ]
  },
  //{ path: 'notfound', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
