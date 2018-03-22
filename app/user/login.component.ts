import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
templateUrl:'app/user/login.component.html',
styles:[`em{float:right;color:red}`]
})
export class LoginComponent{
    constructor(private auth:AuthService,private router:Router){

    }
userName:string;
password:string;
   LoginFormValues(formValues){
        console.log(formValues);
        console.log(this.userName);
        console.log(this.password);
        this.auth.loginUser(formValues.userName,formValues.password1);
        this.router.navigate(['/events']);
    }

}