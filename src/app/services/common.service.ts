import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor (
    private _router:Router,
    private _toastr: ToastrService
    ) { }

  navigate (path:string):Promise<any> {
    return this._router.navigate([path]);
  }

  successAlert(message:string){
    return this._toastr.success("", `${message}`, {
      timeOut: 3000
    });
  }

  errorAlert(message:string){
    return this._toastr.error("", `${message}`, {
      timeOut: 3000
    });
  }
}
