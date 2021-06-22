import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BbUIModule } from './components/bb-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BbUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
