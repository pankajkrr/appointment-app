import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  addClientForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.addClientForm = new FormGroup ({
      firstName: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      lastName: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      email: new FormControl (null, [Validators.required, Validators.email, Validators.maxLength(200)])
    })
  }

}
