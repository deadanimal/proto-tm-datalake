import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { Complaint } from "src/app/shared/services/complaints/complaints.model";
import { ComplaintsService } from "src/app/shared/services/complaints/complaints.service";
// import { AuditData } from 'src/assets/mock/admin-Audit/Audit.data.json'
import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

//
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import swal from "sweetalert2";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { Router, ActivatedRoute } from "@angular/router";
import Selectr from "mobius1-selectr";
import noUiSlider from "nouislider";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-data-domain-coverage",
  templateUrl: "./data-domain-coverage.component.html",
  styleUrls: ["./data-domain-coverage.component.scss"],
})
export class DataDomainCoverageComponent implements OnInit, OnDestroy {
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: Complaint[] = [];
  SelectionType = SelectionType;

  // Chart
  private chart: any;
  chartJan: number = 0;
  chartFeb: number = 0;
  chartMar: number = 0;
  chartApr: number = 0;
  chartMay: number = 0;
  chartJun: number = 0;
  chartJul: number = 0;
  chartAug: number = 0;
  chartSep: number = 0;
  chartOct: number = 0;
  chartNov: number = 0;
  chartDec: number = 0;

  // Data
  public datas: any = [];
  listComplaint: any;
  listDataSource: any = [
    {
      id: "415796",
      name: "Diana",
      patient_no: "ut9181",
      patient_bed: "a1001",
      status: "wd",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      id: "415796",
      name: "Aishah",
      patient_no: "jk2112",
      patient_bed: "a1002",
      status: "dc",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      id: "415796",
      name: "Kamarul",
      patient_no: "hb10003",
      patient_bed: "a1003",
      status: "dd",
      created_at: "2019-07-27T01:07:14Z",
    },
  ];

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Form
  searchForm: FormGroup;
  searchField: FormGroup;
  addNewComplaintForm: FormGroup;
  editComplaintForm: FormGroup;
  editAuditFormMessages = {
    Complaintname: [
      // { type: "required", message: "Email is required" },
      { type: "required", message: "A valid email is required" },
    ],
    active: [{ type: "required", message: "Name is required" }],
    enable: [{ type: "required", message: "Name is required" }],
  };

  json;

  constructor(
    private notifyService: NotifyService,
    private zone: NgZone,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ComplaintData: ComplaintsService,
    private loadingBar: LoadingBarService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    var selectr: any = document.getElementById("selectr");
    var options = {};
    var optionsMultiple = { multiple: true };
    var selectorDefault = new Selectr(selectr, options);
    var selectrmultiple: any = document.getElementById("selectr-multiple");
    // var selectrmultiple2: any = document.getElementById("selectr-multiple2");

    var selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);
    // var selectorMultiple2 = new Selectr(selectrmultiple2, optionsMultiple);
    // this.getCharts();

    this.ComplaintData.getAll().subscribe((res) => {
      this.listComplaint = res;
      this.tableRows = [...res];

      console.log(this.tableRows);
      this.listComplaint = this.tableRows.map((prop, key) => {
        // console.log("test =>", prop, key);
        return {
          ...prop,
          // id: key,
        };
      });
      // console.log("Svc: ", this.listComplaint);
    });

    this.addNewComplaintForm = this.formBuilder.group({
      complaint_type: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      description: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
    });

    this.editComplaintForm = this.formBuilder.group({
      id: new FormControl(""),
      complaint_type: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      description: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
    });
  }

  addNewComplaint() {
    // console.log("qqqq");
    // this.loadingBar.start();
    // this.loadingBar.complete();
    // this.successMessage();
    console.log(this.addNewComplaintForm.value);
    this.ComplaintData.create(this.addNewComplaintForm.value).subscribe(
      () => {
        // Success
        // this.isLoading = false
        // this.successMessage();
        this.successAlert("add new");
        window.location.reload();
      },
      () => {
        // Failed
        // this.isLoading = false
        // this.successMessage();
      },
      () => {
        // After
        // this.notifyService.openToastr("Success", "Welcome back");
        // this.navigateHomePage();
      }
    );
  }

  editComplaintDetail() {
    // console.log("qqqq");
    // this.loadingBar.start();
    // this.loadingBar.complete();
    // this.successEditMessage();
    console.log(this.editComplaintForm.value);
    this.ComplaintData.update(
      this.editComplaintForm.value.id,
      this.editComplaintForm.value
    ).subscribe(
      () => {
        // Success
        // this.isLoading = false
        // this.successMessage();
        this.successAlert("edit");
        window.location.reload();
      },
      () => {
        // Failed
        // this.isLoading = false
        // this.successMessage();
      },
      () => {
        // After
        // this.notifyService.openToastr("Success", "Welcome back");
        // this.navigateHomePage();
      }
    );
  }

  navigatePage(path: String, id) {
    // let qq = "db17a36a-1da6-4919-9746-dfed8802ec9d";
    console.log(id);
    console.log(path + "/" + id);
    if (path == "/admin//utility/Complaint") {
      return this.router.navigate([path]);
    } else if (path == "/admin//utility/Complaint-detail") {
      return this.router.navigate([path, id]);
    }
  }

  getComplaint(id: string): Complaint[] {
    return this.listComplaint.find((e) => e.id === id);
  }

  successMessage() {
    let title = "Success";
    let message = "Create New Scheme Personnel";
    this.notifyService.openToastr(title, message);
  }

  successEditMessage() {
    let title = "Success";
    let message = "Edit Scheme Personnel";
    this.notifyService.openToastr(title, message);
  }

  successAlert(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task,
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    var returnData: any;
    let val = $event.target.value;
    this.listComplaint = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
        // console.log(key, d[key].toLowerCase().toLowerCase().indexOf(val));

        // if (d.complaint_type.toLowerCase().indexOf(val) !== -1 || !val) {
        //   returnData =
        //     d.complaint_type.toLowerCase().indexOf(val) !== -1 || !val;
        // }
        // return returnData;
      }
      return false;
    });
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
      // if (this.chart1) {
      //   console.log("Chart disposed");
      //   this.chart1.dispose();
      // }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
    });
  }

  // getChart() {
  //   let chart = am4core.create("chartdiv", am4charts.XYChart);

  //   // Add data
  //   chart.data = [
  //     {
  //       month: "Jan",
  //       count: this.chartJan,
  //     },
  //     {
  //       month: "Feb",
  //       count: this.chartFeb,
  //     },
  //     {
  //       month: "Mar",
  //       count: this.chartMar,
  //     },
  //     {
  //       month: "Apr",
  //       count: this.chartApr,
  //     },
  //     {
  //       month: "May",
  //       count: this.chartMar,
  //     },
  //     {
  //       month: "Jun",
  //       count: this.chartJun,
  //     },
  //     {
  //       month: "Jul",
  //       count: this.chartJul,
  //     },
  //     {
  //       month: "Aug",
  //       count: this.chartAug,
  //     },
  //     {
  //       month: "Sep",
  //       count: this.chartSep,
  //     },
  //     {
  //       month: "Oct",
  //       count: this.chartOct,
  //     },
  //     {
  //       month: "Nov",
  //       count: this.chartNov,
  //     },
  //     {
  //       month: "Dec",
  //       count: this.chartDec,
  //     },
  //   ];

  //   // Create axes

  //   let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  //   categoryAxis.dataFields.category = "month";
  //   categoryAxis.renderer.grid.template.location = 0;
  //   categoryAxis.renderer.minGridDistance = 30;

  //   categoryAxis.renderer.labels.template.adapter.add("dy", function (
  //     dy,
  //     target
  //   ) {
  //     if (target.dataItem && target.dataItem.index && 2 == 2) {
  //       return dy + 25;
  //     }
  //     return dy;
  //   });

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  //   // Create series
  //   let series = chart.series.push(new am4charts.ColumnSeries());
  //   series.dataFields.valueY = "count";
  //   series.dataFields.categoryX = "month";
  //   series.name = "count";
  //   series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  //   series.columns.template.fillOpacity = 0.8;

  //   let columnTemplate = series.columns.template;
  //   columnTemplate.strokeWidth = 2;
  //   columnTemplate.strokeOpacity = 1;

  //   this.chart = chart;
  // }

  // calculateCharts() {
  //   this.chartJan = 0;
  //   this.chartFeb = 0;
  //   this.chartMar = 0;
  //   this.chartApr = 0;
  //   this.chartMay = 0;
  //   this.chartJun = 0;
  //   this.chartJul = 0;
  //   this.chartAug = 0;
  //   this.chartSep = 0;
  //   this.chartOct = 0;
  //   this.chartNov = 0;
  //   this.chartDec = 0;
  //   this.tableRows.forEach((row) => {
  //     let checkerDate = moment(row.joined_at);
  //     let checkerDateMonth = checkerDate.month();
  //     if (checkerDateMonth == 0) {
  //       this.chartJan += 1;
  //     } else if (checkerDateMonth == 1) {
  //       this.chartFeb += 1;
  //     } else if (checkerDateMonth == 2) {
  //       this.chartMar += 1;
  //     } else if (checkerDateMonth == 3) {
  //       this.chartApr += 1;
  //     } else if (checkerDateMonth == 4) {
  //       this.chartMay += 1;
  //     } else if (checkerDateMonth == 5) {
  //       this.chartJun += 1;
  //     } else if (checkerDateMonth == 6) {
  //       this.chartJul += 1;
  //     } else if (checkerDateMonth == 7) {
  //       this.chartAug += 1;
  //     } else if (checkerDateMonth == 8) {
  //       this.chartSep += 1;
  //     } else if (checkerDateMonth == 9) {
  //       this.chartOct += 1;
  //     } else if (checkerDateMonth == 10) {
  //       this.chartNov += 1;
  //     } else if (checkerDateMonth == 11) {
  //       this.chartDec += 1;
  //     }
  //   });
  // }

  openModal(modalRef: TemplateRef<any>, row) {
    if (row) {
      console.log(row);
      this.editComplaintForm.patchValue(row);
    }
    // this.modal = this.modalService.show(
    //   modalRef,
    //   Object.assign({}, { class: "gray modal-xl" })
    // );
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    this.editComplaintForm.reset();
  }

  confirm() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure to create this new Complaint?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Success",
        text: "A new Complaint has been created!",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Close",
      })
      .then((result) => {
        if (result.value) {
          this.modal.hide();
          this.editComplaintForm.reset();
        }
      });
  }

  getChart() {
    // let chart = am4core.create("chartdivComplaint", am4charts.XYChart);
    let chart = am4core.create("chartdivComplaint", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "Jan",
        visits: 3025,
      },
      {
        country: "Feb",
        visits: 1882,
      },
      {
        country: "Mar",
        visits: 1809,
      },
      {
        country: "Apr",
        visits: 1322,
      },
      {
        country: "May",
        visits: 1122,
      },
      {
        country: "Jun",
        visits: 1114,
      },
      {
        country: "July",
        visits: 984,
      },
      {
        country: "Aug",
        visits: 711,
      },
      {
        country: "Sep",
        visits: 665,
      },
      {
        country: "Oct",
        visits: 711,
      },
      {
        country: "Nov",
        visits: 711,
      },
      {
        country: "Dec",
        visits: 711,
      },
    ];

    prepareParetoData();

    function prepareParetoData() {
      let total = 0;

      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        total += value;
      }

      let sum = 0;
      for (var i = 0; i < chart.data.length; i++) {
        let value = chart.data[i].visits;
        sum += value;
        chart.data[i].pareto = (sum / total) * 100;
      }
    }

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    paretoValueAxis.renderer.opposite = true;
    paretoValueAxis.min = 0;
    paretoValueAxis.max = 100;
    paretoValueAxis.strictMinMax = true;
    paretoValueAxis.renderer.grid.template.disabled = true;
    paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    paretoValueAxis.numberFormatter.numberFormat = "#'%'";
    paretoValueAxis.cursorTooltipEnabled = false;

    let paretoSeries = chart.series.push(new am4charts.LineSeries());
    paretoSeries.dataFields.valueY = "pareto";
    paretoSeries.dataFields.categoryX = "country";
    paretoSeries.yAxis = paretoValueAxis;
    paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
    paretoSeries.bullets.push(new am4charts.CircleBullet());
    paretoSeries.strokeWidth = 2;
    paretoSeries.stroke = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
  }
}
