import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnDestroy{

  constructor(private sharedDetailsService: SharedService, private router: Router) { }
  showMyContainer: boolean = false;
  status: boolean | undefined;
  statusLink: boolean | undefined;
  clickEvent() {

    this.status = !this.status;
    //this.statusLink = !this.statusLink;
    if (this.statusLink) {
      this.statusLink = false;
      this.sharedDetailsService.isClickToggle.next(true)
    } else {
      this.statusLink = true;
      this.sharedDetailsService.isClickToggle.next(false)
    }
  }

  ngOnInit() {
    this.sharedDetailsService.clicked$.subscribe(() => this.clickEvent());
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects) {
          this.status = false;
          this.statusLink = false;
        }
      }
    });
  }

  mouseEnter() {
    this.status = true;
    this.statusLink = true;
  }

  mouseLeave() {
    this.status = false;
    this.statusLink = false;
  }

  ngOnDestroy() {
    this.status = true;
    this.statusLink = true;
  }

}
