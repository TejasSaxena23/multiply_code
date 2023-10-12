import React from "react";
import { SvgXml } from "react-native-svg";

export default function TobeUsedSvg() {
  const topRight = `<svg
    id="visual"
    viewBox="0 0 900 600"
    width="650"
    height="650"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
  >

    <rect x="0" y="0" width="900" height="600" fill="none"></rect>
    <g transform="translate(943.8337721737848 -10.116867524104407)">
      <path
        d="M107.9 -189.2C148.5 -163.5 195.9 -152 240.9 -122.8C285.9 -93.7 328.5 -46.8 319.5 -5.2C310.6 36.5 250.1 73 205.9 103.6C161.8 134.2 133.9 158.9 102.3 195.8C70.7 232.7 35.3 281.9 -8.3 296.3C-52 310.7 -104 290.5 -128.4 249.4C-152.7 208.3 -149.4 146.3 -198.4 101.3C-247.4 56.3 -348.7 28.1 -388.2 -22.8C-427.6 -73.7 -405.2 -147.3 -356.4 -192.8C-307.7 -238.3 -232.6 -255.5 -168.8 -267.9C-105 -280.2 -52.5 -287.6 -9.4 -271.3C33.7 -255 67.3 -215 107.9 -189.2"
        fill="#00ba60"
      ></path>
    </g>
  </svg>`;

  const svgStyle = {
    position: "absolute",
    top: 0, 
    right: -10, 
    zIndex: -1,
  };

  return (
    <SvgXml xml={topRight} width="650" height="650" style={svgStyle} />
  );
}
