import React, { useState } from "react";

const EditDealer = (props) => {
  var dealerData;
  if (props.identity === "dealer") {
    dealerData = JSON.parse(localStorage.getItem("dealerData"));
  }

  if (props.identity === "customer") {
    dealerData = JSON.parse(localStorage.getItem("customerData"));
  }

  const [dealerName, setDealerName] = useState(dealerData.name);
  const [dealerAddress, setDealerAddress] = useState(dealerData.address);
  const [dealerPhone, setDealerPhone] = useState(dealerData.phoneNo);
  const handleSave = () => {
    const Name = document.getElementById("dealerName").value;
    const Address = document.getElementById("address").value;
    const Phone = document.getElementById("phoneNo").value;
    if (Name !== "") {
      setDealerName(Name);
      dealerData.name = Name;
    }

    if (Address !== "") {
      setDealerAddress(Address);
      dealerData.address = Address;
    }

    if (Phone !== "") {
      setDealerPhone(Phone);
      dealerData.phoneNo = Phone;
    }
    if (props.identity === "dealer")
      localStorage.setItem("dealerData", JSON.stringify(dealerData));
    if (props.identity === "customer")
      localStorage.setItem("customerData", JSON.stringify(dealerData));
  };
  return (
    <div className={"editform"}>
      <div className={"dealerDetails"}>
        <h2>{`${
          props.identity[0].toUpperCase() + props.identity.substring(1)
        } Details`}</h2>
        <p>
          <span>{"Name: "}</span>
          {dealerName}
        </p>
        <p>
          <span>{"Address: "}</span>
          {dealerAddress}
        </p>
        <p>
          <span>{"Phone no: "}</span>
          {dealerPhone}
        </p>
      </div>
      <div className={"editForm"}>
        <form>
          <label htmlFor={"dealerName"}>{`${
            props.identity[0].toUpperCase() + props.identity.substring(1)
          } Name`}</label>
          <input
            type={"text"}
            id={"dealerName"}
            name={"dealerName"}
            placeholder={`Enter ${props.identity} name`}
          />
          <label htmlFor={"address"}>{"Address"}</label>
          <input
            type={"text"}
            id={"address"}
            name={"address"}
            placeholder={`Enter ${props.identity} address`}
          />
          <label htmlFor={"phoneNo"}>{"Phone Number"}</label>
          <input
            type={"number"}
            id={"phoneNo"}
            name={"phoneNo"}
            placeholder={"Enter phone number"}
          />
          <button type={"button"} className={"submit"} onClick={handleSave}>
            {"Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDealer;