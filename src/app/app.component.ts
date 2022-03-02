import { Component } from '@angular/core';
import { universityList } from './models/University';
import { UniversityService } from './university/university.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NikolaProject2';

  constructor(universityService: UniversityService) {
    if (!localStorage.getItem('universityList')) {
      universityService.addUnivLocalStorage(universityList);
    }
  }

}
