import React, { useEffect, useState } from "react";
import TextWithBackground from "./TextWithBackground";
import BarChartComponent from "./BarChartComponent";
import WordCloudComponent from "./WordCloudComponent";
import {
  defaultData,
  bfmData,
  franceCultureData,
  france2Data,
  france3Data,
} from "../assets/data";

const Home = () => {
  const [selectedWordData, setSelectedWordData] = useState(defaultData);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchText = async () => {
      const response = await fetch("/borne.txt");
      const textData = await response.text();
      setText(textData);
    };

    fetchText();
  }, []);

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.value;

    switch (selectedIndex) {
      case "All":
        setSelectedWordData(defaultData);
        break;
      case "BFMTV":
        setSelectedWordData(bfmData);
        break;
      case "FranceC":
        setSelectedWordData(franceCultureData);
        break;
      case "France2":
        setSelectedWordData(france2Data);
        break;
      case "France3":
        setSelectedWordData(france3Data);
        break;
      default:
        setSelectedWordData(defaultData);
    }
  };

  const convertWordData = (data) => {
    return data.map((item) => ({ text: item.text, value: item.score }));
  };

  const splitText = (text) => {
    const cleanedText = text.replace(/\s+/g, " ").trim();
    return cleanedText.split(/(\s+)/).filter((e) => e);
  };

  const findWordData = (word, selectedWordData) => {
    return selectedWordData.find(
      (data) => data.text.toLowerCase() === word.toLowerCase()
    );
  };

  const textParts = splitText(text);

  return (
    <div className="container mx-auto p-4 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-left">
          Study of Elisabeth Borne's speech of March 16, 2023 and its coverage
          in the media
        </h1>
        <div className="space-x-4">
          <span className="text-lg">Choisissez un ensemble de données :</span>
          <select
            className="border border-gray-300 rounded-md p-1"
            onChange={handleSelectChange}
          >
            <option value="All">All</option>
            <option value="BFMTV">BFMTV</option>
            <option value="FranceC">France Culture</option>
            <option value="France2">France 2</option>
            <option value="France3">France 3</option>
          </select>
        </div>
      </div>
      <section>
        <h2 className="text-4xl text-left mb-4">Corpus</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-score-high"></div>
            <span>Most re-used</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-score-medium"></div>
            <span>Moderately re-used</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-score-low"></div>
            <span>Little re-used</span>
          </div>
        </div>
        <div className="text-cormorant leading-8 max-h-80 overflow-y-auto">
          {textParts.map((part, index) => {
            const wordData = findWordData(part, selectedWordData);
            return wordData ? (
              <TextWithBackground
                key={index}
                text={part}
                score={wordData.score}
              />
            ) : (
              <React.Fragment key={index}>{part}</React.Fragment>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-4xl text-left mb-4">Word cloud</h2>
        <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2">
          <WordCloudComponent wordData={convertWordData(selectedWordData)} />
        </div>
      </section>
      <section>
        <h2 className="text-4xl text-left mb-4">
          Diagram on the number of words used on the speech by media
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-lg text-left mb-4">
            Total number of words in the speech : 740
          </p>
          <BarChartComponent />
        </div>
      </section>
    </div>
  );
};

export default Home;
