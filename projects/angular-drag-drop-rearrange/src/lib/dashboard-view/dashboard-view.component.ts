import {Component, OnInit, OnDestroy, Input, ChangeDetectorRef} from '@angular/core';

import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

import {untilDestroyed} from 'ngx-take-until-destroy';
import {DashboardItem} from '../dashboard-item.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit, OnDestroy {


  @Input() cols = 3;
  @Input() cardMaxRows = 2;
  @Input() dashboardItems: DashboardItem[] = [];

  responsiveColumns: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    /* Responsive breakpoints */
    this.observeBreakpoint(Breakpoints.TabletPortrait, () => 2);
    this.observeBreakpoint(Breakpoints.HandsetPortrait, () => 1);
  }


  ngOnDestroy(): void {
  }

  /**
   * Used to support mobile breakpoints
   * @param bp breakpoint
   * @param cb columnsFor breakpoint
   */
  private observeBreakpoint(bp: string | string[], cb: () => number): void {
    this.breakpointObserver
      .observe(bp)
      .pipe(
        map((result: BreakpointState) => result.matches),
        untilDestroyed(this)
      )
      .subscribe((result: boolean) => {
        this.responsiveColumns = result ? cb() : undefined;
        console.log('Num of Responsive columns', this.responsiveColumns);
        this.changeDetector.markForCheck();
      });
  }
}