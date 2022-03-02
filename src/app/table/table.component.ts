import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { AddNewUniversityComponent } from '../add-new-university/add-new-university.component';
import { University } from '../models/University';
import { UniversityService } from '../university/university.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  searchValue: string;
  displayedColumns: string[] = ['Name', 'Short description', 'Long description', 'Edit', 'Delete'];
  @ViewChild('search') element:ElementRef;

  constructor(public universityService: UniversityService, private dialog: MatDialog, public el:ElementRef) {
    fromEvent(this.el.nativeElement,'input')
    .pipe(map((event:any)=>event.target.value))
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(d1=>{
      this.searchEvent()
    })
   }
  sortedUp = true;
  numberOfPage=1;
  
  ngOnInit(): void {
    
  }
  universityOnPage():University[]{
    return this.universityService.universities.slice((this.numberOfPage-1)*5,this.numberOfPage*5);
  }
  searchEvent():void{
    this.universityService.searchUniversity(this.searchValue,this.element);
  }
  move(side:string):void{
    if(side=="right"){
      if(this.numberOfPage>=this.universityService.universities.length/5){
        return;
      }
      this.numberOfPage++;
    }
    if(side=="left"){
      if(this.numberOfPage<=1){
        return;
      }
      this.numberOfPage--;
    }
  }
  addNewButton(): void{
    this.dialog.open(AddNewUniversityComponent, {
      height: '500px',
      width: '800px',
      data:{university:{image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGEH8NRyLvs04jLQU7OObBBpZ_c7bw7TbbQ&usqp=CAU"},action:"add"}
    });
  }
  sortNameDownUp(): void {
    this.universityService.sortNameDownUp();

  }
  sortNameUpDown(): void {
    this.universityService.sortNameUpDown();
  }
  sortName(): void {
    if (this.sortedUp) {
      this.sortNameDownUp();
      this.sortedUp = false;
    }
    else {
      this.sortNameUpDown();
      this.sortedUp = true;
    }

  }
  delete(university: University): void {
    this.universityService.delete(university);

  }
   edit(university: University): void {
    this.dialog.open(AddNewUniversityComponent, {
      height: '500px',
      width: '800px',
      data: { university: university, action: "edit" }
    });

  }
}
