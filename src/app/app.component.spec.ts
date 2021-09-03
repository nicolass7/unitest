import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component : AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = new AppComponent();
  });
/*
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unittest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unittest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unittest app is running!');
  });
  */
  it ('La variable title debe contener el nombre del proyecto', ()=>{
    let myVar : string =  component.title;
    console.log('el valor >>:');
    expect(myVar).toEqual('UnitTest');
  })

  it ('La varible acti e simpre debe estar en True',()=>{
    let myVar : boolean = component.active;
    expect(myVar).toBeTruthy();
  })
  
  it('El metodo sum() me debe retornar la suma de los dos numeros enviados',()=>{
    let a : number = 5;
    let b : number = 10;
    let result : number = a + b;
    expect(component.sum(a,b)).toBe(result);
  })

  it('Debe existir un metodo llamado sum()',()=>{
    let metodoLlamdo = spyOn(component,'sum');
    component.sum(3,3);
    expect(metodoLlamdo).toHaveBeenCalled();
  })
});
