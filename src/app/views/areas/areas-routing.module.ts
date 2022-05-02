import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignJudgesComponent } from './admin/assign-judges/assign-judges.component';
import { AwardCategoriesComponent } from './admin/award-categories/award-categories.component';

import { ManageEventComponent } from './admin/manage-event/manage-event.component';
import { ManageJudgesComponent } from './admin/manage-judges/manage-judges.component';
import { ManageSubmissionsComponent } from './contestant/manage-submissions/manage-submissions.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Areas',
    },
    children: [
      {
        path: 'manage-event',
        component: ManageEventComponent,
        data: {
          title: 'Manage Event',
        },
      },
      {
        path: 'award-categories',
        component: AwardCategoriesComponent,
        data: {
          title: 'Award Categories',
        },
      },
      {
        path: 'manage-judges',
        component: ManageJudgesComponent,
        data: {
          title: 'Manage Judges',
        },
      },
      {
        path: 'assign-judges',
        component: AssignJudgesComponent,
        data: {
          title: 'Assign Judges',
        },
      },
      {
        path: 'manage-submissions',
        component: ManageSubmissionsComponent,
        data: {
          title: 'Manage Submissions',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}

