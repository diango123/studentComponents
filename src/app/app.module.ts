import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudEntryComponent } from './stud-entry/stud-entry.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudOutputComponent } from './stud-output/stud-output.component';


@NgModule({
  declarations: [
    AppComponent,
    StudEntryComponent,
    StudListComponent,
    StudOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


