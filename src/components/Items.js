import React from "react";
import Button from "./Button";
import "./item.css";

const Items = ({
  title,
  disc,
  discLink,
  backgroundImage,
  leftBtnText,
  leftBtnLink,
  rightBtnTitle,
  rightBtnLink,
  twoBtn,
  first,
}) => {
  return (
    <div
      className="item"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="itemContainer">
        <div className="itemText">
          <p>{title}</p>
          <div className="itemTextDisc>">
            <p>{disc}</p>
          </div>
        </div>

        <div className="itemLowerThird">
          <div className="itemButtons">
            <Button imp="primary" text={leftBtnText} link={leftBtnLink} />
            {twoBtn && (
              <Button
                imp="secondary"
                text={rightBtnTitle}
                link={rightBtnLink}
              />
            )}
          </div>
          {first && <div className="itemExpand">🢛</div>}
        </div>
      </div>
    </div>
  );
};

export default Items;
