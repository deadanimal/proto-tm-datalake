import { Component, OnInit } from "@angular/core";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-management-environment-flow-hooks",
  templateUrl: "./management-environment-flow-hooks.component.html",
  styleUrls: ["./management-environment-flow-hooks.component.scss"],
})
export class ManagementEnvironmentFlowHooksComponent implements OnInit {
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  listFlow: any = [
    {
      flow_hook: "Pre-proxy",
      shared_flow: "-",
      date: "2019-07-27T01:07:14Z",
    },
    {
      flow_hook: "Pre-target",
      shared_flow: "-",
      date: "2019-07-27T01:07:14Z",
    },
    {
      flow_hook: "Post-proxy",
      shared_flow: "-",
      date: "2019-07-27T01:07:14Z",
    },
    {
      flow_hook: "Post-target",
      shared_flow: "-",
      date: "2019-07-27T01:07:14Z",
    },
  ];

  constructor(
    private mockService: MocksService,
    private toastr: NotifyService
  ) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    this.mockService
      .getAll("admin/environment-flow-hook.json")
      .subscribe((res) => {
        this.tableRows = [...res];
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id: key,
          };
        });
      });
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  confirm() {
    this.toastr.openToastr("Success!", "");
  }
}
