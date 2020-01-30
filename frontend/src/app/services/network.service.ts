import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin, ResponseRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }

  login(data): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>('http://localhost:8081/api/v1/auth/login', data)
  }

  register(data): Observable<ResponseRegister>{
    return this.httpClient.post<ResponseRegister>('http://localhost:8081/api/v1/auth/register', data)
  }
}
