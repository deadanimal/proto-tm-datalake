import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { TagInputModule } from "ngx-chips";

import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";

// material

import { A11yModule } from "@angular/cdk/a11y";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { MatFormFieldModule } from '@angular/material/form-field';

import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { DataModelingComponent } from "./data-modeling/data-modeling.component";
import { DataDomainCoverageComponent } from "./data-domain-coverage/data-domain-coverage.component";
import { CustomerComponent } from "./customer/customer.component";
import { HierarchyComponent } from "./hierarchy/hierarchy.component";
import { DsCreateTaskComponent } from "./ds-create-task/ds-create-task.component";
import { DsReportingComponent } from "./ds-reporting/ds-reporting.component";
import { DsAuditTrailsComponent } from "./ds-audit-trails/ds-audit-trails.component";
import { DsDataSurvivorshipComponent } from "./ds-data-survivorship/ds-data-survivorship.component";
import { BusinessUserSupportComponent } from "./business-user-support/business-user-support.component";
import { EhrViewerComponent } from "./ehr-viewer/ehr-viewer.component";
import { BusinessWorkflowComponent } from "./business-workflow/business-workflow.component";
import { TaskManagementComponent } from "./task-management/task-management.component";
import { CollaborationComponent } from "./collaboration/collaboration.component";
import { AnalyticMlComponent } from "./analytic-ml/analytic-ml.component";
import { AmlCollaborationComponent } from "./aml-collaboration/aml-collaboration.component";
import { ComplianceComponent } from "./compliance/compliance.component";
import { PdpaSupportComponent } from "./pdpa-support/pdpa-support.component";
import { UiTaskManagementComponent } from "./ui-task-management/ui-task-management.component";
import { OrgChartModule } from "angular-org-chart";
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
import { PublishProgramsComponent } from "./publish-programs/publish-programs.component";
import { PublishDevelopersComponent } from "./publish-developers/publish-developers.component";
import { PublishAppsComponent } from "./publish-apps/publish-apps.component";
import { PublishProductsAddComponent } from "./publish-products-add/publish-products-add.component";
import { PublishAppsAddComponent } from "./publish-apps-add/publish-apps-add.component";
import { AnalyzeProxyPerformanceComponent } from "./analyze-proxy-performance/analyze-proxy-performance.component";
import { AnalyzeCachePerformanceComponent } from "./analyze-cache-performance/analyze-cache-performance.component";
import { AnalyzeErrorPerformanceComponent } from "./analyze-error-performance/analyze-error-performance.component";
import { AnalyzeTargetPerformanceComponent } from "./analyze-target-performance/analyze-target-performance.component";
import { AnalyzeEngagementComponent } from "./analyze-engagement/analyze-engagement.component";
import { AnalyzeTrafficComponent } from "./analyze-traffic/analyze-traffic.component";
import { AnalyzeDevicesComponent } from "./analyze-devices/analyze-devices.component";
import { AnalyzeGeomapComponent } from "./analyze-geomap/analyze-geomap.component";
import { AnalyzeReportsComponent } from "./analyze-reports/analyze-reports.component";
import { AnalyzeReportsAddComponent } from "./analyze-reports-add/analyze-reports-add.component";
import { ManagementVirtualComponent } from "./management-virtual/management-virtual.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { ManagementEnvironmentCachesComponent } from "./management-environment-caches/management-environment-caches.component";
import { ManagementEnvironmentFlowHooksComponent } from "./management-environment-flow-hooks/management-environment-flow-hooks.component";
import { ManagementEnvironmentKeyMapsComponent } from "./management-environment-key-maps/management-environment-key-maps.component";
import { ManagementEnvironmentReferenceComponent } from "./management-environment-reference/management-environment-reference.component";
import { ManagementEnvironmentTargetComponent } from "./management-environment-target/management-environment-target.component";
import { ManagementEnvironmentTlsComponent } from "./management-environment-tls/management-environment-tls.component";
import { DevelopProxiesCreateReverseComponent } from "./develop-proxies-create-reverse/develop-proxies-create-reverse.component";
import { DataFlowComponent } from './data-flow/data-flow.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DataModelingComponent,
    DataDomainCoverageComponent,
    CustomerComponent,
    HierarchyComponent,
    DsCreateTaskComponent,
    DsReportingComponent,
    DsAuditTrailsComponent,
    DsDataSurvivorshipComponent,
    BusinessUserSupportComponent,
    EhrViewerComponent,
    BusinessWorkflowComponent,
    TaskManagementComponent,
    CollaborationComponent,
    AnalyticMlComponent,
    AmlCollaborationComponent,
    ComplianceComponent,
    PdpaSupportComponent,
    UiTaskManagementComponent,
    DlisIntegrationComponent,
    DataMergeComponent,
    ApiSupportComponent,
    /// code syafiq

    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    ServicesComponent,
    DataModelComponent,
    DevelopSpecsComponent,
    DevelopProxiesComponent,
    DevelopFlowsComponent,
    DevelopTracesComponent,
    DevelopProxiesCreateComponent,
    PublishProductsComponent,
    PublishPortalsComponent,
    PublishProgramsComponent,
    PublishDevelopersComponent,
    PublishAppsComponent,
    PublishProductsAddComponent,
    PublishAppsAddComponent,
    AnalyzeProxyPerformanceComponent,
    AnalyzeCachePerformanceComponent,
    AnalyzeErrorPerformanceComponent,
    AnalyzeTargetPerformanceComponent,
    AnalyzeEngagementComponent,
    AnalyzeTrafficComponent,
    AnalyzeDevicesComponent,
    AnalyzeGeomapComponent,
    AnalyzeReportsComponent,
    AnalyzeReportsAddComponent,
    ManagementVirtualComponent,
    ManagementRolesComponent,
    ManagementEnvironmentCachesComponent,
    ManagementEnvironmentFlowHooksComponent,
    ManagementEnvironmentKeyMapsComponent,
    ManagementEnvironmentReferenceComponent,
    ManagementEnvironmentTargetComponent,
    ManagementEnvironmentTlsComponent,
    DevelopProxiesCreateReverseComponent,
    DataFlowComponent,
    //// code syafiq
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    TagInputModule,
    OrgChartModule,
    MatStepperModule,
    // MatStepperModule,
    CdkStepperModule,
    //MatFormFieldModule

  ],
})
export class AdminModule {}
