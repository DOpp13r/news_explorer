import { newsApiBaseUrl } from "../utils/constants";
import { APIKey } from "../utils/constants";

function getItems(query) {
  return new Promise((resolve, reject) => {
    const currentDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(currentDate.getDate() - 7);

    const from = fromDate.toISOString().split("T")[0];
    const to = currentDate.toISOString().split("T")[0];
    const APIurl = `${newsApiBaseUrl}?q=${query}&from=${from}&to=${to}&apiKey=${APIKey}&pageSize=100`;

    fetch(APIurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
          );
        }
        return response.json();
      })
      .then((data) => {
        const articles = data.articles.map((article) => ({
          source: article.source?.name || "Unknown Source",
          _id: article.url,
          title: article.title,
          date: article.publishedAt || "Unknown Date",
          description: article.description || "Unknown Description",
          imageUrl: article.urlToImage,
          url: article.url,
        }));

        resolve(articles);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getArticlesByUrls(urls) {
  return Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response failed for URL: ${url}`);
          }
          return response.json();
        })
        .then((data) => ({
          source: data.source?.name || "Unknown Source",
          _id: url,
          title: data.title,
          date: data.publishedAt || "Unknown Date",
          description: data.description || "Unknown Description",
          imageUrl: data.urlToImage,
          url: data.url,
        }))
        .catch((err) => {
          console.error(err);
          return null;
        })
    )
  ).then((articles) => articles.filter((article) => article !== null));
}

function saveArticle(article, searchKeywords) {
  return new Promise((resolve, reject) => {
    const sourceName =
      typeof article.source === "string"
        ? article.source
        : article.source.name || "Unknown Source";

    if (
      !article.url ||
      !article.title ||
      !article.date ||
      !article.description ||
      !article.imageUrl
    ) {
      console.error("Error: Article data is incomplete:", article);
      reject(new Error("Error: Article data is incomplete."));
    } else {
      console.log("Saving article:", article);
      resolve({
        source: sourceName,
        _id: article.url,
        title: article.title,
        date: article.publishedAt || article.date,
        description: article.description || "Unknown Description",
        imageUrl: article.imageUrl,
        url: article.url,
        keywords: searchKeywords || [],
      });
    }
  });
}

export { getItems, getArticlesByUrls, saveArticle };
