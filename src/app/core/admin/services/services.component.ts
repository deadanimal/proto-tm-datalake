import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Form
  apiForm: FormGroup
  apiFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'endpoint': [
      { type: 'required', message: 'Endpoint is required' }
    ]
  }

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.apiForm = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      endpoint: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  }

  navigatePage(path: string) {
    console.log('Path: ', path)
    this.router.navigate([path])
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

}
