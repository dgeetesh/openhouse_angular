import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  error: any;

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let body={
     email:this.loginForm.value.email,
     password:this.loginForm.value.password, 
    }
    console.log(body);
    this.commonService.post('login',body).subscribe((data: any)=>{
      console.log(data);
      if(data.status !== 200)
      {
        this.error='Invalid Credentials';
        console.log('error',this.error);
      }else{
        console.log("true");
        let token=data.token;
        localStorage.setItem('token',token);
        this._router.navigate(["dashboard"]);
      }
    })  
  }

 

}
