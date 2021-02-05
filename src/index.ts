
import faker from 'faker'
import { Student } from "./Student"
import { Internship } from "./Internship"

console.log("this is working");

faker
// Initialize and add the map

let map;

function initMap() {
  console.log(document.getElementById("map"))
  map = new google.maps.Map(document.getElementById("map") {
  center: { lat: 0, lng: 0 },
  zoom: 8,
});
}

initMap();
