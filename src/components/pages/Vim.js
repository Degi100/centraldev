import React from "react";
import vimninjabelts from "../../data/vimninjabelts.json";
import "../pages/vim.scss";

export const Vim = () => {
  return (
    <div>
      <div className="layer1">
        <h1>Vim Nina </h1>

        <div className="vimninjabelts">
          {vimninjabelts.white.map((belt) => {
            return (
              <>
                <div className={`vimTitle`}>
                  <p>{belt.title}</p>
                  <p>{belt.command}</p>
                  {/* <p>{belt.tutorial}</p>
                  <p>{belt.howto}</p>
                  <p>{belt.howto}</p> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};