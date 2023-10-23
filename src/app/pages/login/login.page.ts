import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata: any;

  usuario = {
    usuario: "",
    email: "",
    password: "",
    carreras: "",
    sede: "",
    role: "",
    isactive: true
  }

  loginForm: FormGroup;

  constructor(private authservice: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      'email': new FormControl("", [Validators.required, Validators.minLength(8), Validators.email]),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)])
    })

     }

  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid){
      this.authservice.GetUserByEmail(this.loginForm.value.email).subscribe(resp =>{
        this.userdata = resp;
        console.log(this.userdata)
        if(this.userdata.length >0)
        {
          this.usuario ={
            usuario: this.userdata[0].usuario,
            email: this.userdata[0].email,
            password: this.userdata[0].password,
            carreras: this.userdata[0].carreras,
            sede: this.userdata[0].sede,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive,
          }
          
          if(this.usuario.password === this.loginForm.value.password){
            if(this.usuario.isactive){
              sessionStorage.setItem('email',this.usuario.email);
              sessionStorage.setItem('userrole',this.usuario.role);
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('sesion iniciada');
              this.router.navigateByUrl("/informacion");
            }
            else{
              this.UserInactivo();
            }
            
          }
          else{
            this.Error();
            this.loginForm.reset();
          }

        }
        else{
          this.loginForm.reset();
          this.NoExiste();
        }
      
      })
    }
  }

  async showToast(msg:any){
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  async UserInactivo(){
    const alerta = await this.alertController.create({
      header: 'Usuario inactivo',
      message: 'Debe contactarse con admin@admin.cl',
      buttons: ['OK']
    })
    await alerta.present();
    return;

  }

  async Error(){
    const alerta = await this.alertController.create({
      header: 'Error',
      message: 'revisa tus credenciales',
      buttons: ['OK']
    })
    await alerta.present();
    return;
  }
  async NoExiste(){
    const alerta = await this.alertController.create({
      header: 'Usuario inexistente',
      message: 'debe crear el usuario',
      buttons: ['OK']
    })
   await alerta.present();
    return;
  }
}

