import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { SolarData } from "../../@core/data/solar";

import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../@core/data/smart-table";

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
        ...this.studentsCard,
        type: "warning"
      },
      {
        ...this.parentsCard,
        type: "primary"
      },
      {
        ...this.teachersCard,
        type: "danger"
      },
      {
        ...this.earningsCard,
        type: "info"
      }
    ],
    dark: this.commonStatusCardsSet
  };

  date = new Date();

  constructor(
    private themeService: NbThemeService,
    private solarService: SolarData,
    private service: SmartTableData
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

    const data = this.service.getData();
    this.source.load(data);
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: "ID",
        type: "number"
      },
      firstName: {
        title: "First Name",
        type: "string"
      },
      lastName: {
        title: "Last Name",
        type: "string"
      },
      username: {
        title: "Username",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string"
      },
      age: {
        title: "Age",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  dateChange(event): void {
    console.log(event);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
