import { Component, OnInit } from "@angular/core";
import { Response } from "@angular/http";

import { MixTapeService } from "./services/mixtape.service";

import MixTape from "./models/mixtape.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private mixTapeService: MixTapeService
  ) {}

  //Declaring the new todo Object and initilizing it
  public newMixTape: MixTape = new MixTape();
  //An Empty list for the visible todo list
  mixTapesList: MixTape[];
  editMixTapes: MixTape[] = [];

  //This method will get called on Create button event
  create() {
    this.mixTapeService.createMixTape(this.newMixTape).subscribe(res => {
      this.mixTapesList.push(res.data);
      this.newMixTape = new MixTape();
    });
  }

  editMixTape(mixtape: MixTape) {
    console.log(mixtape);
    if (this.mixTapesList.includes(mixtape)) {
      if (!this.editMixTapes.includes(mixtape)) {
        this.editMixTapes.push(mixtape);
      } else {
        this.editMixTapes.splice(this.editMixTapes.indexOf(mixtape), 1);
        this.mixTapeService.editMixTape(mixtape).subscribe(
          res => {
            console.log("Update Succesful");
          },
          err => {
            this.editMixTape(mixtape);
            console.error("Update Unsuccesful");
          }
        );
      }
    }
  }

  submitMixTape(event, mixtape: MixTape) {
    if (event.keyCode == 13) {
      this.editMixTape(mixtape);
    }
  }

  deleteMixTape(mixtape: MixTape) {
    this.mixTapeService.deleteMixTape(mixtape._id).subscribe(res => {
      this.mixTapesList.splice(this.mixTapesList.indexOf(mixtape), 1);
    })
  }

  ngOnInit(): void {
    //At component initialization the
    this.mixTapeService.getMixTape().subscribe(mixTapes => {
      //assign the todolist property to the proper http response
      this.mixTapesList = mixTapes;
      console.log(mixTapes);
    });
  }
}
