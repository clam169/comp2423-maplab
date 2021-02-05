import { Internship } from "./Internship";
import { Student } from "./Student";
export class CustomizedMap {
  private googleMap: google.maps.Map;
  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addPin(pinnable: Student | Internship) {
    let messageContent;
    if (pinnable instanceof Student) {
      messageContent = `${pinnable.firstName} ${pinnable.lastName}`
    } else {
      messageContent = `Welcome to ${pinnable.businessName}'s internship!`
    }
    let infoWindow = new google.maps.InfoWindow({
      content: messageContent
    })
    let marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinnable.location.latitude,
        lng: pinnable.location.longitude,
      },
    })
    marker.addListener("click", function() {
      infoWindow.open(this.googleMap, this)
    })
  }

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });

  // addStudentMarker(student: Student) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: student.location.latitude,
  //       lng: student.location.longitude,
  //     },
  //   });
  // }
  // addInternshipMarker(internship: Internship) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: internship.location.latitude,
  //       lng: internship.location.longitude,
  //     },
  //   });
  // }
}