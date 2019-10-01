import { Component, OnInit, NgZone } from '@angular/core';
import { FirebaseService, CommonService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService, CommonService]
})
export class HomeComponent implements OnInit {
  readonly LOGIN = 'login';
  constructor(
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private _firebase:FirebaseService, 
    private _common:CommonService,
  ) { }

  ngOnInit() {
  }
}
