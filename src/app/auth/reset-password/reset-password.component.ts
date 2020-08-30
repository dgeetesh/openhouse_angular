import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../../core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private commonService: CommonService,private _router: Router) { }

  ngOnInit(): void {
  }

  resetForm = new FormGroup({
    email: new FormControl(''),
  });

  error: any;

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let body={
     email:this.resetForm.value.email,
    }
    console.log(body);
    this.commonService.post('users/sendVerificationMail',body).subscribe(
      (data: any)=>{
        console.log(data);
        this._router.navigate(["login"]);
    },(error) => {                             
      console.error('error caught in component')
      console.log("erroreee",error)
    })  
  }
}