import { Student } from "./Student";
import { Internship } from "./Internship";
import { CustomizedMap } from "./Map";
const map = new CustomizedMap("map");
const student = new Student();
const internship = new Internship();
map.addPin(student);
map.addPin(internship);
map.addStudentMarker(student);