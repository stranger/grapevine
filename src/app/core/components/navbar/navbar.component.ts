import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Output() openSidenav: EventEmitter<any> = new EventEmitter();

  openMenu() {
    this.openSidenav.emit();
  }
}
