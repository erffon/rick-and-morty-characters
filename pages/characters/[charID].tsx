import { Result } from "characterTypes";
import { GetServerSideProps } from "next";
import classes from "./characters.module.css";

const CharacterID = ({CHARACTER}:{CHARACTER:Result})=>{
    return(
        <>
            <div className={classes["singles-container"]}>
                <img className={classes["character-image"]} src={CHARACTER.image}/>
                <div className={classes["initial-info"]}>
                    <h2 className={classes["character-name"]}>{CHARACTER.name}</h2>
                    <button className={classes["character-status"]}><i className="fi fi-rr-leaf"></i> &nbsp;{CHARACTER.status}</button>
                    <h3 className={classes["episodes-header"]}>Episode that you can see {CHARACTER.name} :</h3>
                    {CHARACTER.episode.slice(0,10).map((item,index)=>{
                        return (
                            <li className={classes['episodes-style']} key={index}>{item}</li>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
    
export default CharacterID;

export const getServerSideProps: GetServerSideProps = async(context)=>{
    const charId = context.params?.charID;
    
    
    //data fetching
    const res = await fetch("https://rickandmortyapi.com/api/character/"+charId);
    const characters:Result = await res.json();
    
    
    return {
        props:{
            CHARACTER:characters
        }
    }
}