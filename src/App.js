import {useState , useEffect} from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import LoadingScreen from "./components/LoadingScreen"
import Modal from "./components/Modal"
import "./assets/styles/style.css"

//https://fakestoreapi.com/products
function App() {
  const [modal , setModal] = useState(false);
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [element , setElement] = useState({});

  
  const closeModal = () => {
    setModal(false)
  }

  const readMore = (id) => {
    let single = data.find(e => e.id === id)
    setModal(true)
    setElement(single)
  }

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
          <Card readMore={readMore} key={key} cardKey={key} price={index.price} title={index.title} description={index.description} image={index.image} />
        ))
      }
      </div>
      {
        loading && (<LoadingScreen />)
      }
      {
        modal ? (<Modal closeModal ={closeModal} image={element.image} description={element.description} price={element.value} title={element.title}  />) : "" 
      }
    </>
  );
}

export default App;
