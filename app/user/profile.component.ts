import { Component } from "@angular/core";


@Component(
  {
      template:`
      <h1> Edit Your Profile</h1>
      <hr>
      <div>
        <h3>[Edit Profile will go here]</h3>
        <br />
        <br />
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-default">Cancel</button>
      </div>
      `
  }
)
export class ProfileComponent{
    isDirty:boolean = true;
}