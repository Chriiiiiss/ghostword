import React from "react";
import WordCloud from "react-wordcloud";

const WordCloudComponent = (props) => {
  const { wordData } = props;
  const minValue = Math.min(...wordData.map((word) => word.value));
  const maxValue = Math.max(...wordData.map((word) => word.value));

  const getColor = (value, min, max) => {
    const lowColor = "#B3C2F9";
    const mediumColor = "#7D98F8";
    const highColor = "#597BF7";

    const factor = (value - min) / (max - min);

    if (factor < 0.5) {
      return interpolateColor(
        hexToRgb(lowColor),
        hexToRgb(mediumColor),
        factor * 2
      );
    } else {
      return interpolateColor(
        hexToRgb(mediumColor),
        hexToRgb(highColor),
        (factor - 0.5) * 2
      );
    }
  };

  const options = {
    colors: ["#B3C2F9", "#7D98F8", "#597BF7"],
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [10, 50],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 5,
    color: (word) => getColor(word.value, minValue, maxValue),
  };

  return <WordCloud words={props.wordData} options={options} />;
};

export default WordCloudComponent;
