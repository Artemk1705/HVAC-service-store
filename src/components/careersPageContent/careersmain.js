"use client";

import React, { useState } from "react";
import Link from "next/link";

function PositionCard({ position }) {
  const [isBlockVisible, setIsBlockVisible] = useState(false);
  const [isBlockRendered, setIsBlockRendered] = useState(false);

  const handleOpen = () => {
    setIsBlockRendered(true);
    setTimeout(() => setIsBlockVisible(true), 20);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsBlockVisible(false);
    setTimeout(() => setIsBlockRendered(false), 300);
  };

  return (
    <div className="serv_pos">
      <div className="position">
        <h4 className="position_title">{position.title}</h4>
        <p className="position_p">{position.shortDescription}</p>
        <button onClick={handleOpen} className="info-button">
          MORE
        </button>
      </div>

      {isBlockRendered && (
        <div className={`block ${isBlockVisible ? "visible" : ""}`}>
          <div onClick={handleClose} className="close-button" />
          <div className="block-content">
            <div className="title_apply">
              <h4 className="full_header">{position.title}</h4>
              <Link href={`/careers/${position.slug}`}>
                <div className="apply_button">APPLY</div>
              </Link>
            </div>
            <p className="full_pa">{position.description}</p>

            {position.sections &&
              Object.entries(position.sections).map(([title, list]) => (
                <div key={title}>
                  <h4 className="req_title">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </h4>
                  <ul className="req_list">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PositionCard;
