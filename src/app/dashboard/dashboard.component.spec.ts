import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { MatCardModule } from '@angular/material/card';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { DoughnutComponent } from '../doughnut/doughnut.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()), MatCardModule,],
      declarations: [DashboardComponent],
      providers: [BarChartComponent, DoughnutComponent],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
