import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns = ['position', 'name', 'email', 'symbol'];
  dataSource = ELEMENT_DATA;
  title = 'material-cg';
  jobroless: jobroles[] = [
    { value: 'steak-0', viewValue: 'devloper' },
    { value: 'pizza-1', viewValue: 'devops' },
    { value: 'tacos-2', viewValue: 'sales' },
    { value: 'tacos-2', viewValue: 'marketing' }
  ];

}


export interface jobroles {
  value: string;
  viewValue: string;
}
export interface Element {
  name: string;
  position: number;
  email: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'john', email: 'john@gmail.com', symbol: 'sales' },
  { position: 2, name: 'robert', email: 'robert@gmail.com', symbol: 'Marketing' },
  { position: 3, name: 'william', email:'william@gmail.com', symbol: 'DevOps' },
  { position: 4, name: 'Bruce Banner', email: 'bruce@gmail.com', symbol: 'Developer'},
];
