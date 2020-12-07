import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegAnoPage } from './seg-ano.page';

describe('SegAnoPage', () => {
  let component: SegAnoPage;
  let fixture: ComponentFixture<SegAnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegAnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegAnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
