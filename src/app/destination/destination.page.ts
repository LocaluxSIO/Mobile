import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DestinationPage implements OnInit {
  public data = ['Paris-Orly', 'Paris-Charles de Gaulle', 'Paris-Beauvais', 'Paris-Le Bourget', 'Paris-Vatry', 'Paris-Versailles', 'Paris-Deauville', 'Paris-Fontainebleau', 'Paris-Fontainebleau', 'Paris-Fo'];
  public results = [...this.data];

  handleChange(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }
  constructor(private router:Router) { }

  passerdesparamatres(item:any){
    let navigationExtras : NavigationExtras ={
      state : {
        params : item
      }
    }
    this.router.navigate(['/reservation'], navigationExtras);
  }

  ngOnInit() {
  }

}
