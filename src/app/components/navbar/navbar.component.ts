import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 constructor(private sharedDetailsService :SharedService) {

 }

 onClick() {
  this.sharedDetailsService.clicked$.next(''); // dispatch the click
}
}
