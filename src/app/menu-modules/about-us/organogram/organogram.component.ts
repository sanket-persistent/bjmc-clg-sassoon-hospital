import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";

@Component({
  selector: "app-organogram",
  templateUrl: "./organogram.component.html",
  styleUrls: ["./organogram.component.css"],
})
export class OrganogramComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
