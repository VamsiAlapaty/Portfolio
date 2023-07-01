import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  max = 10;
  frontend = true;
  html = 9;
  lang = ['HTML','CSS','Javascript','Bootstrap','Angular','Typescript','RxJs','REGEX','JQuery',
  'Tailwind','ECMA','ES6','Figma','Adobe Photoshop']
}
