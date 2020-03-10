import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from 'src/app/model/actualite';
import { ActualiteService } from 'src/app/service/actualite.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  @Input() actualite: Actualite;

  constructor(
    private route: ActivatedRoute,
    private service: ActualiteService
  ) { }

  getActualite(id: string): void {
    if (id !== null) {
      this.service.getActualites().subscribe(actualites => {
        this.actualite = actualites.filter(actualite => actualite.id === id).shift();
      });
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.getActualite(id);
  }
}
