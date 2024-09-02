import { BoxingFighting, BoxingShouting, BoxingSitting, DSD, Reactions, TitleImage } from "./Images";

// newsData.js
export const news = [
  {
    id: "1",
    context: [
      {
        id: "1",
        contextTitle: "Olympic Boxing Controversy",
        contextDescription: "The fight that sparked a debate!",
        contextImage: TitleImage
      },
      {
        id: "2",
        contextTitle: "What Happened?",
        contextDescription: "In a surprising turn of events at the Paris 2024 Olympics, Algerian boxer Imane Khelif won her first match against Italian boxer Angela Carini in just 46 seconds. Carini withdrew from the fight, leaving many spectators confused and concerned.",
        contextImage: BoxingSitting,
      },
      {
        id: "3",
        contextTitle: "Why the Withdrawal",
        contextDescription: "Carini cited severe pain in her nose as the reason for her sudden exit. She expressed her heartbreak, stating, 'I didn't want to, I couldn't finish the match.' Despite the quick end to the fight, she emphasized that she had no issues with Khelif's participation.",
        contextImage: BoxingFighting,
      },
      {
        id: "4",
        contextTitle: "The controversy",
        contextDescription: "Khelif's participation has ignited a heated debate. She was previously disqualified from the 2023 World Championships for failing a gender eligibility test. Critics argue that allowing athletes with XY chromosomes (typically associated with male biology) to compete in women's events creates an uneven playing field.",
        contextImage: BoxingShouting,
      },
      {
        id: "5",
        contextTitle: "What are DSDs?",
        contextDescription: "DSD stands for Differences in Sexual Development, a term used for conditions where individuals have variations in their chromosomes, hormones, or reproductive organs. Some athletes with DSDs may have higher testosterone levels, which can impact competition in sports.",
        contextImage: DSD,
      },
      {
        id: "6",
        contextTitle: "Reactions",
        contextDescription: "The situation has drawn mixed reactions. Some prominent athletes and sports figures have criticized the International Olympic Committee (IOC) for its policies, while others support Khelif's right to compete. Social media has seen a surge of support for Carini, with the hashtag #IStandWithAngelaCarini trending.",
        contextImage: Reactions,
      },
    ],
    history: [
      {
        id: 1,
        historyTitle: "Some title for first left screen",
        historyDescription: "Some history descriptio",
        historyItems: [],
        historyImage: "some-image-url",
      },
      {
        id: "2",
        historyTitle: "Peak into the Past",
        historyDescription: "",
        historyItems: [
          {
            id: "1",
            infoTitle: "1929 Market Crash",
            infoDescription: "A comparison with the 1929 market crash.",
            tags: [
              {
                tagTitle: "Finance",
                tagLink: "finance-history-1929.html",
              },
            ],
          },
          {
            id: "2",
            infoTitle: "2008 Financial Crisis",
            infoDescription: "Lessons learned from the 2008 financial crisis.",
            tags: [
              {
                tagTitle: "Economics",
                tagLink: "economics-2008.html",
              },
            ],
          },
          {
            id: "3",
            infoTitle: "2020 Pandemic Impact",
            infoDescription: "The impact of the COVID-19 pandemic on the market.",
            tags: [
              {
                tagTitle: "Global Economy",
                tagLink: "global-economy-2020.html",
              },
            ],
          },
        ],
        historyImage: "",
      },
    ],
  },
  {
    id: "2",
    context: [
      {
        id: "1",
        contextTitle: "Olympic Boxing Controversy",
        contextDescription: "The fight that sparked a debate!",
        contextImage: "market-overview.png",
      },
      {
        id: "2",
        contextTitle: "What happened?",
        contextDescription: "In a surprising turn of events at the Paris 2024 Olympics, Algerian boxer Imane Khelif won her first match against Italian boxer Angela Carini in just 46 seconds. Carini withdrew from the fight, leaving many spectators confused and concerned.",
        contextImage: "market-overview.png",
      },
      {
        id: "3",
        contextTitle: "Why the Withdrawal",
        contextDescription: "Carini cited severe pain in her nose as the reason for her sudden exit. She expressed her heartbreak, stating, 'I didn't want to, I couldn't finish the match.' Despite the quick end to the fight, she emphasized that she had no issues with Khelif's participation.",
        contextImage: "investor-reactions.png",
      },
      {
        id: "4",
        contextTitle: "The controversy",
        contextDescription: "Khelif's participation has ignited a heated debate. She was previously disqualified from the 2023 World Championships for failing a gender eligibility test. Critics argue that allowing athletes with XY chromosomes (typically associated with male biology) to compete in women's events creates an uneven playing field.",
        contextImage: "government-response.png",
      },
      {
        id: "5",
        contextTitle: "What are DSDs?",
        contextDescription: "DSD stands for Differences in Sexual Development, a term used for conditions where individuals have variations in their chromosomes, hormones, or reproductive organs. Some athletes with DSDs may have higher testosterone levels, which can impact competition in sports.",
        contextImage: "future-predictions.png",
      },
      {
        id: "6",
        contextTitle: "Reactions",
        contextDescription: "The situation has drawn mixed reactions. Some prominent athletes and sports figures have criticized the International Olympic Committee (IOC) for its policies, while others support Khelif's right to compete. Social media has seen a surge of support for Carini, with the hashtag #IStandWithAngelaCarini trending.",
        contextImage: "future-predictions.png",
      },
    ],
    history: [
      {
        id: 1,
        historyTitle: "Some title for first left screen",
        historyDescription: "Some history descriptio",
        historyItems: [],
        historyImage: "some-image-url",
      },
      {
        id: "2",
        historyTitle: "Peak into the Past",
        historyDescription: "",
        historyItems: [
          {
            id: "1",
            infoTitle: "1929 Market Crash",
            infoDescription: "A comparison with the 1929 market crash.",
            tags: [
              {
                tagTitle: "Finance",
                tagLink: "finance-history-1929.html",
              },
            ],
          },
          {
            id: "2",
            infoTitle: "2008 Financial Crisis",
            infoDescription: "Lessons learned from the 2008 financial crisis.",
            tags: [
              {
                tagTitle: "Economics",
                tagLink: "economics-2008.html",
              },
            ],
          },
          {
            id: "3",
            infoTitle: "2020 Pandemic Impact",
            infoDescription: "The impact of the COVID-19 pandemic on the market.",
            tags: [
              {
                tagTitle: "Global Economy",
                tagLink: "global-economy-2020.html",
              },
            ],
          },
        ],
        historyImage: "",
      },
    ],
  },
];

module.exports = { news };
