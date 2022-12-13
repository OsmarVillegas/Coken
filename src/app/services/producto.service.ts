import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/models/producto.model';

const baseUrl = 'http://localhost:8080/api/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(baseUrl);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  removeOne(id: any): Observable<any> {
    return this.http.put(`${baseUrl}/remove/${id}`,null);
  }

  addOne(id: any): Observable<any> {
    return this.http.put(`${baseUrl}/add/${id}`,null);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
