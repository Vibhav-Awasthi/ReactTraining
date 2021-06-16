import React, { useState } from "react";

const EditCarScreen = (props) => {
  const [searchModel, setSearchModel] = useState(props.model);
  const carData = JSON.parse(localStorage.getItem("carData"));

  const obj = carData.find((curr) => {
    return curr.Name === searchModel;
  });

  const ind = carData.findIndex((curr) => {
    return curr.Name === searchModel;
  });

  const [carName, setCarName] = useState(obj.Name);
  const [miles, setMiles] = useState(obj.Miles_per_Gallon);
  const [horsePower, setHorsePower] = useState(obj.Horsepower);
  const [weight, setWeight] = useState(obj.Weight_in_lbs);

  const handleSave = () => {
    const nameValue = document.getElementById("carName").value;
    const milesValue = document.getElementById("miles").value;
    const hpValue = document.getElementById("horsepower").value;
    const weight = document.getElementById("weight").value;

    if (nameValue !== "") {
      carData[ind].Name = nameValue;
      setSearchModel(nameValue);
      setCarName(nameValue);
    }
    if (milesValue !== "") {
      carData[ind].Miles_per_Gallon = milesValue;
      setMiles(milesValue);
    }
    if (hpValue !== "") {
      carData[ind].Horsepower = hpValue;
      setHorsePower(hpValue);
    }
    if (weight !== "") {
      carData[ind].Weight_in_lbs = weight;
      setWeight(weight);
    }
    localStorage.setItem("carData", JSON.stringify(carData));
  };
  return (
    <div className={"editform"}>
      <div className={"carDetails"}>
        <h2>{"Car Details"}</h2>
        <p>
          <span>{"Car Name: "}</span>
          {carName}
        </p>
        <p>
          <span>{"Miles per gallon: "}</span>
          {miles}
        </p>
        <p>
          <span>{"Horse power: "}</span>
          {horsePower}
        </p>
        <p>
          <span>{"Weight in lbs: "}</span>
          {weight}
        </p>
      </div>
      <div className={"editForm"}>
        <form>
          <label htmlFor={"carName"}>{"Car Name"}</label>
          <input
            type={"text"}
            id={"carName"}
            name={"carName"}
            placeholder={"Enter car name"}
          />
          <label htmlFor={"miles"}>{"Miles per gallon"}</label>
          <input
            type={"number"}
            id={"miles"}
            name={"miles"}
            placeholder={"Enter miles per gallon"}
          />
          <label htmlFor={"horsepower"}>{"Horse Power"}</label>
          <input
            type={"number"}
            id={"horsepower"}
            name={"horsepower"}
            placeholder={"Enter horse power"}
          />
          <label htmlFor={"weight"}>{"Weight"}</label>
          <input
            type={"number"}
            id={"weight"}
            name={"weight"}
            placeholder={"Enter weight"}
          />
          <button type={"button"} className={"submit"} onClick={handleSave}>
            {"Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCarScreen;