/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { STEAMComponent } from './steam.component';

describe('STEAMComponent', () => {
  let component: STEAMComponent;
  let fixture: ComponentFixture<STEAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STEAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STEAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
