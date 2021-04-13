import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { Router } from "@angular/router";
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
  selector: "app-management-environment-target",
  templateUrl: "./management-environment-target.component.html",
  styleUrls: ["./management-environment-target.component.scss"],
})
export class ManagementEnvironmentTargetComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };
  listTarget: any = [
    {
      name: "Server 54",
      host: "39.109.238.98",
      port: "0858",
      ssl: "no-ssl",
      enable: "enabled",
      date: "2019-07-27T01:07:14Z",
    },
    {
      name: "Server 59",
      host: "111.221.246.8",
      port: "8476",
      ssl: "ssl",
      enable: "disabled",
      date: "2019-07-27T01:07:14Z",
    },
    {
      name: "Server 29",
      host: "216.214.113.204",
      port: "9633",
      ssl: "ssl",
      enable: "enabled",
      date: "2019-07-27T01:07:14Z",
    },
  ];
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private mockService: MocksService,
    private toastr: NotifyService
  ) {
    this.getData();
  }

  ngOnInit() {}

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
  }

  navigatePage(path: string) {
    this.router.navigate([path]);
  }

  getData() {
    this.mockService
      .getAll("admin/environment-servers.json")
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
