import React from "react";
import "./Modal.css";
import deleteButton from "./../../assets/Vector.png";
import Popup from "reactjs-popup";

export default function Modal({ removeTask }) {
  return (
    <Popup
      trigger={
        <button style={{border:"none", margin: "0", padding: "0", background: "white"}} >
          <img src={deleteButton} alt="delete-btn" className="delete-btn" />
        </button>
      }
      position="top left"
    >
      {(close) => (
        <div className="modal">
          <div className="content">Are you sure you want to delete?</div>
          <div className="actions">
            <button className="button" onClick={removeTask}>
              Yes
            </button>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
