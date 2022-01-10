import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component'; 
import { SliderComponentComponent } from './components/slider-component/slider-component.component'; 
import { ProviderService } from './provider.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
