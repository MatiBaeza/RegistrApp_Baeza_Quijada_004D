import { Injectable } from '@angular/core';
import { Users } from '../pages/interfaces/interfaces';
import { User } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpClient: HttpClient) { }

  CrearUsuario(usuario: User): Observable<User>{
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, usuario);
  }
}
