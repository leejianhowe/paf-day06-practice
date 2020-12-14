import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { WineService } from './shared/wine.service';
import { CountriesComponent } from './components/countries/countries.component';
import { WineListComponent } from './components/wine-list/wine-list.component';
import { WineDetailsComponent } from './components/wine-details/wine-details.component';

const ROUTES = [
  {path:'',component:CountriesComponent},
  {path:'country/:country',component:WineListComponent},
  {path:'wine/:id',component:WineDetailsComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    WineListComponent,
    WineDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
