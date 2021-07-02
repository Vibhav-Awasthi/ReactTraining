import React from "react";
import { Place } from "./Place";
import { Timetable } from "./Scheduler/Timetable";

export const PlaceDetails = () => {
  return (
    <div>
      <Place
        image={"./images/assignment12/bar.jpeg"}
        about={"Bar"}
        noe={"2"}
        conflict={true}
      />
      <Timetable />
      <Place
        image={"./images/assignment12/kitchen.jpeg"}
        about={"Kitchen"}
        noe={"5"}
        conflict={false}
      />
      <Timetable />
    </div>
  );
};
