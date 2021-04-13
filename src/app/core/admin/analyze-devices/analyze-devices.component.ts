import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-analyze-devices',
  templateUrl: './analyze-devices.component.html',
  styleUrls: ['./analyze-devices.component.scss']
})
export class AnalyzeDevicesComponent implements OnInit {

  // Chart
  chart: any
  chart1: any

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
      if (this.chart1) {
        this.chart1.dispose()
      }
    })
  }

  getChart() {
    let chart = am4core.create("chartdivdev", am4charts.PieChart);

    // Add data
    chart.data = [{
      "country": "Mozilla",
      "litres": 501
    }, {
      "country": "Chrome",
      "litres": 301
    }, {
      "country": "Safari",
      "litres": 201
    }, {
      "country": "Opera",
      "litres": 165
    }];

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
  }

  getChart1() {
    let chart = am4core.create("chartdivdev1", am4charts.PieChart);

    // Add data
    chart.data = [{
      "country": "Mobile",
      "litres": 301
    }, {
      "country": "Tablet",
      "litres": 421
    }, {
      "country": "Laptop",
      "litres": 901
    }];

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
  }

}
