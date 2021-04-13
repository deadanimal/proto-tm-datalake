import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-publish-apps-add',
  templateUrl: './publish-apps-add.component.html',
  styleUrls: ['./publish-apps-add.component.scss']
})
export class PublishAppsAddComponent implements OnInit {

  expiry: string = 'never'

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private toastr: NotifyService
  ) { }

  ngOnInit() {
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

  create() {
    this.toastr.openToastr('Success!', '')
  }

}
