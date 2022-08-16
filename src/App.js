import React,{useState, useEffect} from "react";
import CardList from "./Components/CardList";
import SearchBar from './Components/SearchBar/SearchBar'
import Title from "./Components/Title";
import Scroll from "./Components/Scroll";
import Footer from "./Components/Footer";

const App = () => {
    
    const [robots, setRobots] = useState([]);
    const [input, setInput] = useState('');
   
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setRobots(res))
    },[])

    const promjena = (event) =>{
        setInput(event.target.value);
    }
    
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(input.toLowerCase())
    })
    

    return (robots.length < 10)? <div style={{height:'100%', width:'60%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'100px'}}>LOADINGGG</div> :
      (  <div style={{backgroundImage: `url("https://w0.peakpx.com/wallpaper/182/163/HD-wallpaper-k-vrc-xbot-4000-love-death-robots.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
            <Title />
            <SearchBar promjena={promjena}/>
            
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll >
            <Footer />
        </div>   
    )
}

export default App;