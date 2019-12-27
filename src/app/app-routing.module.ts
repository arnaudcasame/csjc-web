import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularWelcomeComponent } from "./angular-welcome/angular-welcome.component";

const routes: Routes = [
  {
    path: "angular-welcome",
    component: AngularWelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
