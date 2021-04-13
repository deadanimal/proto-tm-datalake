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
  selector: "app-management-environment-reference",
  templateUrl: "./management-environment-reference.component.html",
  styleUrls: ["./management-environment-reference.component.scss"],
})
export class ManagementEnvironmentReferenceComponent implements OnInit {
  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  listRef: any = [
    {
      name: "Reference 54",
      reference: "-",
      date: "2019-07-27T01:07:14Z",
    },
    {
      name: "Reference 59",
      reference: "-",
      date: "2019-07-27T01:07:14Z",
    },
    {
      name: "Reference 29",
      reference: "-",
      date: "2019-07-27T01:07:14Z",
    },
  ];

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
      .getAll("admin/environment-reference.json")
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
