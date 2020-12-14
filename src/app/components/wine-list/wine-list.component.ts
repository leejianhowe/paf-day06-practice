import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {WineService} from '../../shared/wine.service'
import {Wine} from '../../shared/wine.model'

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  constructor(private wineService:WineService, private route:ActivatedRoute) { }
  number = 0
  list:Wine[] = []
  country:string=''
  ngOnInit(): void {
    this.country = this.route.snapshot.paramMap.get('country')
    this.wineService.getWineList(this.country).then(res=>this.list=res)
  }

  next(){
    this.number = this.number + 10
    this.wineService.getWineList(this.country,this.number.toString()).then(res=>this.list=res)
  }
  back(){
    if(this.number>0)
      this.number = this.number - 10
    this.wineService.getWineList(this.country,this.number.toString()).then(res=>this.list=res)
  }

}
