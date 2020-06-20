import { Component, OnInit } from '@angular/core';
import{OfferServiceService} from '../offer-service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lesOffers=[];
  constructor(private offer:OfferServiceService) { }

  ngOnInit(): void {
    this.offer.grtAllOffer().subscribe(
      result=>{
        this.lesOffers=result;
      },
      error=>{
        console.log(error);
        
      }
    )
  }

}