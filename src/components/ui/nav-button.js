"use client";

export function NavButton({ label = "Services", onClick }) {
  return (
    <button className="services-button" onClick={onClick}>
      {label}
      <div className="arrow_circle">
        <span className="arrow" />
      </div>
    </button>
  );
}
