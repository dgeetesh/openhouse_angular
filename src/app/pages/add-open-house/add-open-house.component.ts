import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-open-house',
  templateUrl: './add-open-house.component.html',
  styleUrls: ['./add-open-house.component.css']
})
export class AddOpenHouseComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }

  addHouseForm = new FormGroup({
    title:new FormControl(''),
     description:new FormControl(''),
     country:new FormControl(''),
     address:new FormControl(''),
     city:new FormControl(''),
     state:new FormControl(''),
     zipCode:new FormControl(''),
  });

  error: any;

  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    let body={
     title:this.addHouseForm.value.title,
     description:this.addHouseForm.value.description,
     country:this.addHouseForm.value.country,
     address:this.addHouseForm.value.address,
     city:this.addHouseForm.value.city,
     state:this.addHouseForm.value.state,
     zipCode:this.addHouseForm.value.zipCode,
    }
    console.log(body);
    this.commonService.post('house',body).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 201)
      {
        this.error='Data not found';
        console.log('error',this.error);
      }else{
        this._router.navigate(["dashboard"]);
      }
      // this.products = data;
    })  
  }



  ngOnInit(): void {
  }

}
