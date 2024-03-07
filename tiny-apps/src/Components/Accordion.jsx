import React, { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <ul>
        <ListItem
          isActive={activeIndex === 0}
          onSetActive={() => setActiveIndex(0)}
        />
        <ListItem
          isActive={activeIndex === 1}
          onSetActive={() => setActiveIndex(1)}
        />
      </ul>
    </>
  );
}

function ListItem({ isActive, onSetActive }) {
  return (
    <li>
      <h3>Item 1</h3>
      <p>özet: Lorem ipsum dolor sit amet.</p>
      {isActive && (
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, hic!</p>
      )}

      {!isActive && <button onClick={() => onSetActive()}>Detay gör</button>}
    </li>
  );
}
