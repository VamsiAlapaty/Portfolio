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
  'Tailwind','ECMA','ES6','Figma','Adobe Photoshop'];
  backend = ['Java','Spring','Node.js','Junit', 'Mockito', 'JSP', 'Java Servlets', 'Spring MVC'];
  testing = ['Karma','Jasmine','JEST', 'Lint','ngtest'];
  VersionControl = ['Git','CI/CD','BitBucket','Jenkins'];
  CloudTech = ['Google cloud platform(GCP)','Azure', 'Amazon Web Services'];
  database = ['SQL','PLLSQL','Oracle DB', 'S3 Bucket storage'];
  ide=['Visual Studio Code','IntelliJ','Eclipse','Pycharm','Android Studio']
}
