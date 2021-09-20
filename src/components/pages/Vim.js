import React from "react";
import vimninjabelts from "../../data/vimninjabelts.json";
import "./vim.scss";

export const Vim = () => {
  return (
    <>
      <div className="layer-headline">
        <h1>Vim Ninja </h1>
        </div>
        <div className="layer2">
        
        <div className="vimninjabelts">
          {vimninjabelts.white.map((belt) => {
            return (
              <>
                <div className={`vimTitle`}>
                  <p>{belt.title}</p>
                  <p>{belt.command}</p>
                  <p>{belt.tutorial}</p>
                   <p>{belt.howto}</p>
               
                    </div>
  
              </>
            );
          })}
        </div>
        </div>
      </>
  );
};
