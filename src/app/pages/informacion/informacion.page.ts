import { Component, OnInit } from '@angular/core';
import { EscuelasService } from 'src/app/servicios/escuelas.service';
import { IEscuelas } from '../interfaces/interfaces';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage {

  escuelas =[];

  constructor(private escuelasService: EscuelasService,
              private loadingCtrl : LoadingController) { }

  ionViewWillEnter(){
  this.loadEscuelas();
  }

  async loadEscuelas(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();

    this.escuelasService.listarEscuelas().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp)
          this.escuelas=JSON.parse(listString)
          event?.target.complete();
          console.log(this.escuelas);
          
        },
        error: err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )   
  }
}
