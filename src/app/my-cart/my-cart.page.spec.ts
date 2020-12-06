import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCartPage } from './my-cart.page';

describe('MyCartPage', () => {
  let component: MyCartPage;
  let fixture: ComponentFixture<MyCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
