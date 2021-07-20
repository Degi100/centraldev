import React from "react";

export const News = () => {
  return (
    <div>
      <div className="layer1">
        <h1>Test</h1>
        <form>
          {/* <input type="number" id="watt" placeholder="Watt" />
          <input type="number" id="hours" placeholder="Hours" />
          <input type="number" id="priceKw" placeholder="Strompreis KW" />
          <button onclick="wattCalc()">Calculate</button> */}
          <input type="text" id="add1" size="6" placeholder="Watt"/> +
          <input type="text" id="add2" size="6" placeholder="Laufzeit h" />
          <input type="text" id="add3" size="6" placeholder="Strompreis KW" />
          <input type="submit" value="Caclulate"></input>
          <input type="text" id="result" placeholder="Result" />
        </form>
      </div>
    </div>
  );
};

