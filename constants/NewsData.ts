import { BoxingFighting, BoxingShouting, BoxingSitting, DSD, Reactions, TitleImage2 } from "./Images";

// newsData.js
export const news = [
  {
    id: "1",
    context: [
      {
        id: "1",
        contextTitle: "Olympic Boxing Controversy, The fight that sparked a debate!",
        contextDescription: "Algerian boxer Imane Khelif won her first match at the Paris 2024 Olympics after Italian opponent Angela Carini withdrew due to severe nose pain. Khelif’s participation sparked controversy due to her previous disqualification over gender eligibility, raising concerns about fairness in women's sports. The situation has drawn mixed reactions.",
        contextImage: TitleImage2
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
        historyTitle: "Peak into the Past",
        historyDescription: "",
        historyItems: [
          {
            id: "1",
            infoTitle: "Silver for Imane Khelif",
            infoDescription: "Imane Khelif won a silver medal at the 2022 IBA Women's World Boxing Championships",
          },
          {
            id: "2",
            infoTitle: "Disqualification for Khelif",
            infoDescription: "Khelif and Lin Yu-ting were disqualified from 2023 IBA World Boxing Championships for failing gender eligibility tests before gold medal match.",
          },
          {
            id: "3",
            infoTitle: "Allowed to compete",
            infoDescription: "Khelif and Lin Yu-ting are allowed to compete at the 2024 Paris Olympics after being cleared by the IOC task force running the boxing tournament",
          },
        ],
        tags: [
          {
            tagId: 1,
            tagName: "Imane Khelif",
            tagLink: "/someUrl"
          },
          { 
            tagId: 2,
            tagName: "Lin Yu-ting",
            tagLink: "/someUrl"
          },
          {
            tagId: 3,
            tagName: "IBA World Boxing Championship",
            tagLink: "/someUrl"
          },
          {
            tagId: 4,
            tagName: "2024 Paris Olympics",
            tagLink: "/someUrl"
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
        historyTitle: "Peak into the Past",
        historyDescription: "",
        historyItems: [
          {
            id: "1",
            infoTitle: "Silver for Imane Khelif",
            infoDescription: "Imane Khelif won a silver medal at the 2022 IBA Women's World Boxing Championships",
          },
          {
            id: "2",
            infoTitle: "Disqualification for Khelif",
            infoDescription: "Khelif and Lin Yu-ting were disqualified from 2023 IBA World Boxing Championships for failing gender eligibility tests before gold medal match.",
          },
          {
            id: "3",
            infoTitle: "Allowed to compete",
            infoDescription: "Khelif and Lin Yu-ting are allowed to compete at the 2024 Paris Olympics after being cleared by the IOC task force running the boxing tournament",
          },
        ],
        historyImage: "",
      },
    ],
  },
];

module.exports = { news };
