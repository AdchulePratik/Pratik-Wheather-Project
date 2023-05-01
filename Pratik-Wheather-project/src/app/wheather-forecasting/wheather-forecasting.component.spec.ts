import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherForecastingComponent } from './wheather-forecasting.component';

describe('WheatherForecastingComponent', () => {
  let component: WheatherForecastingComponent;
  let fixture: ComponentFixture<WheatherForecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatherForecastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheatherForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
