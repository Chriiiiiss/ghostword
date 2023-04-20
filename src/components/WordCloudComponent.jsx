import React from "react";
import WordCloud from "react-wordcloud";

const wordsData = [
  { text: "gouvernement", value: 11 },
  { text: "responsabilité", value: 10 },
  { text: "compromis", value: 9 },
  { text: "parlementaire", value: 7 },
  { text: "peut", value: 7 },
  { text: "réforme", value: 7 },
  { text: "texte", value: 6 },
  { text: "parlement", value: 6 },
  { text: "deux", value: 6 },
  { text: "fondement", value: 5 },
  { text: "49", value: 5 },
  { text: "alinéa", value: 5 },
  { text: "3", value: 5 },
  { text: "constitution", value: 5 },
  { text: "quelques", value: 5 },
  { text: "donc", value: 5 },
  { text: "prendre", value: 5 },
  { text: "débat", value: 5 },
  { text: "assemblées", value: 5 },
  { text: "retraites", value: 5 },
  { text: "cet", value: 5 },
  { text: "projet", value: 4 },
  { text: "démocratie", value: 4 },
  { text: "risque", value: 4 },
  { text: "voir", value: 4 },
  { text: "faire", value: 4 },
  { text: "cette", value: 4 },
  { text: "aussi", value: 4 },
  { text: "ceux", value: 4 },
  { text: "sociale", value: 3 },
  { text: "comme", value: 3 },
  { text: "dernier", value: 3 },
  { text: "pari", value: 3 },
  { text: "nécessaire", value: 3 },
  { text: "lors", value: 3 },
  { text: "où", value: 3 },
  { text: "envie", value: 3 },
  { text: "revenir", value: 3 },
  { text: "plus", value: 3 },
  { text: "députés", value: 3 },
  { text: "loi", value: 2 },
  { text: "financement", value: 2 },
  { text: "rectificative", value: 2 },
  { text: "sécurité", value: 2 },
  { text: "2023", value: 2 },
  { text: "modifié", value: 2 },
  { text: "coordination", value: 2 },
  { text: "communiqué", value: 2 },
  { text: "nationale", value: 2 },
  { text: "jours", value: 2 },
  { text: "doute", value: 2 },
  { text: "répondront", value: 2 },
  { text: "plusieurs", value: 2 },
  { text: "motions", value: 2 },
  { text: "censure", value: 2 },
  { text: "vote", value: 2 },
  { text: "bien", value: 2 },
  { text: "lieu", value: 2 },
  { text: "doit", value: 2 },
  { text: "mot", value: 2 },
  { text: "plane", value: 2 },
  { text: "voix", value: 2 },
  { text: "près", value: 2 },
  { text: "175", value: 2 },
  { text: "heures", value: 2 },
  { text: "bâti", value: 2 },
  { text: "écarté", value: 2 },
  { text: "fruit", value: 2 },
  { text: "entre", value: 2 },
  { text: "prête", value: 2 },
  { text: "engager", value: 2 },
  { text: "mots", value: 2 },
  { text: "chacun", value: 2 },
  { text: "selon", value: 2 },
  { text: "conscience", value: 2 },
  { text: "majorité", value: 2 },
  { text: "positions", value: 2 },
  { text: "mois", value: 2 },
  { text: "tôt", value: 2 },
  { text: "politique", value: 2 },
  { text: "tout", value: 2 },
  { text: "idées", value: 2 },
  { text: "contre", value: 2 },
  { text: "programme", value: 2 },
  { text: "mesdames", value: 2 },
  { text: "messieurs", value: 2 },
  { text: "retiens", value: 2 },
  { text: "passé", value: 2 },
  { text: "temps", value: 2 },
  { text: "toujours", value: 2 },
  { text: "a", value: 2 },
  { text: "propositions", value: 2 },
  { text: "celles", value: 2 },
  { text: "pensions", value: 2 },
  { text: "parce", value: 2 },
];

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
