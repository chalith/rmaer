import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgesComponent } from './badges/badges.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastersComponent } from './toasters/toasters.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notifications'
    },
    children: [
      {
        path: '',
        redirectTo: 'badges'
      },
      {
        path: 'badges',
        component: BadgesComponent,
        data: {
          title: 'Badges'
        }
      },
      {
        path: 'modal',
        component: ModalsComponent,
        data: {
          title: 'Modal'
        }
      },
      {
        path: 'toasts',
        component: ToastersComponent,
        data: {
          title: 'Toasts'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
