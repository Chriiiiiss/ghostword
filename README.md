# Speech Analysis - Ghost Word

This project is a web application that allows you to analyze a political speech and render the analysis visually. It was developed as part of a school project.

## Getting Started

To get started with the project, follow these steps:

Clone the repository to your local machine using the following command:

```zsh
git clone https://github.com/<your-username>/speech-analysis.git
```

Navigate to the project directory:

```zsh
cd speech-analysis
```

Install the project dependencies:

```zsh
pnpm install
```

Start the development server:

```zsh
pnpm start
```

The application should now be running at http://localhost:3000.

## Usage

The application consists of three sections:

1. Home: This section displays the raw text of the speech, along with a legend that shows the background color of each word and its importance score. You can also select from five different sets of data to analyze.

2. Word Cloud: This section displays a word cloud that shows the most frequently used words in the speech. The size of each word corresponds to its importance score.

3. Bar Chart: This section displays a bar chart that shows the number of times each media outlet mentioned a particular word from the speech.

## Technologies Used

The project was developed using the following technologies:

React
Tailwind CSS
D3.js
WordCloud2.js
Vite.js

## Credits

The project was developed by me as part of a school project. The raw text of the speech was taken from [vie-publique](https://www.vie-publique.fr/discours/288955-elisabeth-borne-16032023-engagement-reponsabilite-reforme-des-retraites).
