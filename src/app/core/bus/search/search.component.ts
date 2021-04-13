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
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit, OnDestroy {
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
  listCustomer: any = [
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
    // this.getCharts();
    var selectr: any = document.getElementById("selectr");
    var options = {};
    var optionsMultiple = { multiple: true };
    var selectorDefault = new Selectr(selectr, options);
    var selectrmultiple: any = document.getElementById("selectr-multiple");
    // var selectrmultiple2: any = document.getElementById("selectr-multiple2");

    var selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);
    // var selectorMultiple2 = new Selectr(selectrmultiple2, optionsMultiple);
    this.getCharts();

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
    let chart = am4core.create("chartdivCustomer", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        month: "Jan",
        search: 1,
        notFound: 5,
      },
      {
        month: "Feb",
        search: 3,
        notFound: 2,
      },
      {
        month: "Mar",
        search: 5,
        notFound: 4,
      },
      {
        month: "Apr",
        search: 3,
        notFound: 3,
      },
      {
        month: "May",
        search: 6,
        notFound: 5,
      },
      {
        month: "Jun",
        search: 2,
        notFound: 4,
      },
      {
        month: "Jul",
        search: 4,
        notFound: 3,
      },
      {
        month: "Aug",
        search: 6,
        notFound: 5,
      },
      {
        month: "Sep",
        search: 5,
        notFound: 4,
      },
      {
        month: "Oct",
        search: 5,
        notFound: 5,
      },
      {
        month: "Nov",
        search: 4,
        notFound: 5,
      },
      {
        month: "Dec",
        search: 5,
        notFound: 6,
      },
    ];
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";

    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    // categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inversed = true;
    valueAxis.title.text = "Value";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "search";
    series1.dataFields.categoryX = "month";
    series1.name = "Search Found";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "notFound";
    series2.dataFields.categoryX = "month";
    series2.name = "Search Not Found";
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
  }
}
