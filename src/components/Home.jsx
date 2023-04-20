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
import logo from "/logo.svg";

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
    <div className="container mx-auto px-4 space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="flex-shrink-0 mr-2 md:mr-4">
          <img src={logo} alt="Logo" className="h-20 w-auto rounded-md" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-4xl text-left mb-4 md:mb-0">
          Study of Elisabeth Borne's speech of March 16, 2023 and its coverage
          in the media
        </h1>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <span className="text-lg hidden md:block">Choose a data set :</span>
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
      <section className="mt-8">
        <h2 className="text-4xl text-left mb-4">Sources</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <a
              href=" https://www.vie-publique.fr/discours/288955-elisabeth-borne-16032023-engagement-reponsabilite-reforme-des-retraites"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original speech
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.francetvinfo.fr/replay-jt/france-2/20-heures/jt-de-20h-du-jeudi-16-mars-2023_5676926.html"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FranceTv (France 2)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.francetvinfo.fr/replay-jt/france-3/19-20/jt-de-19-20-du-jeudi-16-mars-2023_5676932.html"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FranceTv (France 3)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.radiofrance.fr/franceculture/podcasts/journal-de-18h/journal-de-18h-emission-du-jeudi-16-mars-2023-6985615"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Culture
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.bfmtv.com/politique/retraites-elisabeth-borne-annonce-l-utilisation-du-49-3_VN-202303160499.html"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              BFMTV
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
