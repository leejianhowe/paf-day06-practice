import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {WineService} from '../../shared/wine.service'
import {WineDetails} from '../../shared/wine.model'
@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  constructor(private wineService:WineService, private route:ActivatedRoute) { }
  details:WineDetails
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.wineService.getWineDetails(id).then(res=>this.details=res)
  }

}
