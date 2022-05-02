import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { AssignJudgesComponent } from './assign-judges.component';

describe('AssignJudgesComponent', () => {
  let component: AssignJudgesComponent;
  let fixture: ComponentFixture<AssignJudgesComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignJudgesComponent],
      imports: [ReactiveFormsModule, ButtonModule, DropdownModule, FormModule, GridModule, CardModule, RouterTestingModule, ButtonModule, ButtonGroupModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(AssignJudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
