import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  ButtonGroupModule,
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { AreasRoutingModule } from './areas-routing.module';

import { ManageEventComponent } from './admin/manage-event/manage-event.component';
import { AwardCategoriesComponent } from './admin/award-categories/award-categories.component';
import { ManageJudgesComponent } from './admin/manage-judges/manage-judges.component';
import { AssignJudgesComponent } from './admin/assign-judges/assign-judges.component';
import { ManageSubmissionsComponent } from './contestant/manage-submissions/manage-submissions.component';
import { ManagePhotographersComponent } from './photographer/manage-photographers/manage-photographers.component';

@NgModule({
  imports: [
    CommonModule,
    AreasRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
  ],
  declarations: [
    ManageEventComponent,
    AwardCategoriesComponent,
    ManageJudgesComponent,
    AssignJudgesComponent,
    ManageSubmissionsComponent,
    ManagePhotographersComponent
  ],
})
export class AreasModule { }
