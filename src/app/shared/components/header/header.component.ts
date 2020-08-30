import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import * as AnythingThatIsNotDollarSignOrSymbolOrjQuery from 'jquery';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(path){
    this._router.navigate([path]);
  }

  logout(){
    let body={
     };
     this.commonService.post('logout',body).subscribe((data: any)=>{
       console.log(data);
       if(data.status !== 201)
       {
        //  this.error='Error in login';
        //  console.log('error',this.error);
       }else{
         console.log("true");
         localStorage.clear();
        //  localStorage.remove('token');
         this._router.navigate(["login"]);
       }
     }) 

  }

}
