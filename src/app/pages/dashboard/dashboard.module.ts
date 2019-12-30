import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbCalendarModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";

import { ThemeModule } from "../../@theme/theme.module";
import { DashboardComponent } from "./dashboard.component";
import { StatusCardComponent } from "./status-card/status-card.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomSelectorComponent } from "./rooms/room-selector/room-selector.component";
import { TemperatureComponent } from "./temperature/temperature.component";
import { TemperatureDraggerComponent } from "./temperature/temperature-dragger/temperature-dragger.component";
import { KittenComponent } from "./kitten/kitten.component";
import { SecurityCamerasComponent } from "./security-cameras/security-cameras.component";
import { ElectricityComponent } from "./electricity/electricity.component";
import { ElectricityChartComponent } from "./electricity/electricity-chart/electricity-chart.component";
import { WeatherComponent } from "./weather/weather.component";
import { SolarComponent } from "./solar/solar.component";
import { PlayerComponent } from "./rooms/player/player.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { ProfitCardComponent } from "./profit-card/profit-card.component";
import { ECommerceChartsPanelComponent } from "./charts-panel/charts-panel.component";
import { StatsCardBackComponent } from "./profit-card/back-side/stats-card-back.component";
import { StatsCardFrontComponent } from "./profit-card/front-side/stats-card-front.component";
import { TrafficChartComponent } from "./traffic/traffic-chart.component";
import { TrafficRevealCardComponent } from "./traffic-reveal-card/traffic-reveal-card.component";
import { TrafficBarComponent } from "./traffic-reveal-card/front-side/traffic-bar/traffic-bar.component";
import { TrafficFrontCardComponent } from "./traffic-reveal-card/front-side/traffic-front-card.component";
import { TrafficCardsHeaderComponent } from "./traffic-reveal-card/traffic-cards-header/traffic-cards-header.component";
import { TrafficBackCardComponent } from "./traffic-reveal-card/back-side/traffic-back-card.component";
import { TrafficBarChartComponent } from "./traffic-reveal-card/back-side/traffic-bar-chart.component";
import { OrdersChartComponent } from "./charts-panel/charts/orders-chart.component";
import { ProfitChartComponent } from "./charts-panel/charts/profit-chart.component";
import { ChartPanelHeaderComponent } from "./charts-panel/chart-panel-header/chart-panel-header.component";
import { ChartPanelSummaryComponent } from "./charts-panel/chart-panel-summary/chart-panel-summary.component";
import { ChartModule } from "angular2-chartjs";
import { StatsAreaChartComponent } from "./profit-card/back-side/stats-area-chart.component";
import { StatsBarAnimationChartComponent } from "./profit-card/front-side/stats-bar-animation-chart.component";
import { EarningCardComponent } from "./earning-card/earning-card.component";
import { EarningCardBackComponent } from "./earning-card/back-side/earning-card-back.component";
import { EarningPieChartComponent } from "./earning-card/back-side/earning-pie-chart.component";
import { EarningCardFrontComponent } from "./earning-card/front-side/earning-card-front.component";
import { EarningLiveUpdateChartComponent } from "./earning-card/front-side/earning-live-update-chart.component";
import { ECommerceLegendChartComponent } from "./legend-chart/legend-chart.component";
// import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
// import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
// import { SlideOutComponent } from './slide-out/slide-out.component';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbCalendarModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    ProfitCardComponent,
    EarningCardComponent,
    TrafficRevealCardComponent,
    ECommerceChartsPanelComponent,
    ECommerceLegendChartComponent,
    StatsCardBackComponent,
    StatsCardFrontComponent,
    EarningCardBackComponent,
    EarningCardFrontComponent,
    TrafficBarComponent,
    TrafficFrontCardComponent,
    TrafficCardsHeaderComponent,
    TrafficBackCardComponent,
    TrafficBarChartComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent
  ]
})
export class DashboardModule {}
