export interface Wine{
  _id:string,
  title:string,
  price:number
}

export interface WineDetails{
  country:string,
  description:string,
  designation : string,
  points : number,
  price : number,
  province : string,
  region_1 : string,
  region_2 : string,
  taster_name : string,
  taster_twitter_handle : string,
  title : string,
  variety : string,
  winery : string
}
