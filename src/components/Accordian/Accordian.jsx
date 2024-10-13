import React from "react";
import "./Accordian.css";
import Data from "../../../data";

const Accordian = () => {
  const [selected, setSelected] = React.useState(null);

  function handleSelection(getcurrentID) {
    setSelected(getcurrentID===selected?null:getcurrentID);
  }

  return (
    <div className="acc--container container">
      <div className="acc--elements">
        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div className="acc--item" key={dataItem.id}>
              <div className="acc--title" onClick={() => handleSelection(dataItem.id)}>
                <div><h1>{dataItem.question}</h1></div>
                <div><button className="acc--button">{selected === dataItem.id ? "-" : "+"}</button></div>
              </div>
              {selected === dataItem.id ? (
                <div className="acc--content"><h2>{dataItem.answer}</h2></div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Error! No data provided</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

