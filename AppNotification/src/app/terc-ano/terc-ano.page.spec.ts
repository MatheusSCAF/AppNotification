import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercAnoPage } from './terc-ano.page';

describe('TercAnoPage', () => {
  let component: TercAnoPage;
  let fixture: ComponentFixture<TercAnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercAnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercAnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
