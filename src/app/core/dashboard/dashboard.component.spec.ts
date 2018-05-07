import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../shared/material.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardComponent],
        imports: [
          MaterialModule
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
