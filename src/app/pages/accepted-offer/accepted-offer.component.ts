import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accepted-offer',
  templateUrl: './accepted-offer.component.html',
  styleUrls: ['./accepted-offer.component.css']
})
export class AcceptedOfferComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }
  houseId :any ;
  error:any;
  leadList:any[];
  leadData:any;
  leadStatus:any='Accepted';  // this need to bind with nav bar   
  getLeadsList(){
    this.commonService.get(`visitors/${this.houseId}/${this.leadStatus}`).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 201)
      {
        this.error='Data not found';
      }else{
        this.leadList = data.data;
      }
      
    });  

  }

  updateStatus(status,visitorId){

    let body={
      status:status
    }
    console.log('updateStatus',body,visitorId)
    this.commonService.put(`visitors/status/${visitorId}`,body).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 201)
      {
        this.error='Data not found';
      }else{
        this.leadData = data.data;
      }
      
    });  

  }

  ngOnInit(): void {
    this.houseId = localStorage.getItem('houseId') ? localStorage.getItem('houseId') : null ;
    this.getLeadsList();
  }

}
