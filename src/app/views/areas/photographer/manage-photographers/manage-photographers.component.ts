import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-photographers',
  templateUrl: './manage-photographers.component.html',
  styleUrls: ['./manage-photographers.component.scss']
})
export class ManagePhotographersComponent implements OnInit {

  visible = [true, true];
  dismissible = true;

  constructor() { }

  ngOnInit(): void {
  }

  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }

}
