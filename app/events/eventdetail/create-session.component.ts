import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OnInit, Component } from "@angular/core";

@Component({
    templateUrl:'app/events/eventdetail/create-session.component.html',
    styles:[`.error em{color:red;float:right;}",".error input{background-color:red},
             ".error select{background-color:red}"
             ".error textarea{background-color:red}"`]
})
export class CreateSessionComponent implements OnInit{
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl
    newSessionGroup:FormGroup

    ngOnInit()
    {
        this.name = new FormControl('',Validators.required);
        this.presenter = new FormControl('',Validators.required);
        this.level = new FormControl('',Validators.required);
        this.duration = new FormControl('');
        this.abstract = new FormControl('',[Validators.required,Validators.maxLength(300),this.RestrictedWords(['hello','polo'])]);
        this.newSessionGroup = new FormGroup({
            name:this.name,
            presenter:this.presenter,
            level:this.level,
            duration:this.duration,
            abstract:this.abstract
        });
    }

    private RestrictedWords(words)
    {
        return (control:FormControl):{[key:string]:any}=>{
        var invalidWords = words.map(w=>control.value.includes(w)?w:null).filter(w=>w!=null);

        return invalidWords && invalidWords.length > 0?{'restrictedWords':invalidWords.join(',')}:null;
        }
    }


}