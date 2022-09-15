import Link from "next/link";

import classes from "./CharacterCard.module.css";

const CharacterCard = ({
  imageSrc,
  charName,
  linkHref,
}: {
  imageSrc: string;
  charName: string;
  linkHref: string;
}) => {
  return (
    <div className={classes.container}>
      <img src={imageSrc} />
      <div className={classes.detail}>
        <Link href={linkHref}>
          <a className={classes.links}>{charName}</a>
        </Link>
        <i className="fi fi-rr-social-network" />
      </div>
    </div>
  );
};
export default CharacterCard;
