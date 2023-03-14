import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public buttonText: 'Continuar' | 'Iniciar sesiòn' = 'Continuar';
  public formLogin: FormGroup = new FormGroup({});
  public showPasswordInput: boolean = false;
  public languageList: {id: number, title: string}[] = [
    {id: 0, title: 'English'}, {id: 1, title: 'Español'}, {id: 2, title: 'Italiano'}
  ];
  public menuList = ['Plantillas', 'Precios', 'Aplicaciones', 'Trabajos', 'Blog', 'Desarrolladores', 'Acerca de', 'Ayuda', 'Configuración de las cookies'];

  constructor(
    private fb: FormBuilder,
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login(): void{
    if(!this.formLogin.get('password')?.touched){
      this.showPasswordInput = this.formLogin.get('email')?.valid || false;   
      console.log(this.showPasswordInput);        
      if(!!this.showPasswordInput){
        console.log(this.showPasswordInput);
        this.buttonText = 'Iniciar sesiòn';
        this.formLogin.get('email')?.disable()
      }
    }

  }

}
