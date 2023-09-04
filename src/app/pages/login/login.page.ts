import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    apellido:'',
    email:'',
    edad:'',
    password:''
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header:'Ingreso Exitoso',
      message: 'Bienvenido/a a RegistrApp',
      buttons: ['OK'],
    });
    await alert.present();
  }


  Enviar(){
    console.log('Ingreso Exitoso');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.apellido='';
    this.usuario.email='';
    this.usuario.edad='';
    this.usuario.password='';
  }
}
