import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  GetAllClientsUrl="http://localhost:52669/api/clients";
  RegiterClientsUrl="http://localhost:52669/api/clients/Registre";
  LoginClientsUrl="http://localhost:52669/api/Clients/Login";
  

  constructor(private http:HttpClient) { }
  grtAllClients()
  {
    return this.http.get<any>(this.GetAllClientsUrl);
  }
  RegiterClients()
  {
    return this.http.get<any>(this.RegiterClientsUrl);
  }
  LoginClients()
  {
    return this.http.get<any>(this.LoginClientsUrl);
  }

}
