import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles:[`
        em { float: right; color: #E05C65; padding-left: 10px;}
        .error input { background-color:  #E3C3C5}
        .error :: webkit-input-placeholder {color: #999}
        .error :: -moz-placeholder {color: #999}
        .error : -moz-placeholder {color: #999}
        .error : ms-input-placholder {color: #999}
    `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private  firstName : FormControl
  private lastName :FormControl

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit() {
    console.log(this.authService.currentUser);
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }     

  saveProfile(formValues) {
    if(this.profileForm.valid)
    {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);    
      console.log(formValues);
      this.router.navigate(['events'])
    }
  }
  

  cancel(){
    console.log('redirecting...')
    this.router.navigate(['events'])
    }

    validateFirstName(){
      return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName(){
      return this.lastName.valid || this.lastName.untouched;
    }
}