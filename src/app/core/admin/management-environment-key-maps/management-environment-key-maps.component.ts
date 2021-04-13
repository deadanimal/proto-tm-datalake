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
  selector: "app-management-environment-key-maps",
  templateUrl: "./management-environment-key-maps.component.html",
  styleUrls: ["./management-environment-key-maps.component.scss"],
})
export class ManagementEnvironmentKeyMapsComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  listKey: any = [
    {
      name: "Key Item 59",
      encrypted: "Yes",
      key: "2",
      date: "2019-07-27T01:07:14Z",
    },
    {
      name: "Key Item 24",
      encrypted: "No",
      key: "5",
      date: "2019-07-27T01:07:14Z",
    },
    {
      name: "Key Item 29",
      encrypted: "No",
      key: "4",
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
    this.mockService.getAll("admin/environment-key.json").subscribe((res) => {
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
