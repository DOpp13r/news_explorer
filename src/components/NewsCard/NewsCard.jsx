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
    <div className="news__card">
      <div
        className={`news__card-header ${
          pathname === "/News-Explorer"
            ? "news__card-header--main"
            : "news__card-header--saved"
        }`}
      >
        {isLoggedIn ? (
          pathname === "/News-Explorer" ? (
            <button
              className={`card__save-button ${
                isBookmarked ? "card__save-button-select" : ""
              }`}
              onClick={onBookmark}
            ></button>
          ) : (
            <>
              <p className="card__keyword">{item.keyword}</p>
              <div className="card__delete-tab">
                <p className="card__delete-text">Remove from saved</p>
                <button className="card__delete-button" type="button"></button>
              </div>
            </>
          )
        ) : (
          <>
            <div className="card__save-tab">
              <p className="card__signin-text">Sign in to save articles</p>
              <button
                className="card__save-button"
                type="button"
                onClick={handleLoginClick}
              ></button>
            </div>
          </>
        )}
      </div>
      <img
        className="news__card-image"
        src={images[item._id]}
        alt={item.title}
      />
      <div className="news__card-text">
        <p className="news__card-date">{formatDate(item.publishedAt)}</p>
        <h2 className="news__card-title">{item.title}</h2>
        <p className="news__card-body">{item.content}</p>
        <p className="news__card-source">{item.source.name.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default NewsCard;
