/// <reference types="@types/google.maps" />
import { CustomMAP } from "./CustomMap";
new CustomMAP("map");
import { User } from "./Users";
import { Company } from "./Company";

const user = new User();
const customMap = new CustomMAP("map");
customMap.addMarker(user);
// console.log("user", user);

const company = new Company();
customMap.addMarker(company);
// const company = new Company();
// console.log("company", company);
