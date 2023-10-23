import { Injectable } from '@angular/core';
import { IEscuelas } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

  constructor(private httpclient: HttpClient) { }

  listarEscuelas():Observable<IEscuelas>{
    return this.httpclient.get<IEscuelas>(`${environment.apiUrl}/escuelas`);
  }
}
