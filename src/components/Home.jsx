import React from "react";
import Header from "./Header";
import Quotes from "./Quotes";

function Home() {
  const quoteArray = [
    {
      quote:
        '"Never depend on a single income. Make an investment to create a second source."',
      author: "Warren Buffet",
      imageLink:
        "https://imageio.forbes.com/specials-images/dam/imageserve/9e2c3b55d3634cba9f2e2b21787e7489/0x0.jpg?format=jpg&width=1200"
    },
    {
      quote:
        '"Courage taught me no matter how bad a crisis gets... any sound investment will eventually pay off."',
      author: "Carlos Slim Helu",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Carlos_Slim_%2845680472234%29_%28cropped%29.jpg/1200px-Carlos_Slim_%2845680472234%29_%28cropped%29.jpg"
    }
  ];
  return (
    <div>
      <Header />
      <img id="stock-img" src={require("../../orbital-investment.jpeg")} />
      <div className="quote-section">
        {quoteArray.map((quoteItem) => (
          <Quotes
            quote={quoteItem.quote}
            author={quoteItem.author}
            imageLink={quoteItem.imageLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
