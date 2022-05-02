import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbModule, CardModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { AwardCategoriesComponent } from './award-categories.component';

describe('AwardCategoriesComponent', () => {
  let component: AwardCategoriesComponent;
  let fixture: ComponentFixture<AwardCategoriesComponent>;
  let iconSetService: IconSetService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AwardCategoriesComponent],
      imports: [CardModule, GridModule, BreadcrumbModule, RouterTestingModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(AwardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
