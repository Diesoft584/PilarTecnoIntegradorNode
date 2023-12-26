import { Iplaces } from "../Interfaces/Iplaces"
import { Places } from "../models/places.model"


 export async function getallplaces(name?: string){
    const query = name ? {name: name} : {}
    const places = await Places.find(query)
    return places.map(places =>{
        return places.toJSON()
    })
 }

 export async function getplacesbyid(id: string){
    const places = await Places.findById(id)
    return places?.toJSON()
}

export async function createplaces(placesData: Iplaces){
    const places = new Places(placesData)
    return places.save()
}

export async function updatePlaces(id: string, updatedPlacesData: Iplaces) {
    const updatedPlaces = await Places.findByIdAndUpdate(id, updatedPlacesData, { new: true });
    return updatedPlaces?.toJSON();
  }

  export async function deletePlacesById(id: string) {
    const deletedPlace = await Places.findByIdAndDelete(id);
    return deletedPlace;
  }