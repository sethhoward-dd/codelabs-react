import React, { useState } from "react";

export function CopyToClipboard({ children, copyContent }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      style={{
        cursor: "pointer",
        padding: "3px",
        position: "absolute",
        right: "0",
        borderRadius: "3px"
      }}
      onClick={(evt) => {
        setIsActive(true);
        // Dereference the string differently depending on if it's a multi-line
        // codebox vs a snippet.
        const text = typeof copyContent === "string" ? copyContent : copyContent[0];
        navigator.clipboard.writeText(text);
        setTimeout(() => {
          setIsActive(false);
        }, 3000);
      }}
    >
      <div style={{
        cursor: "default",
        position: "absolute",
        left: "-80px",
        width: "70px",
        top: "3px",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "4px 5px",
        borderRadius: "4px",
        fontSize: "12px",
        opacity: isActive ? 1 : 0,
        transition: "all .3s",
        pointerEvents: "none"
      }}>
        Copied
      </div>
      <div style={{
        cursor: "default",
        width: "0",
        height: "0",
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderLeft: "6px solid #000",
        position: "absolute",
        left: "0",
        top: "calc(50% - 9px)",
        opacity: isActive ? 1 : 0,
        transition: "all .3s",
        pointerEvents: "none"
      }} />
      { children }
    </div>
  );
}
