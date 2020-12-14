import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'

import {Wine,WineDetails} from './wine.model'

@Injectable()
export class WineService{
  constructor(private http: HttpClient){

  }
  async getCountries(){
    return await this.http.get<string[]>('/api/country').toPromise()
  }

  async getWineList(country:string,offset:string='0'){
    const params = new HttpParams().set('offset',offset)
    return await this.http.get<Wine[]>(`/api/country/${country}`,{params}).toPromise()
  }

  async getWineDetails(id:string){
    return await this.http.get<WineDetails>(`/api/wine/${id}`).toPromise()
  }
}
