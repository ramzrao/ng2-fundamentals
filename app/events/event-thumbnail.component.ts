import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'event-thumbnail',
    template:`
    <div class="well honeywell thumbnail">
        <h2>{{singleEvent?.name}}</h2>
        <div>Date:{{singleEvent?.date}}</div>
        <div [ngClass]="getClass()" [class.red]="singleEvent?.time=='10:00 Am'" [ngSwitch]="singleEvent?.time">
            Time:{{singleEvent?.time}}
            <span *ngSwitchCase="'8:00 Am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 Am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span></div>
        <div>
            
        </div>
        <div>Price:\${{singleEvent?.price}}</div>
        <div>
            <span [hidden]="!singleEvent?.location">Location:{{singleEvent?.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{singleEvent?.location.city}}, {{singleEvent?.location.country}}</span>
        </div>
        <!--<button class="btn btn-primary" (click)="handleClick()">Click</button>-->
    </div>
    `,
    styles:[
        `.well { color:#bbb;min-height:210px;}
        .red{color:red}
        .bold{font-type:bold}
        `

    ]
})
export class EventThumbnailComponent{
  @Input() public singleEvent:any;
  @Output() public outputEvent = new EventEmitter();
  handleClick(){
      console.log('clicked');
      this.outputEvent.emit(this.singleEvent.name);
  }
  getClass(){
      if(this.singleEvent.time==='10:00 Am')
      return ['bold']
      else
      return []
  }
}