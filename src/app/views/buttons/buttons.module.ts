import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

import { ButtonsRoutingModule } from './buttons-routing.module';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  TableModule,
  UtilitiesModule
} from '@coreui/angular';

import { TablesComponent } from '../base/tables/tables.component';

import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    DropdownsComponent,
    
  ],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    TableModule,
    NavbarModule
  ]
})
export class ButtonsModule {
}
