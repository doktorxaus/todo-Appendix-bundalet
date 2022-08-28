import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent  } from './app.component';
import { ButtonComponent } from './core/components/button/button.component';
import { HeaderComponent } from './core/components/header/header.component';
import { TextInputComponent } from './core/components/text-input/text-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SelecktComponent } from './core/components/seleckt/seleckt.component';
import { TodolistComponent } from './core/components/todolist/todolist.component';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';






@NgModule({
  declarations: [

    AppComponent,
    ButtonComponent,
    TextInputComponent,
    HeaderComponent,
    SelecktComponent,
    TodolistComponent,








  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule










  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
