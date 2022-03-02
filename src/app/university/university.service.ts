import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { ElementRef, EventEmitter, Injectable, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, Subject } from 'rxjs';
import { Description } from '../models/Description';
import { University } from '../models/University';
import { DeviceDetectorService } from "ngx-device-detector";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteCheckComponent } from '../delete-check/delete-check.component';
import { AddNewUniversityComponent } from '../add-new-university/add-new-university.component';
import { ClosePopComponent } from '../close-pop/close-pop.component';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  closePop(dialogRef: MatDialogRef<AddNewUniversityComponent, any>) {
    this.dialog.open(ClosePopComponent, {
      data: dialogRef
    })
  }
  sameUniversity(university: University, changeUniversity: University): boolean {
    if (JSON.stringify(university) == JSON.stringify(changeUniversity)) {
      return true;
    }
    else {
      return false;
    }
  }

  GetDescriptions(): Observable<Description> {
    return this.http.get<Description>("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0");
  }

  universities: University[];
  universitiesFilter: University[];

  sortNameUpDown() {
    this.universities = this.universities.sort((a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) ? 1 : -1);
    this.updateUniversity();

  }
  updateUniversity() {
    this.universities = JSON.parse(JSON.stringify(this.universities));
  }
  sortNameDownUp() {
    this.universities = this.universities.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) ? 1 : -1);
    this.updateUniversity();
  }
  searchUniversity(searchValue: string, element: ElementRef) {
    this.universities = this.universitiesFilter.filter(d => d.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
  AddEditUniversity(university: University, action: string) {
    if (university.name == null || university.name.length < 5 || university.name.length > 20) {
      throw new Error('Name of University must have lenght between 5 and 20 words')
    }
    if (university.longDescription == null || university.longDescription.length < 10) {
      throw new Error('The number of words in long description must greater then 10')
    }
    if (university.shortDescription == null) {
      throw new Error('Select short descripion')
    }
    if (action == "add") {
      this.AddNew(university);
    }
    if (action == "edit") {
      this.edit(university);
    }
    return '';
  }
  edit(university: University) {
    this.universities = JSON.parse(localStorage.getItem('universityList'));
    let index = this.universities.findIndex(d => d.id == university.id);
    if (JSON.stringify(this.universities[index]) != JSON.stringify(university)) {
      this.dialog.open(DeleteCheckComponent, {
        data: { university: university, action: "edit" }
      })
    }
  }
  editUniversity(university: University) {
    this.universities = JSON.parse(localStorage.getItem('universityList'));
    let index = this.universities.findIndex(d => d.id == university.id);
    this.universities[index] = university;
    localStorage.setItem('universityList', JSON.stringify(this.universities));
  }
  AddNew(university: University): void {
    this.universities = JSON.parse(localStorage.getItem('universityList'));
    let index = this.findMaxId(this.universities);

    university.id = index + 1;
    this.universities.push(university);
    localStorage.setItem('universityList', JSON.stringify(this.universities));
  }
  findMaxId(universities: University[]) {
    universities.sort((a, b) => a.id > b.id ? 1 : -1);
    return universities[universities.length - 1].id;
  }

  constructor(private http: HttpClient, public deviceService: DeviceDetectorService, private dialog: MatDialog) {
    this.universities = JSON.parse(localStorage.getItem('universityList'));
    this.universitiesFilter = JSON.parse(localStorage.getItem('universityList'));
  }

  delete(university: University) {
    this.dialog.open(DeleteCheckComponent, {
      data: { university: university, action: "delete" }
    })

  }
  deleteUniversity(university: University): void {
    this.removeUniversity(university, this.universities);
    localStorage.setItem('universityList', JSON.stringify(this.universities));
    this.universities = JSON.parse(localStorage.getItem('universityList'));
  }
  addUnivLocalStorage(universityList: University[]) {
    // if (!localStorage.getItem('universityList')) {
    localStorage.setItem('universityList', JSON.stringify(universityList));
    // }
  }

  removeUniversity(element: University, uniData: University[]) {
    let index = uniData.findIndex(d => d.id == element.id);
    if (index !== -1) {
      uniData.splice(index, 1);
    }

  }

}
