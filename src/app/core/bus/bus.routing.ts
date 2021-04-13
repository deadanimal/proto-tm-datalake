import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SearchComponent } from "./search/search.component";
import { WorkflowComponent } from "./workflow/workflow.component";

export const BusRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
      {
        path: "workflow",
        component: WorkflowComponent,
      },
    ],
  },
];
