import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedService } from './services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent, SidenavComponent, HeaderComponent,CommonModule],
})

export class AppComponent {
  title = 'medical-template';
  clicked: boolean | undefined;
  constructor(private sharedDetailsService :SharedService){}

  ngOnInit(){
    this.sharedDetailsService.clicked$.subscribe((res:any) => {
      this.clicked=res;
    })

  }
}
