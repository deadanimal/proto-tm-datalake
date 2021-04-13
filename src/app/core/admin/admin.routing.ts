import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { DataModelingComponent } from "./data-modeling/data-modeling.component";
import { DataDomainCoverageComponent } from "./data-domain-coverage/data-domain-coverage.component";
import { CustomerComponent } from "./customer/customer.component";
import { HierarchyComponent } from "./hierarchy/hierarchy.component";
import { DsCreateTaskComponent } from "./ds-create-task/ds-create-task.component";
import { DsReportingComponent } from "./ds-reporting/ds-reporting.component";
import { DsAuditTrailsComponent } from "./ds-audit-trails/ds-audit-trails.component";
import { DsDataSurvivorshipComponent } from "./ds-data-survivorship/ds-data-survivorship.component";
import { BusinessUserSupportComponent } from "./business-user-support/business-user-support.component";
import { UiTaskManagementComponent } from "./ui-task-management/ui-task-management.component";
import { EhrViewerComponent } from "./ehr-viewer/ehr-viewer.component";
import { BusinessWorkflowComponent } from "./business-workflow/business-workflow.component";
import { TaskManagementComponent } from "./task-management/task-management.component";
import { CollaborationComponent } from "./collaboration/collaboration.component";
import { AnalyticMlComponent } from "./analytic-ml/analytic-ml.component";
import { AmlCollaborationComponent } from "./aml-collaboration/aml-collaboration.component";
import { ComplianceComponent } from "./compliance/compliance.component";
import { PdpaSupportComponent } from "./pdpa-support/pdpa-support.component";
import { DlisIntegrationComponent } from "./dlis-integration/dlis-integration.component";
import { DataMergeComponent } from "./data-merge/data-merge.component";
import { ApiSupportComponent } from "./api-support/api-support.component";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { ReportComponent } from "./report/report.component";
import { ServicesComponent } from "./services/services.component";
import { DataModelComponent } from "./data-model/data-model.component";
import { DevelopSpecsComponent } from "./develop-specs/develop-specs.component";
import { DevelopProxiesComponent } from "./develop-proxies/develop-proxies.component";
import { DevelopFlowsComponent } from "./develop-flows/develop-flows.component";
import { DevelopTracesComponent } from "./develop-traces/develop-traces.component";
import { DevelopProxiesCreateComponent } from "./develop-proxies-create/develop-proxies-create.component";
import { PublishProductsComponent } from "./publish-products/publish-products.component";
import { PublishPortalsComponent } from "./publish-portals/publish-portals.component";
import { PublishDevelopersComponent } from "./publish-developers/publish-developers.component";
import { PublishAppsComponent } from "./publish-apps/publish-apps.component";
import { PublishProgramsComponent } from "./publish-programs/publish-programs.component";
import { PublishProductsAddComponent } from "./publish-products-add/publish-products-add.component";
import { PublishAppsAddComponent } from "./publish-apps-add/publish-apps-add.component";
import { AnalyzeProxyPerformanceComponent } from "./analyze-proxy-performance/analyze-proxy-performance.component";
import { AnalyzeCachePerformanceComponent } from "./analyze-cache-performance/analyze-cache-performance.component";
import { AnalyzeErrorPerformanceComponent } from "./analyze-error-performance/analyze-error-performance.component";
import { AnalyzeTargetPerformanceComponent } from "./analyze-target-performance/analyze-target-performance.component";
import { AnalyzeEngagementComponent } from "./analyze-engagement/analyze-engagement.component";
import { AnalyzeGeomapComponent } from "./analyze-geomap/analyze-geomap.component";
import { AnalyzeDevicesComponent } from "./analyze-devices/analyze-devices.component";
import { AnalyzeTrafficComponent } from "./analyze-traffic/analyze-traffic.component";
import { AnalyzeReportsComponent } from "./analyze-reports/analyze-reports.component";
import { AnalyzeReportsAddComponent } from "./analyze-reports-add/analyze-reports-add.component";
import { ManagementEnvironmentCachesComponent } from "./management-environment-caches/management-environment-caches.component";
import { ManagementEnvironmentFlowHooksComponent } from "./management-environment-flow-hooks/management-environment-flow-hooks.component";
import { ManagementEnvironmentKeyMapsComponent } from "./management-environment-key-maps/management-environment-key-maps.component";
import { ManagementEnvironmentReferenceComponent } from "./management-environment-reference/management-environment-reference.component";
import { ManagementEnvironmentTargetComponent } from "./management-environment-target/management-environment-target.component";
import { ManagementEnvironmentTlsComponent } from "./management-environment-tls/management-environment-tls.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { ManagementVirtualComponent } from "./management-virtual/management-virtual.component";
import { DataFlowComponent } from './data-flow/data-flow.component';

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "data-modeling",
        component: DataModelingComponent,
      },
      {
        path: "data-management",
        children: [
          {
            path: "integration",
            component: DlisIntegrationComponent,
          },
          {
            path: "data-merge",
            component: DataMergeComponent,
          },
          {
            path: "api-support",
            component: ApiSupportComponent,
          },
          // {
          //   path: "integration",
          //   component: ,
          // },
        ],
      },
      {
        path: "data-quality",
        children: [
          {
            // path: "integration",
            // component: ,
          },
        ],
      },
      {
        path: "data-domain",
        children: [
          {
            path: "data-domain-coverage",
            component: DataDomainCoverageComponent,
          },
          {
            path: "customer",
            component: CustomerComponent,
          },
        ],
      },
      {
        path: "hierarchy-management",
        component: HierarchyComponent,
      },
      {
        path: "data-steward",
        children: [
          {
            path: "task-management",
            component: DsCreateTaskComponent,
          },
          {
            path: "reporting",
            component: DsReportingComponent,
          },
          {
            path: "audit-trails",
            component: DsAuditTrailsComponent,
          },
          {
            path: "data-survivorship",
            component: DsDataSurvivorshipComponent,
          },
        ],
      },
      {
        path: "user-interface-search",
        children: [
          {
            path: "search",
            component: UiTaskManagementComponent,
          },
          {
            path: "business-user-support",
            component: BusinessUserSupportComponent,
          },
          {
            path: "ehr-viewer",
            component: EhrViewerComponent,
          },
        ],
      },
      {
        path: "workflow-collaboration-governance",
        children: [
          {
            path: "business-workflow",
            component: BusinessWorkflowComponent,
          },
          {
            path: "task-management",
            component: TaskManagementComponent,
          },
          {
            path: "collaboration",
            component: CollaborationComponent,
          },
        ],
      },
      {
        path: "analytics-and-ml",
        children: [
          {
            path: "data-analytics",
            component: AnalyticMlComponent,
          },
          {
            path: "analytics-collaboration",
            component: AmlCollaborationComponent,
          },
        ],
      },
      {
        path: "compliance",
        children: [
          {
            path: "compliance",
            component: ComplianceComponent,
          },
          {
            path: "pdpa-support",
            component: PdpaSupportComponent,
          },
        ],
      },
      /// code syafiq
      {
        path: "management",
        children: [
          {
            path: "audit-trails",
            component: ManagementAuditComponent,
          },
          {
            path: "users",
            component: ManagementUserComponent,
          },
          {
            path: "environments/caches",
            component: ManagementEnvironmentCachesComponent,
          },
          {
            path: "environments/flow-hooks",
            component: ManagementEnvironmentFlowHooksComponent,
          },
          {
            path: "environments/key-maps",
            component: ManagementEnvironmentKeyMapsComponent,
          },
          {
            path: "environments/references",
            component: ManagementEnvironmentReferenceComponent,
          },
          {
            path: "environments/target-servers",
            component: ManagementEnvironmentTargetComponent,
          },
          {
            path: "environments/tls-keystores",
            component: ManagementEnvironmentTlsComponent,
          },
          {
            path: "roles",
            component: ManagementRolesComponent,
          },
          {
            path: "virtual-hosts",
            component: ManagementVirtualComponent,
          },
        ],
      },
      {
        path: "collaboration",
        component: CollaborationComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "services",
        children: [
          {
            path: "",
            component: ServicesComponent,
          },
          {
            path: "data-model",
            component: DataModelComponent,
          },
        ],
      },
      {
        path: "develop",
        children: [
          {
            path: "specs",
            component: DevelopSpecsComponent,
          },
          {
            path: "proxies",
            component: DevelopProxiesComponent,
          },
          {
            path: "flows",
            component: DevelopFlowsComponent,
          },
          {
            path: "traces",
            component: DevelopTracesComponent,
          },
          {
            path: "proxies/create",
            component: DevelopProxiesCreateComponent,
          },
        ],
      },
      {
        path: "products",
        component: PublishProductsComponent,
      },
      {
        path: "publish",
        children: [
          // {
          //   path: "products",
          //   component: PublishProductsComponent,
          // },
          // {
          //   path: "products/add",
          //   component: PublishProductsAddComponent,
          // },
          {
            path: "portals",
            component: PublishPortalsComponent,
          },
          {
            path: "developers",
            component: PublishDevelopersComponent,
          },
          {
            path: "programs",
            component: PublishProgramsComponent,
          },
          {
            path: "apps",
            component: PublishAppsComponent,
          },
          {
            path: "apps/add",
            component: PublishAppsAddComponent,
          },
        ],
      },
      {
        path: "analyze",
        children: [
          {
            path: "proxy",
            component: AnalyzeProxyPerformanceComponent,
          },
          {
            path: "cache",
            component: AnalyzeCachePerformanceComponent,
          },
          {
            path: "error",
            component: AnalyzeErrorPerformanceComponent,
          },
          {
            path: "target",
            component: AnalyzeTargetPerformanceComponent,
          },
          {
            path: "developers/engagement",
            component: AnalyzeEngagementComponent,
          },
          {
            path: "developers/traffic",
            component: AnalyzeTrafficComponent,
          },
          {
            path: "end-users/devices",
            component: AnalyzeDevicesComponent,
          },
          {
            path: "end-users/geomap",
            component: AnalyzeGeomapComponent,
          },
          {
            path: "custom/reports",
            component: AnalyzeReportsComponent,
          },
          {
            path: "custom/reports/add",
            component: AnalyzeReportsAddComponent,
          },
        ],
      },
      ///end syafiq code
    ],
  },
];
