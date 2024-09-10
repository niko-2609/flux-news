import { AIApplications, AIBreakthrough, AIEthics, AIFeatures, BoxingFighting, BoxingShouting, BoxingSitting, ClimateChallenges, ClimateCommitments, ClimateResponse, ClimateSummit, DSD, Reactions, TAG1, TAG2, TAG3, TitleImage2 } from "./Images";

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
            tagLink: "imane",
            tagData: [{
              id: 1,
              contentTitle: "Imane Khelif Files Harassment Complaint Against X",
              contentDesciption: "Algerian boxer Imane Khelif has filed a legal complaint against X, alleging harassment and a 'misogynistic, racist and sexist campaign' following her Olympic gold medal win in Paris",
              contentImage: TAG1
            },
            {
              id: 2,
              contentTitle: "Imane Khelif Wins Gold Medal",
              contentDesciption: "Imane Khelif secured the gold medal in the women's welterweight division at the Paris Olympics despite being at the center of a gender eligibility controversy",
              contentImage: TAG2
            },
            {
              id: 3,
              contentTitle: "'I am a Woman': Imane Khelif Responds",
              contentDesciption: 'Algerian boxer Imane Khelif, after winning gold at the Paris Olympics, firmly declared, "I am a woman like any other," addressing gender scrutiny. She emphasized her identity and resilience against online attacks, asserting her rightful place in the sport.',
              contentImage: TAG3
            }
            ]
          },
          {
            tagId: 2,
            tagName: "Lin Yu-ting",
            tagLink: "lin"
          },
          {
            tagId: 3,
            tagName: "IBA World Boxing Championship",
            tagLink: "worldboxingchamp"
          },
          {
            tagId: 4,
            tagName: "2024 Paris Olympics",
            tagLink: "olympics"
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
        contextTitle: "AI Breakthrough: New Model Achieves Human-Level Performance in Complex Tasks",
        contextDescription: "A groundbreaking AI model has demonstrated human-level performance across a wide range of complex tasks, from language understanding to problem-solving. This development marks a significant milestone in the field of artificial intelligence.",
        contextImage: AIBreakthrough
      },
      {
        id: "2",
        contextTitle: "Key Features of the New AI Model",
        contextDescription: "The new AI model utilizes advanced neural network architectures and novel training techniques to achieve its impressive performance. It can process and integrate information from multiple domains, allowing for more nuanced and context-aware responses.",
        contextImage: AIFeatures
      },
      {
        id: "3",
        contextTitle: "Potential Applications",
        contextDescription: "Experts suggest that this AI breakthrough could have far-reaching implications across various industries, including healthcare, education, and scientific research. The model's ability to understand and generate human-like responses opens up new possibilities for human-AI collaboration.",
        contextImage: AIApplications
      },
      {
        id: "4",
        contextTitle: "Ethical Considerations",
        contextDescription: "As with any major AI advancement, this breakthrough raises important ethical questions. Researchers and policymakers are calling for careful consideration of the potential impacts on privacy, job markets, and decision-making processes.",
        contextImage: AIEthics
      }
    ],
    history: [
      {
        id: 1,
        historyTitle: "AI Milestones",
        historyDescription: "A look at key developments in AI",
        historyItems: [
          {
            id: "1",
            infoTitle: "Deep Blue Defeats Kasparov",
            infoDescription: "In 1997, IBM's Deep Blue became the first computer to defeat a world chess champion in a match."
          },
          {
            id: "2",
            infoTitle: "Watson Wins Jeopardy!",
            infoDescription: "IBM's Watson AI system won the quiz show Jeopardy! in 2011, showcasing advanced natural language processing capabilities."
          },
          {
            id: "3",
            infoTitle: "AlphaGo Beats Go Champion",
            infoDescription: "In 2016, Google's AlphaGo defeated world champion Lee Sedol in the complex game of Go, a milestone in AI strategy and decision-making."
          }
        ],
        historyImage: ""
      }
    ]
  }, {
    id: "3",
    context: [
      {
        id: "1",
        contextTitle: "Global Climate Summit Concludes with Ambitious Targets",
        contextDescription: "The latest Global Climate Summit has concluded with participating nations agreeing to more ambitious targets for reducing greenhouse gas emissions. The new agreement aims to limit global temperature rise to 1.5°C above pre-industrial levels.",
        contextImage: ClimateSummit
      },
      {
        id: "2",
        contextTitle: "Key Commitments",
        contextDescription: "Major commitments include accelerating the transition to renewable energy, phasing out coal power, and increasing funding for climate adaptation in developing countries. Several nations also pledged to achieve net-zero emissions by 2050.",
        contextImage: ClimateCommitments
      },
      {
        id: "3",
        contextTitle: "Challenges Ahead",
        contextDescription: "Despite the ambitious targets, experts warn that significant challenges remain. These include the need for rapid technological advancements, overcoming political obstacles, and ensuring a just transition for communities dependent on fossil fuel industries.",
        contextImage: ClimateChallenges
      },
      {
        id: "4",
        contextTitle: "Public Response",
        contextDescription: "The summit's outcomes have been met with mixed reactions. While many environmental groups praise the increased ambition, some activists argue that the commitments still fall short of what's needed to avert a climate crisis.",
        contextImage: ClimateResponse
      }
    ],
    history: [
      {
        id: 1,
        historyTitle: "Climate Accord Evolution",
        historyDescription: "Key moments in international climate agreements",
        historyItems: [
          {
            id: "1",
            infoTitle: "1992 Rio Earth Summit",
            infoDescription: "The United Nations Framework Convention on Climate Change (UNFCCC) was adopted, setting the stage for global climate negotiations."
          },
          {
            id: "2",
            infoTitle: "1997 Kyoto Protocol",
            infoDescription: "The Kyoto Protocol set binding emission reduction targets for developed countries, marking the first time such commitments were made internationally."
          },
          {
            id: "3",
            infoTitle: "2015 Paris Agreement",
            infoDescription: "The landmark Paris Agreement was adopted, with countries pledging to limit global warming to well below 2°C above pre-industrial levels."
          }
        ],
        historyImage: ""
      }
    ]
  }
];

module.exports = { news };