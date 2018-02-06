import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements AfterViewInit {
  workplaceAdjective = "fun";

  ngAfterViewInit() {
    const workplaceAdjectiveArray = ["fun", "safe", "healthy", "clean"];
    let i = 1;
    const adjectiveLoop = () => {
      setTimeout(() => {
        if (i === workplaceAdjectiveArray.length) {
          i = 0;
        }
        this.workplaceAdjective = workplaceAdjectiveArray[i];
        i++;
        adjectiveLoop();
      }, 5000);
    };
    adjectiveLoop();
  }
}
