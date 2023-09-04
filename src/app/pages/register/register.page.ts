import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    email:'',
    edad:'',
    password:'',
    carrera:'',
    sede:'',
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header:'Registro Exitoso',
      message: 'Bienvenido/a a RegistrApp',
      buttons: ['OK'],
    });
    await alert.present();
  }


  Enviar(){
    console.log('Registrado con exito');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.edad='';
    this.usuario.password='';
    this.usuario.carrera='';
    this.usuario.sede='';
  }
}
