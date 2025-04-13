import "./NewsCard.css";
import { useLocation } from "react-router-dom";

import dogImage from "../../assets/dog.png";
import landImage from "../../assets/land.png";
import mooseImage from "../../assets/moose.png";
import mountainImage from "../../assets/mountain.png";
import skyImage from "../../assets/sky.png";

const NewsCard = ({
  handleLoginClick,
  item,
  isLoggedIn,
  isBookmarked,
  onBookmark,
}) => {
  console.log("NewsCard props:", item);

  const { pathname } = useLocation();

  const images = [dogImage, landImage, mooseImage, mountainImage, skyImage];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <li className="news__card">
      <div
        className={`news__card-header ${
          pathname === "/"
            ? "news__card-header--main"
            : "news__card-header--saved"
        }`}
      >
        {isLoggedIn ? (
          pathname === "/" ? (
            <button
              className={`news__save-button ${
                isBookmarked ? "news__save-button--active" : ""
              }`}
              onClick={onBookmark}
            ></button>
          ) : (
            <>
              <p className="news__keyword">{item.keyword}</p>
              <div className="news__delete-tab">
                <p className="news__delete-text">Remove from saved</p>
                <button
                  className="news__delete-button"
                  type="button"
                  onClick={onBookmark}
                ></button>
              </div>
            </>
          )
        ) : (
          <>
            <div className="news__save-tab">
              <p className="news__signin-text">Sign in to save articles</p>
              <button
                className="news__save-button"
                type="button"
                onClick={handleLoginClick}
              ></button>
            </div>
          </>
        )}
      </div>
      <img
        className="news__card-image"
        src={item.imageUrl || item.urlToImage || images[0]}
        alt={item.title}
      />
      <div className="news__card-text">
        <p className="news__card-date">
          {formatDate(item.publishedAt || item.date)}
        </p>
        <h2 className="news__card-title">{item.title}</h2>
        <p className="news__card-body">{item.content || item.description}</p>
        <p className="news__card-source">
          {(typeof item.source === "string"
            ? item.source
            : item.source?.name
          )?.toUpperCase()}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;
