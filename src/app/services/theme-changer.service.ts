import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import ColorScheme from "../interfaces/ColorScheme";

@Injectable({
  providedIn: "root",
})
export class ThemeChangerService {
  theme: {
    cleanAndEnergetic: ColorScheme;
    blueAndRefreshing: ColorScheme;
    vividBluesAndOrange: ColorScheme;
  } = {
    cleanAndEnergetic: {
      col1: "#5680E9",
      col2: "#84CEEB",
      col3: "#5AB9EA",
      col4: "#C1C8E4",
      col5: "#8860D0",
    },
    blueAndRefreshing: {
      col1: "#25274D",
      col2: "#464866",
      col3: "#AAABB8",
      col4: "#2E9CCA",
      col5: "#29648A",
    },
    vividBluesAndOrange: {
      col1: "#10E7DC",
      col2: "#0074E1",
      col3: "#1B9CE5",
      col4: "#6CDAEE",
      col5: "#F79E02",
    },
  };

  constructor() {}

  currentTheme: BehaviorSubject<ColorScheme> = new BehaviorSubject(
    this.theme.blueAndRefreshing
  );

  subscribeToTheme() {
    return this.currentTheme.asObservable();
  }

  setCurrentTheme(newTheme: string) {
    this.currentTheme.next(this.theme[`${newTheme}`]);
  }
}
