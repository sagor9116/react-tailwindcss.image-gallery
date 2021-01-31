import { useState, useEffect } from "react";
import uuid from 'react-uuid';
import ImageCard from "./components/ImageCard";
import ImageSearchForm from "./components/ImageSearchForm";

function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [searchTerm,setSearchTerm] = useState('');
  const onTextSearch = (searchTerm) =>{
    return setSearchTerm(searchTerm)
  }
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .then(err =>console.log(err))
  },[searchTerm])

  return (
    <div className="container mx-auto">
    <ImageSearchForm formTextSearch = {onTextSearch}/>
     {
       isLoading ? <h1 className="text-center text-6xl mt-36 text-green-900 mx-auto">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image =>
          <ImageCard key={uuid()} image ={image}/>
        )}    
      </div>
     }
      
    </div>
  );
}

export default App;
