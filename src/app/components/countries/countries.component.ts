import { Component, OnInit } from '@angular/core';

import { WineService } from '../../shared/wine.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  list:string[] = []

  constructor(private wineService: WineService) { }

  ngOnInit(): void{
    this.wineService.getCountries().then(res=>this.list=res)
  }

}
