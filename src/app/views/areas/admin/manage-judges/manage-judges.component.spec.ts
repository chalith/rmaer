import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { ManageJudgesComponent } from './manage-judges.component';

describe('ManageJudgesComponent', () => {
  let component: ManageJudgesComponent;
  let fixture: ComponentFixture<ManageJudgesComponent>;
  let iconSetService: IconSetService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageJudgesComponent ],
      imports: [CardModule, GridModule, ButtonModule, RouterTestingModule, IconModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(ManageJudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
