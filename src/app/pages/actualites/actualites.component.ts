import { Component, OnInit } from '@angular/core';
import { ActualiteService } from 'src/app/service/actualite.service';
import { Actualite } from 'src/app/model/actualite';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
  actualites: Actualite[];

  constructor(private actualiteService: ActualiteService) { }

    getActualites(): void {
      this.actualiteService.getActualites().subscribe(actualites => {
        this.actualites = actualites;
      });
    }

  ngOnInit() {
    this.getActualites();
  }

}
