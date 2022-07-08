import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { CoordsPipe } from './coords.pipe';
import { HighlightDirective } from './directive/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    RightpanelComponent,
    CoordsPipe,
    HighlightDirective  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
