import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { AddNewUniversityComponent } from './add-new-university/add-new-university.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
import { DeleteCheckComponent } from './delete-check/delete-check.component';
import { ClosePopComponent } from './close-pop/close-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversityComponent,
    TableComponent,
    HeaderComponent,
    AddNewUniversityComponent,
    OkDialogComponent,
    DeleteCheckComponent,
    ClosePopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports:[

  ]
})
export class AppModule { }
