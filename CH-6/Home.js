import i1 from "./i1.jpeg"
import About from "./About.js"
function Home() {
    return (
      <div>
        <img src={i1}alt="image" style={{borderRadius:"50px",border:"5px solid black",padding:"10px 5px 10px 0px",margin:"15px 15px",height:"1090px",width:"1040px"}}/>
        <h1>Welcome Home</h1>
        <button>
            <a href="/About">About</a>
        </button>
      </div>
    );
}
export default Home