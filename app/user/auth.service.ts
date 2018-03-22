import { Injectable } from "@angular/core";
import { InnerSubscriber } from "rxjs/InnerSubscriber";
import { IUser } from "./user.model";


@Injectable()
export class AuthService{
    currentUser:IUser;
    loginUser(userName:string,password:string){
        this.currentUser={
            id:1,
            userName:userName,
            firstName:"Rama",
            lastName:"Maduri"
        }
    }
    isAuthenticated=()=>!!this.currentUser;
}