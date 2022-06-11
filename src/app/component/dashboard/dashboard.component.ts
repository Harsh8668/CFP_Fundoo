import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  value: any;

  openSnackBar() {
    this._snackBar.open;
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _snackBar: MatSnackBar, private router: Router, private data: DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  fillerNav: string[] = [
    'Notes',
    'Reminders',
    'Edit Labels',
    'Archive',
    'Trash',
  ];

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    console.log("Successfully Logout");
    localStorage.removeItem('token');
    this.router.navigateByUrl("\login")
    this._snackBar.open('Logout Successfully', '', { duration: 2000 });
  }

  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeDataMessage(Ddata);
  }
}