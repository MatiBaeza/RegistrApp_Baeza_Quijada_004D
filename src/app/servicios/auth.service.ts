import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }
  GetUserByEmail(codigo:any): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?email=${codigo}`);
  }
  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }
  GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
  IsExiste(){
    if(this.IsLoggedIn()){
      return true
    }
    else return false
  }
}
