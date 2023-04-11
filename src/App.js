import {useState , useEffect} from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import "./assets/styles/style.css"

//https://fakestoreapi.com/products
function App() {

  const [data , setData] = useState([]);

  useEffect(() => { 
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setData(data))
  },[])
  return (
    <>
      <Header />
      {
        data.map((index,key)=> (
          <Card key={key} title={index.title} description={index.description} image={index.image} />
        ))
      }

    </>
  );
}

export default App;
