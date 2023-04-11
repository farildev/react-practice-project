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
    setLoading(false)
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setData(data))
  },[])
  return (
    <>
      <Header />
      {
        data.map((index)=> (
          <Card key={index.id} title={index.title} description={index.description} image={index.image} />
        ))
      }

      {
        loading && <LoadingScreen />
      }

    </>
  );
}

export default App;
