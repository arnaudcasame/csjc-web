import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { SolarData } from "../../@core/data/solar";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  status: string;
}

@Component({
  selector: "ngx-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnDestroy {
  private alive = true;

  solarValue: number;
  studentsCard: CardSettings = {
    title: "Total Students",
    iconClass: "fas fa-user-graduate",
    status: "50,000",
    type: "primary"
  };
  parentsCard: CardSettings = {
    title: "Total Parents",
    iconClass: "fas fa-users",
    status: "80,000",
    type: "success"
  };
  teachersCard: CardSettings = {
    title: "Total teachers",
    iconClass: "fas fa-users-cog",
    status: "10,000",
    type: "info"
  };
  earningsCard: CardSettings = {
    title: "Total Earnings",
    iconClass: "fas fa-money-bill-alt",
    status: "1,050,000",
    type: "warning"
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.studentsCard,
    this.parentsCard,
    this.teachersCard,
    this.earningsCard
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: "warning"
      },
      {
        ...this.rollerShadesCard,
        type: "primary"
      },
      {
        ...this.wirelessAudioCard,
        type: "danger"
      },
      {
        ...this.coffeeMakerCard,
        type: "info"
      }
    ],
    dark: this.commonStatusCardsSet
  };

  constructor(
    private themeService: NbThemeService,
    private solarService: SolarData
  ) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });

    this.solarService
      .getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
