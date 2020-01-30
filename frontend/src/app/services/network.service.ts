import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin, ResponseRegister } from '../models/user.model';
import { ProductResponse, ProductResult, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }

  login(data): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>('auth/login', data)
  }

  register(data): Observable<ResponseRegister> {
    return this.httpClient.post<ResponseRegister>('auth/register', data)
  }

  getProductAll(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>('product')
  }

  getProductById(id: string): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(`product/${id}`)
  }

  addProduct(data): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>('product', this.makeFormData(data))
  }

  editProduct(id: string, data): Observable<ProductResponse> {
    return this.httpClient.put<ProductResponse>(`product/${id}`, this.makeFormData(data))
  }

  makeFormData(data: Product): FormData {
    let form = new FormData();
    form.append("name", data.name);
    form.append("price", data.price.toString());
    form.append("stock", data.stock.toString());
    form.append("image", data.image);
    return form;
  }

}
