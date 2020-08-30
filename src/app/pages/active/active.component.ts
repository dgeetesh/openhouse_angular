import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }

  toggle:Boolean=false;
  houseList:any[];
  error:any;
  @Output() houseDetails = new EventEmitter();

  toggleFun(house){
    localStorage.setItem('houseId',house._id)
    this.houseDetails.emit({ id: house._id });
    this.toggle=true;
    this._router.navigate(["accepted-offer"]);
  }

  getHouseList(){
   
    this.commonService.get(`house`).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 201)
      {
        this.error='Data not found';
      }else{
        this.houseList = data.data;
      }
      
    });  

  }

  ngOnInit(): void {
    this.getHouseList();
  }

}
