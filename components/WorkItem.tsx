import { Component, useState } from "react";
import { BackgroundImage } from "./BackgroundImage";
import classnames from "classnames";
import Markdown from "react-markdown";

export function WorkItem({ item }: any) {
  const [expanded, setExpanded] = useState(false);

  const onLogoClicked = () => {
    setExpanded(!expanded);
  };

  const title = item.fields.title;
  const excerpt = item.fields.excerpt;
  const backgroundImage = item.fields.featuredImage;
  const colour = item.fields.color;
  const logo = item.fields.logo;
  const logoWidth = item.fields.logoWidth;
  const link = item.fields.link;
  // const itemClassnames = classnames({
  //   "work-feed__item": true,
  //   "work-feed__item--open": open,
  // });

  return (
    <article style={{ backgroundColor: `#${colour}`, position: "relative" }}>
      <BackgroundImage image={backgroundImage} movedUp={expanded} />
      {/* <div className="work-feed__details">
        <div className="work-feed__logo-container" onClick={this.onLogoClicked}>
          {logo ? (
            <div>
              <img
                className="work-feed__logo"
                src={logo.fields.file.url}
                alt={title}
                style={{ width: `${logoWidth}px` }}
              />
              <div className={toggleClassnames}>
                <span className="work-feed__indicator-copy">Toggle info</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="work-feed__info">
        <h1 className="work-feed__title">{title}</h1>
        <div className="work-feed__excerpt">
          <Markdown source={excerpt} />
        </div>
        {link ? (
          <a className="work-feed__link" href={link} target="_blank">
            <span className="work-feed__link-copy">Visit site</span>
            <img
              className="work-feed__link-icon"
              src={`${config.paths.static}/img/ui/external-link.svg`}
            />
          </a>
        ) : null}
      </div> */}
    </article>
  );
}
