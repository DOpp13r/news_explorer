export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const defaultNewsCards = [
  {
    _id: 0,
    source: {
      name: "treehugger",
    },

    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    urlToImage: ".",
    publishedAt: "November 4, 2020",
    content: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find check what happens if the text is too long`,
    isLiked: false,
    keyword: "Nature",
  },
  {
    _id: 1,
    source: {
      name: "national geographic",
    },

    title: "Nature makes you better",
    urlToImage: ".",
    publishedAt: "February 19, 2019",
    content:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    isLiked: false,
    keyword: "Nature",
  },
  {
    _id: 2,
    source: {
      name: "national geographic",
    },

    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    urlToImage: ".",
    publishedAt: "October 19, 2020",
    content: `Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...`,
    isLiked: false,
    keyword: "Yellowstone",
  },
  {
    _id: 3,
    source: {
      name: "National parks traveler",
    },

    title: "Grand Teton Renews Historic Crest Trail",
    urlToImage: ".",
    publishedAt: "November 4, 2020",
    content:
      "The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
    isLiked: false,
    keyword: "Parks",
  },
  {
    _id: 4,
    source: {
      name: "treehugger",
    },

    title: "Scientists Don't Know Why Polaris Is So Weird ",
    urlToImage: ".",
    publishedAt: "March 16, 2020",
    content:
      "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ",
    isLiked: false,
    keyword: "Photography",
  },
];

export const APIKey = "9bd0d6ad77634a1790d32f6269c05840";
