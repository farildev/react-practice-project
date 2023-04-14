import {useState , useEffect} from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import LoadingScreen from "./components/LoadingScreen"
import "./assets/styles/style.css"

//https://fakestoreapi.com/products
function App() {
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => { 
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
  },[])
  return (
    <>
      <Header />
      <div className="card__container">
      {
        data.map((index, key)=> (
          <Card key={key} cardKey={key} price={index.price} title={index.title} description={index.description} image={index.image} />
        ))
      }
      </div>
      {
        loading && (<LoadingScreen />)
      }
    </>
  );
}

export default App;
