import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";

@Component({
  selector: "app-ug-students",
  templateUrl: "./ug-students.component.html",
  styleUrls: ["./ug-students.component.css"],
})
export class UgStudentsComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
