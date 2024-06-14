import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital-dashboard.component.html',
  styleUrl: './hospital-dashboard.component.scss'
})

export class HospitalDashboardComponent {
  items = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  sortAscending = true;
  currentSortColumn = '';

  sortTable(column: string) {
    if (this.currentSortColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortAscending = true;
      this.currentSortColumn = column;
    }

    this.items.sort((a:any, b:any) => {
      if (a[column] < b[column]) {
        return this.sortAscending ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
