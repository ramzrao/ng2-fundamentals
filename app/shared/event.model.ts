
export interface IEvent{
    id
    name
    date
    time
    price
    location:{
      address
      city
      country
    },
    imageUrl,
    session:ISession
}
export interface ISession{
  

}