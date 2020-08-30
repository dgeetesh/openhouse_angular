import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }
  
  houseList:any[];
  error:any;

  ngOnInit(): void {
    this.getHouseList();
  }

  houseDetails(){
    console.log('open-house-details');
    this._router.navigate(["view-list/open-house-details"]);
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

}
