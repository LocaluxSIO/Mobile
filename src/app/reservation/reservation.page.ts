import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute} from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class ReservationPage implements OnInit {

  presentingElement : any|null;
  lstmodels:any;
  voitureselect:any = { marque: "Aucune voiture sélectionnée", image : "data:image/png;base64,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" };
  destination: any;
  lstchauffeurs: any;
  chauffeurselect: any = {nom: "Aucun chauffeur sélectionné", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4K402XwUrx1TUYmsjTR3UcGkngUBBy81XQQ&usqp=CAU"};
  location: any = {idVehicule: "", dateDepart: "", dateRetour: "", lieuDestination: "", idChauffeur: ""};
  startdate: any;
  enddate: any;

  constructor(private router: Router, private activeRoute : ActivatedRoute, private http : HttpClient) {
    this.http.get('https://localhost:8000/api/modeles').subscribe(data => {
      this.lstmodels=data;
    });
    this.activeRoute.queryParams.subscribe((params)=>{
      let temp:any = this.router.getCurrentNavigation()?.extras.state;
      this.destination = temp.params;
    })
    this.http.get('https://localhost:8000/api/chauffeurs').subscribe(data => {
      this.lstchauffeurs=data;
    });
  }

  voiture(item:any){
    if (item.marque != "Aucune voiture sélectionnée")
    {
      this.voitureselect=item;
    }
  }

  chauffeur(item:any){
    if (item.nom != "Aucun chauffeur sélectionné")
    {
      this.chauffeurselect=item;
    }
  }

  reserverlocation(){

    this.location.idVehicule = this.voitureselect.id;
    this.location.dateDepart = this.startdate;
    this.location.dateRetour = this.enddate;
    this.location.lieuDestination = this.destination;
    this.location.idChauffeur = this.chauffeurselect.id;
    this.http.post("https://127.0.0.1:8000/api/location", this.location)
      .subscribe(data => {});
    console.log(this.location);
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

}
