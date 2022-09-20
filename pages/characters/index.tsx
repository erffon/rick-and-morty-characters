import classes from "./characters.module.css";
import Header from "@UI/Header";
import CharacterCard from "@UI/CharacterCard";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { characterResults, Result } from "characterTypes";
import { useRouter } from "next/router";

// SSG characters list fetching
export const getServerSideProps: GetServerSideProps = async (context) => {

   const {page} = context.query;
   

  const res = await fetch("https://rickandmortyapi.com/api/character/?page="+page);
  const { results ,info }: characterResults = await res.json();
  console.log(info);
  

  return {
    props: {
      charactersList: results,
    },
  };
};



//characters page definition
const characters = ({ charactersList}: { charactersList: Result[]}) => {
  

  //Pagination handling
  const {push,query} = useRouter();

  const nextPageHandler = ()=>{
    const currentPage =Number(query.page)
    
    
    push(`characters/?page=${currentPage + 1}`);
  }
  const previousPageHandler = ()=>{
    const currentPage = Number(query.page);
    if(currentPage>=1){
      push(`characters/?page=${currentPage - 1}`)
    }
  }

  //search bar handling
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  //filters handling
  const [azSorting, setAzSorting] = useState("a - z");
  const azHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    
    setAzSorting(event.target.value);
  };

  const [genderSorting,setGenderSorting] = useState("all");
  const genderHandler = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setGenderSorting(event.target.value);
  }
  useEffect(()=>{
  },[genderSorting]);

  return (
    <>
      <Header />

      {/* Search bar */}
      <div className={classes.searchbar}>
        <input
          onChange={searchHandler}
          className={classes.search}
          type="text"
          name="searchbar"
          placeholder="search..."
        />
      </div>

      {/* Filter section*/}
      <div className={classes.filters}>
        <i className="fi fi-rr-filter"></i>
        <label htmlFor="sorting">sort :&nbsp;</label>
        <select onChange={azHandler} id="sorting" className="sorting">
          <option>a - z</option>
          <option>z - a</option>
        </select>

        <label htmlFor="gender">gender :&nbsp;</label>
        <select onChange={genderHandler} id="gender" className="gender">
          <option>all</option>
          <option>Female</option>
          <option>Male</option>
          <option>Genderless</option>
          <option>unknown</option>
        </select>
      </div>

      {/** characters list */}
      <div className={classes.container}>
        {azSorting==="z - a" &&
          charactersList.filter((character)=>{
            if(genderSorting=="all"){
              return character;
            } else if (character.gender.includes(genderSorting)){
              return character;
            }
          })
            .filter((char) => {
              if (searchTerm == "") {
                return char;
              } else if (
                char.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return char;
              }
            })
            .map((item: any) => {
              return (
                <li key={item.id}>
                  {
                    <CharacterCard
                      imageSrc={item.image}
                      charName={item.name.substring(0, 15)}
                      linkHref={`characters/${item.id}`}
                    />
                  }
                </li>
              );
            })
            .sort()}
        {azSorting==="a - z" &&
          charactersList.filter((character)=>{
            if(genderSorting=="all"){
              return character;
            } else if (character.gender.includes(genderSorting)){
              return character;
            }
          })
            .filter((char) => {
              if (searchTerm == "") {
                return char;
              } else if (
                char.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return char;
              }
            })
            .map((item: any) => {
              return (
                <li key={item.id}>
                  {
                    <CharacterCard
                      imageSrc={item.image}
                      charName={item.name.substring(0, 15)}
                      linkHref={`characters/${item.id}`}
                    />
                  }
                </li>
              );
            })
            .reverse()}
      </div>
      <div className={classes.pagination}>
            <button onClick={previousPageHandler}>&#129044; Previous</button>
            <button onClick={nextPageHandler}>Next &#129046;</button>
        </div>
    </>
  );
}
export default characters;
