import React from "react";
import WordCloud from "react-wordcloud";

const WordCloudComponent = (props) => {
  console.log(props.wordData);
  const { wordData } = props;
  const options = {
    colors: ["#B3C2F9", "#7D98F8", "#597BF7"],
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [10, 50],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 5,
  };

  return <WordCloud words={props.wordData} options={options} />;
};

export default WordCloudComponent;
