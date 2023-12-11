import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutComponent } from './doughnut.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

describe('DoughnutComponent', () => {
  let component: DoughnutComponent;
  let fixture: ComponentFixture<DoughnutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),],
      declarations: [DoughnutComponent]
    });
    fixture = TestBed.createComponent(DoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
