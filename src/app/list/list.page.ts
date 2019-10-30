import { Component, OnInit } from '@angular/core';
import { IMigraineEvent } from '../models/migraine-event';
import { MigrainePainAreasEnum } from '../models/migraine-areas';
import { MigraineSymptomsEnum } from '../models/migraine-symptoms';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public events: IMigraineEvent[] = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      const severity = Math.floor(Math.random() * 10);
      this.events.push({
        severity,
        areas: [(Object.keys(MigrainePainAreasEnum)[Math.floor(Math.random() * Object.keys(MigrainePainAreasEnum).length)]) as any],
        symptoms: [(Object.keys(MigraineSymptomsEnum)[Math.floor(Math.random() * Object.keys(MigraineSymptomsEnum).length)]) as any],
        date: new Date(),
        generalNotes: 'This is item #' + i
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
