import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { CoordsPipe } from './coords.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RightpanelComponent,
    CoordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
