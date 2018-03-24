import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";


@Component(
  {
      templateUrl:'app/user/profile.component.html',
      styles:['.error{color:red;}']
  }
)
export class ProfileComponent implements OnInit{
    isDirty:boolean = true;
    public firstName:FormControl;
    public lastName:FormControl;
    constructor(public auth:AuthService){
       
    }
    public profileGroup:FormGroup;
    ngOnInit(){
      this.firstName = new FormControl(this.auth.currentUser.firstName,Validators.required);
      this.lastName = new FormControl(this.auth.currentUser.lastName,Validators.required);
      this.profileGroup = new FormGroup({
        firstName:this.firstName,
        lastName:this.lastName
      });
    }
    updateUser(formValues){
      if(this.profileGroup.valid){
        this.auth.updateUser(formValues.firstName,formValues.lastName);
      }
    }
    validateFirstName=()=>{return this.firstName.valid || this.firstName.untouched}
    validateLastName=()=>{return this.lastName.valid || this.lastName.untouched}
}