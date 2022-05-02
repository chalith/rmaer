import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-judges',
  templateUrl: './manage-judges.component.html',
  styleUrls: ['./manage-judges.component.scss']
})
export class ManageJudgesComponent {

  states = ['normal', 'active', 'disabled'];
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  constructor() { }
}
