import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveoffreComponent } from './removeoffre.component';

describe('RemoveoffreComponent', () => {
  let component: RemoveoffreComponent;
  let fixture: ComponentFixture<RemoveoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
