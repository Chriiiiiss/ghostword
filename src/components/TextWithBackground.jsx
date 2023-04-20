import React, { useEffect, useState } from "react";

const TextWithBackground = ({ text, score }) => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    if (score < 3) {
      setBgClass("bg-score-low");
    } else if (score >= 3 && score < 7) {
      setBgClass("bg-score-medium");
    } else {
      setBgClass("bg-score-high");
    }
  }, [score]);

  return <span className={`p-1 rounded ${bgClass}`}>{text}</span>;
};

export default TextWithBackground;
