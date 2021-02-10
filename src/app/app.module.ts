import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes 
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';

// Modulos
import { HeroeModule } from './heroes/heroes.module';
import { ContaodorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContaodorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
