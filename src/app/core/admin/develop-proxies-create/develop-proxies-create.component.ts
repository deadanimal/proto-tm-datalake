import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-develop-proxies-create',
  templateUrl: './develop-proxies-create.component.html',
  styleUrls: ['./develop-proxies-create.component.scss']
})
export class DevelopProxiesCreateComponent implements OnInit {

  // Checker
  isCreate = false
  isReverseProxy = false
  isSOAP = false
  isNoTarget = false
  isHostedTarget = false
  isProxyBundle = false

  constructor(
    private toastr: NotifyService
  ) { }

  ngOnInit() {
  }

  createProxy(type: string) {
    if (type == 'cancel') {
      this.isCreate = false
      this.isReverseProxy = false
      this.isSOAP = false
      this.isNoTarget = false
      this.isHostedTarget = false
      this.isProxyBundle = false
    }
    else if (type == 'reverse') {
      this.isCreate = true
      this.isReverseProxy = true
    }
    else if (type == 'soap') {
      this.isCreate = true
      this.isSOAP = true
    }
    else if (type == 'no-target') {
      this.isCreate = true
      this.isNoTarget = true
    }
    else if (type == 'hosted') {
      this.isCreate = true
      this.isHostedTarget = true
    }
    else if (type == 'bundle') {
      this.isCreate = true
      this.isProxyBundle = true
    }
  }

  confirm() {
    this.toastr.openToastr('Success!', '')
  }

}
