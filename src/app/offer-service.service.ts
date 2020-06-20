import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  GetAllofferUrl="http://localhost:52669/api/Offres";
  
  constructor(private http:HttpClient) { }
  grtAllOffer()
  {
    return this.http.get<any>(this.GetAllofferUrl);
  }
}
