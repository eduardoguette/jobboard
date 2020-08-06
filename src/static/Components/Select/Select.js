import React from "react";
import removeTag from "../../images/icon-remove.svg";
function Select({ word, event, remove, state }) {


  return (
    <div className="select">
      <div className="elems-selec">
        <div className="tag">

          {
            word.map((btn, i) =>
              <div className="container-select" key={i} >
                <p className="tag-select">{btn}</p><img onClick={remove} src={removeTag} alt="remove" />
              </div>
            )
          }
        </div>

      </div>
      <p className="clear text-700" onClick={event}>Clear</p>
    </div>
  );
}

export default Select;
