import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  accordion: MatAccordion = new MatAccordion;
  panelOpenState = false;
}
