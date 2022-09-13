import Link from "next/link";

const Home = ()=>{
  return(
    <>
    {/* Hero section */}
      <div>
        <img src="" />
        <h1>Rick and Morty APIs</h1>
      </div>
    {/* Main Body */}
      <div>
        <h2>Hello Guest 👋</h2>
        <p>choose and option:</p>
      </div>
    {/* Buttons */}
      <div>
        <Link href="/characters">
        <button>characters</button>
        </Link>
        <Link href="/locations">
        <button>locations</button>
        </Link>
        
      </div>
    </>
  );
}
export default Home;