import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { Action } from "src/app/shared/services/actions/actions.model";
import { ActionsService } from "src/app/shared/services/actions/actions.service";
// import { AuditData } from 'src/assets/mock/admin-Audit/Audit.data.json'
import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
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
import { OrgData } from "angular-org-chart/src/app/modules/org-chart/orgData";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-publish-products",
  templateUrl: "./publish-products.component.html",
  styleUrls: ["./publish-products.component.scss"],
})
export class PublishProductsComponent implements OnInit, OnDestroy {
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: Action[] = [];
  SelectionType = SelectionType;

  // Chart
  private chart: any;
  private chart1: any;
  private chart2: any;
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

  files: File[] = [];

  orgData: OrgData = {
    name: "Encik Kamarul",
    type: "CEO",
    children: [
      {
        name: "Puan Samsiah",
        type: "VP",
        children: [
          {
            name: "Puan Shuhada",
            type: "manager",
            children: [],
          },
          {
            name: "Encik Zainal",
            type: "Manager",
            children: [],
          },
        ],
      },
      {
        name: "Encik Saufi",
        type: "VP",
        children: [
          {
            name: "Encik Jamal",
            type: "manager",
            children: [
              {
                name: "CIk Khadijah",
                type: "Intern",
                children: [],
              },
            ],
          },
          {
            name: "Puan Izati",
            type: "Manager",
            children: [
              {
                name: "Encik Halim",
                type: "Team Lead",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  // Data
  public datas: any = [];
  listAction: any;
  listTask: any = [
    {
      nama: "Employee",
      owner: "Fadhli",
      tags: "Sales",
      type: "Data Asset",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      nama: "Customer",
      owner: "Faez",
      tags: "IoT",
      type: "Data Asset",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      nama: "Employee",
      owner: "Amin",
      tags: "Confidential",
      type: "Data Asset",
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
  addNewActionForm: FormGroup;
  editActionForm: FormGroup;
  editAuditFormMessages = {
    Actionname: [
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
    private ActionData: ActionsService,
    private loadingBar: LoadingBarService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCharts();
    this.ActionData.getAll().subscribe((res) => {
      this.listAction = res;
      this.tableRows = [...res];

      console.log(this.tableRows);
      this.listAction = this.tableRows.map((prop, key) => {
        // console.log("test =>", prop, key);
        return {
          ...prop,
          // id: key,
        };
      });
      // console.log("Svc: ", this.listCrganisation);
    });

    this.addNewActionForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      detail: new FormControl("", Validators.compose([Validators.required])),
    });

    this.editActionForm = this.formBuilder.group({
      id: new FormControl(""),
      name: new FormControl("", Validators.compose([Validators.required])),
      detail: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  addNewAction() {
    // console.log("qqqq");
    // this.loadingBar.start();
    // this.loadingBar.complete();
    // this.successMessage();
    console.log(this.addNewActionForm.value);
    this.ActionData.create(this.addNewActionForm.value).subscribe(
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
        this.errorAlert("add new");
      },
      () => {
        // After
        // this.notifyService.openToastr("Success", "Welcome back");
        // this.navigateHomePage();
      }
    );
  }

  editActionDetail() {
    // console.log("qqqq");
    // this.loadingBar.start();
    // this.loadingBar.complete();
    // this.successEditMessage();
    console.log(this.editActionForm.value);
    this.ActionData.update(
      this.editActionForm.value.id,
      this.editActionForm.value
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
        this.errorAlert("edit");
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
    if (path == "/admin//utility/Actions") {
      return this.router.navigate([path]);
    } else if (path == "/admin//utility/Action-detail") {
      return this.router.navigate([path, id]);
    }
  }

  successMessage() {
    let title = "Success";
    let message = "Create New Action";
    this.notifyService.openToastr(title, message);
  }

  successEditMessage() {
    let title = "Success";
    let message = "Edit Action";
    this.notifyService.openToastr(title, message);
  }

  errorAlert(task) {
    swal.fire({
      title: "Error",
      text: "Cannot " + task + " Action, Please Try Again!",
      type: "error",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-danger",
      confirmButtonText: "Close",
    });
  }

  successAlert(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup",
    });
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    var returnData: any;
    let val = $event.target.value;
    this.listAction = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
        // console.log(key, d[key].toLowerCase().toLowerCase().indexOf(val));

        // if (d.Action_type.toLowerCase().indexOf(val) !== -1 || !val) {
        //   returnData =
        //     d.Action_type.toLowerCase().indexOf(val) !== -1 || !val;
        // }
        // return returnData;
      }
      return false;
    });
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelectTable({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      // if (this.chart1) {
      //   console.log("Chart disposed");
      //   this.chart1.dispose(); chart1
      // }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      // this.getChart();
      // this.getChart1();
      this.getChartPie1();
      this.getChartBar1();
    });
  }

  openModal(modalRef: TemplateRef<any>, row) {
    // if (row) {
    //   console.log(row);
    //   this.editActionForm.patchValue(row);
    // }
    this.modal = this.modalService.show(
      modalRef,
      Object.assign({}, { class: "gray modal-xl" })
    );
    // this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    this.editActionForm.reset();
  }

  confirm(task) {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure to " + task,
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
          this.register(task);
        }
      });
  }

  register(task) {
    swal
      .fire({
        title: "Success",
        text: "Successfully " + task,
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Close",
      })
      .then((result) => {
        if (result.value) {
          this.modal.hide();
          this.editActionForm.reset();
        }
      });
  }

  getChart() {
    // let chart = am4core.create("chartdivAction", am4charts.XYChart);
    let chart = am4core.create("chartdsCreatetask", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "Jan",
        visits: 4025,
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
        country: "Jul",
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
        visits: 580,
      },
      {
        country: "Nov",
        visits: 443,
      },
      {
        country: "Dec",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "Task";
    valueAxis.title.fontWeight = "bold";

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
  }

  getChart1() {
    let chart = am4core.create("chartdsCreatetask1", am4charts.XYChart);

    // Add data
    chart.data = generateChartData();

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 1;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.fillOpacity = 0.1;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12);

    let seriesRange = dateAxis.createSeriesRange(series);
    seriesRange.contents.strokeDasharray = "2,3";
    seriesRange.contents.stroke = chart.colors.getIndex(8);
    seriesRange.contents.strokeWidth = 1;

    let pattern = new am4core.LinePattern();
    pattern.rotation = -45;
    pattern.stroke = seriesRange.contents.stroke;
    pattern.width = 1000;
    pattern.height = 1000;
    pattern.gap = 6;
    seriesRange.contents.fill = pattern;
    seriesRange.contents.fillOpacity = 0.5;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 200);
      let visits = 1200;
      for (var i = 0; i < 200; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );

        chartData.push({
          date: newDate,
          visits: visits,
        });
      }
      return chartData;
    }

    // add range
    let range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
    range.grid.stroke = chart.colors.getIndex(0);
    range.grid.strokeOpacity = 1;
    range.bullet = new am4core.ResizeButton();
    // range.bullet.background.fill = chart.colors.getIndex(0);
    // range.bullet.background.states.copyFrom(
    //   chart.zoomOutButton.background.states
    // );
    range.bullet.minX = 0;
    range.bullet.adapter.add("minY", function (minY, target) {
      target.maxY = chart.plotContainer.maxHeight;
      target.maxX = chart.plotContainer.maxWidth;
      return chart.plotContainer.maxHeight;
    });

    range.bullet.events.on("dragged", function () {
      range.value = dateAxis.xToValue(range.bullet.pixelX);
      seriesRange.value = range.value;
    });

    let firstTime = chart.data[0].date.getTime();
    let lastTime = chart.data[chart.data.length - 1].date.getTime();
    let date = new Date(firstTime + (lastTime - firstTime) / 2);

    range.date = date;

    seriesRange.date = date;
    seriesRange.endDate = chart.data[chart.data.length - 1].date;
  }

  getChartPie1() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartpublishproductpie1", am4charts.PieChart);

    // Add data number of approval pending, number of expired content to be reviewed,
    chart.data = [ {
      "country": "Number of Approval Pending",
      "litres": 501.9
    }, {
      "country": "Number of Expired Content to be Reviewed",
      "litres": 301.9 }
    // }, {
    //   "country": "Ireland",
    //   "litres": 201.1
    // }, {
    //   "country": "Germany",
    //   "litres": 165.8
    // }, {
    //   "country": "Australia",
    //   "litres": 139.9
    // }, {
    //   "country": "Austria",
    //   "litres": 128.3
    // }, {
    //   "country": "UK",
    //   "litres": 99
    // }, {
    //   "country": "Belgium",
    //   "litres": 60
    // }, {
    //   "country": "The Netherlands",
    //   "litres": 50
    // } 
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chart1 = chart
  }

  getChartBar1 () {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartpublishproductpbar1", am4charts.XYChart);

    chart.data = [{
    "country": "Monday",
    "visits": 2025
    }, {
    "country": "Tuesday",
    "visits": 1882
    }, {
    "country": "Wednesday",
    "visits": 1809
    }, {
    "country": "Thursday",
    "visits": 1322
    }, {
    "country": "Friday",
    "visits": 1122 }
    // }, {
    // "country": "France",
    // "visits": 1114
    // }, {
    // "country": "India",
    // "visits": 984
    // }, {
    // "country": "Spain",
    // "visits": 711
    // }, {
    // "country": "Netherlands",
    // "visits": 665
    // }, {
    // "country": "Russia",
    // "visits": 580
    // }, {
    // "country": "South Korea",
    // "visits": 443
    // }, {
    // "country": "Canada",
    // "visits": 441
    // }
    ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
    am4core.array.each(chart.data, function (item) {
      item.visits += Math.round(Math.random() * 200 - 100);
      item.visits = Math.abs(item.visits);
    })
    chart.invalidateRawData();
    }, 2000)

    categoryAxis.sortBySeries = series;

    this.chart2 = chart
  }
}
