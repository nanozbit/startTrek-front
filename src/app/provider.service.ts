import { Injectable } from '@angular/core';
import {Response} from '../app/model/response.interface';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private urlApi = "http://localhost:8080/api/v1/injectors";
  constructor(private http:HttpClient) { }

  sendData(plasmaStreamRequest:Response):Observable<Response>{
    console.log(plasmaStreamRequest);
    return this.http.post<Response>(this.urlApi, plasmaStreamRequest);
  }
}
 