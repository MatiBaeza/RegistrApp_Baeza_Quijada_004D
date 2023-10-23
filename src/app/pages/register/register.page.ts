import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {


  constructor(private alertController: AlertController,
              private apiCrud: ApiCrudService,
              private router: Router) {}

  ngOnInit() {
  }

  usuario: User={
    usuario:'',
    email:'',
    password:'',
    carreras:'',
    sede:'',
    role: '',
    asig1: '',
    asig2: '',
    anno: '',
    semestre: '',
    horas: '',
    isactive: true
  }

  RegistrarUsuario(){
    this.apiCrud.CrearUsuario(this.usuario).subscribe();
    this.router.navigateByUrl("/informacion");
  }

}
