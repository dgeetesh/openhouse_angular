import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }

  userData:any;
  error:any;
  email:any;
  phoneNumber:any;
  website:any;
  designation:any;
  officeName:any;
  officeAddress:any;
  officePhoneNumber:any;
  firstName:any;
  lastName:any;

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
   
    this.commonService.get(`users`).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 201)
      {
        this.error='Data not found';
      }else{
        this.userData = data.data;
        console.log('this.userData',this.userData)
        this.firstName=this.userData.firstName ? this.userData.firstName : '';
        this.lastName=this.userData.lastName ? this.userData.lastName : '';
        this.email=this.userData.email;
        this.phoneNumber=this.userData.phoneNumber ? this.userData.phoneNumber : '';
        this.designation=this.userData.designation ? this.userData.designation : '';
        this.website=this.userData.website ? this.userData.website : '';
        this.officeName=this.userData.officeName ? this.userData.officeName : '';
        this.officeAddress=this.userData.officeAddress ? this.userData.officeAddress : '';
        this.officePhoneNumber=this.userData.officePhoneNumber ? this.userData.officePhoneNumber : '';
      }
      
    });  

  }

  updateUserDetails(){
   let body={
        firstName:this.firstName ? this.firstName : '',
        lastName:this.lastName ? this.lastName : '',
        email:this.email,
        phoneNumber:this.phoneNumber ? this.phoneNumber : '',
        designation:this.designation ? this.designation : '',
        website:this.website ? this.website : '',
        officeName:this.officeName ? this.officeName : '',
        officeAddress:this.officeAddress ? this.officeAddress : '',
        officePhoneNumber:this.officePhoneNumber ? this.officePhoneNumber : ''
   };
    this.commonService.put(`users`,body).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 201)
      {
        this.error='Data not found';
      }else{
        this.userData = data.data;
        console.log('this.userData',this.userData);
        this._router.navigate(["view-profile"]);
      }
      
    });  

  }


}
