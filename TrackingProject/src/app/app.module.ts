import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { CoordsPipe } from './coords.pipe';
=======
import { HighlightDirective } from './directive/highlight.directive';

>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RightpanelComponent,
    CoordsPipe
=======
    HighlightDirective,  
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
