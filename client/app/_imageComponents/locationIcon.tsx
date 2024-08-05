import Boat from "/public/icons/locations/boat.svg";
import Building from "/public/icons/locations/building.svg";
import Campground from "/public/icons/locations/campground.svg";
import City from "/public/icons/locations/city.svg";
import Dungeon from "/public/icons/locations/dungeon.svg";
import Entrance from "/public/icons/locations/entrance.svg";
import Factory from "/public/icons/locations/factory.svg";
import Hideout from "/public/icons/locations/hideout.svg";
import Home from "/public/icons/locations/home.svg";
import Hospital from "/public/icons/locations/hospital.svg";
import Institution from "/public/icons/locations/institution.svg";
import Landmark from "/public/icons/locations/landmark.svg";
import Location from "/public/icons/locations/location.svg";
import Medical from "/public/icons/locations/medical.svg";
import Mountain from "/public/icons/locations/mountain.svg";
import Mountown from "/public/icons/locations/mountown.svg";
import Obelisk from "/public/icons/locations/obelisk.svg";
import Outpost from "/public/icons/locations/outpost.svg";
import Ship from "/public/icons/locations/ship.svg";
import Store from "/public/icons/locations/store.svg";
import Tent from "/public/icons/locations/tent.svg";
import Volcano from "/public/icons/locations/volcano.svg";
import Warehouse from "/public/icons/locations/warehouse.svg";
import Worship from "/public/icons/locations/worship.svg";
import React from "react";

type locationIcon = {
  key: string;
  node: React.ReactNode;
};

const locationImageOptions: locationIcon[] = [
  { key: "location", node: <Location /> },
  { key: "boat", node: <Boat /> },
  { key: "building", node: <Building /> },
  { key: "campground", node: <Campground /> },
  { key: "city", node: <City /> },
  { key: "dungeon", node: <Dungeon /> },
  { key: "entrance", node: <Entrance /> },
  { key: "factory", node: <Factory /> },
  { key: "hideout", node: <Hideout /> },
  { key: "home", node: <Home /> },
  { key: "hospital", node: <Hospital /> },
  { key: "institution", node: <Institution /> },
  { key: "landmark", node: <Landmark /> },
  { key: "medical", node: <Medical /> },
  { key: "mountain", node: <Mountain /> },
  { key: "mountown", node: <Mountown /> },
  { key: "obelisk", node: <Obelisk /> },
  { key: "outpost", node: <Outpost /> },
  { key: "ship", node: <Ship /> },
  { key: "store", node: <Store /> },
  { key: "tent", node: <Tent /> },
  { key: "volcano", node: <Volcano /> },
  { key: "warehouse", node: <Warehouse /> },
  { key: "worship", node: <Worship /> },
];

export function getLocationIconOptions() {
  var keyList: string[] = [];
  locationImageOptions.forEach((option) => keyList.push(option.key));
  return keyList;
}

export default function LocationIcon({ icon }: { icon: string }) {
  return (
    locationImageOptions.find((option) => option.key === icon)?.node || (
      <Location />
    )
  );
}
