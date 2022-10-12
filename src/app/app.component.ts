import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { CountryService } from "./countryservice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [CountryService]
})
export class AppComponent {
 
  ngOnInit() {
    
  }
}
