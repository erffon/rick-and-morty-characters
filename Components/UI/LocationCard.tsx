import classes from "./LocationCard.module.css";

const LocationCard  = ({location}:{location:string})=>{
    return(
        <div className={classes.container}>
            <i className="fi fi-rr-marker"></i>
            <p>{location}</p>
        </div>
    );
}
export default LocationCard;