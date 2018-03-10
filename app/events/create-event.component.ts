import { Component } from "@angular/core";


@Component(
  {
      template:`
      <h1> New Event </h1>
      <hr>
      <div>
        <h3>[Create Event will go here]</h3>
        <br />
        <br />
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" [routerLink]="['/events']" class="btn btn-default">Cancel</button>
      </div>
      `
  }
)
export class CreateEventComponent{
    isDirty:boolean = true;
}