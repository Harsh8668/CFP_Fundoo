import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  isValid: boolean = false

  show() {
    this.isValid = true
  }

  logout(){
    console.log("Successfully Logout");
    localStorage.removeItem('token');
  }
}