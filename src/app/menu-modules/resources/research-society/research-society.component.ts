import { Component, OnInit } from "@angular/core";
import colorScheme from "src/app/interfaces/ColorScheme";
import { ThemeChangerService } from "src/app/services/theme-changer.service";

@Component({
  selector: "app-research-society",
  templateUrl: "./research-society.component.html",
  styleUrls: ["./research-society.component.css"],
})
export class ResearchSocietyComponent implements OnInit {
  theme: colorScheme;

  constructor(private themeChanger: ThemeChangerService) {}

  ngOnInit(): void {
    this.themeChanger.subscribeToTheme().subscribe((currentTheme) => {
      this.theme = currentTheme;
    });
  }
}
