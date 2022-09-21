import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserFavourit } from "Slices/slice";
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
  const dispatch = useDispatch();
  const likeHandler = () => {
    dispatch(setUserFavourit(charName));
  };

  return (
    <div className={classes.container}>
      <img src={imageSrc} />
      <div className={classes.detail}>
        <Link href={linkHref}>
          <a className={classes.links}>{charName}</a>
        </Link>
        <i onClick={likeHandler} className="fi fi-rr-social-network" />
      </div>
    </div>
  );
};
export default CharacterCard;
