import { Component } from '@angular/core';


interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'home-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Ingresar',
      icon:'person-outline',
      redirecTo:'/login'
    },
    {
      name:'Registrarse',
      icon:'person-add-outline',
      redirecTo:'/register'
    },
    {
      name:'Informacion',
      icon:'bulb-outline',
      redirecTo:'/informacion'
    },
  ]




}
