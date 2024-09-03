import { DHONI1, DHONI2, NIFTY1, NIFTY2, TitleImage, UPSC1, UPSC2 } from "./Images";

export const feed = [
    {
        id: 1,
        feedTitle: "upsc",
        feedItems: [
            {
                id: 1,
                itemImage: UPSC1,
                itemText: "Supreme Court Orders UPSC to Retest Civil Services Aspirant Rejected for Obesity in 2014"
            },
            {
                id: 2,
                itemImage: UPSC2,
                itemText: "UPSC CAPF 2024 Exam Analysis: Unpacking the Challenges and Triumphs of Aspirants"
            }
        ]

    },
    {
        id: 2,
        feedTitle: "ms dhoni",
        feedItems: [
            {
                id: 1,
                itemImage: DHONI1,
                itemText: "MS Dhoni Refuses to Spoon-Feed CSK Bowlers, Prepares Them for His Retirement"
            },
            {
                id: 2,
                itemImage: DHONI2,
                itemText: "MS Dhoni Reunites with 2007 T20 World Cup Final Hero Joginder Sharma After 12 Years"
            }
        ]

    },
    {
        id: 3,
        feedTitle: "nifty",
        feedItems: [
            {
                id: 1,
                itemImage: NIFTY1,
                itemText: "Big Layoffs at Reliance 42,000 Jobs Lost!"
            },
            {
                id: 2,
                itemImage: NIFTY2,
                itemText: "Heartbreak in Paris: Vinesh Phogat's Olympic Dream Dashed"
            }
        ]

    }
]


module.exports = { feed };