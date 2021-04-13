import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TaskManagementComponent } from "./task-management/task-management.component";
import { DataManagementComponent } from "./data-management/data-management.component";

export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "task-management",
        component: TaskManagementComponent,
      },
      {
        path: "data-management",
        component: DataManagementComponent,
      },
    ],
  },
];
