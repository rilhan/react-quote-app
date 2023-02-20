import React, {useState, useRef, useEffect} from "react";
import Card from "./Card";

function App() {

  const [quoteArr,setQuoteArr] = useState([]);
  const scrollRef = useRef(null);
  
  useEffect(() => {
    scrollRef.current.scrollIntoView({behavior: "smooth"});
  }, [quoteArr])

  function btnClick() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const author = data.author;
            const quote = data.content;
            
            const maxId = () => {
              if (quoteArr.length === 0) { 
                return 0;
              } else {
                return quoteArr[quoteArr.length-1].id+1;
              };
            };

            setQuoteArr([
              ...quoteArr,
              {id: maxId(), author: author, quote: quote }
            ]);             
        });    
  };

  return (
    <div>
      <header>
        <h1>Get Random Quote!</h1>
        <button onClick={btnClick}><i className="fa-solid fa-plus"></i></button>
      </header>
      <main>
        {quoteArr.map(item => (
          <Card 
            key={item.id} 
            author={item.author} 
            quote={item.quote}              
          />
        ))}
        <div ref={scrollRef}></div>
      </main>    
    </div>
  );
};

export default App;