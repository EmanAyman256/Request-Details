import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
items=[ {
  label: 'Home',
  icon: 'pi pi-home'
},
{
  label: 'Features',
  icon: 'pi pi-star'
},
{
  label: 'Projects',
  icon: 'pi pi-search',
}
]
}
