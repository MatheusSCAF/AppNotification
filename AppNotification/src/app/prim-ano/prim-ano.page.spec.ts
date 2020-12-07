import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimAnoPage } from './prim-ano.page';

describe('PrimAnoPage', () => {
  let component: PrimAnoPage;
  let fixture: ComponentFixture<PrimAnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimAnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimAnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
