import React from "react";
import Header from "./Header";
import FunctionBox from "./FunctionBox";

function About() {
  const functionArray = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/1246/1246894.png",
      textTitle: "Learn Investment Knowledge",
      text:
        "Our app gives users an introduction to investment through interactive lessons that will guide you through your investment journey starting from the most basic concepts"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2080/2080878.png",
      textTitle: "Test your knowledge",
      text: "Test your own knowledge that you learned through a quiz"
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/138/138339.png",
      textTitle: "Assess your portfolio",
      text:
        "Input your portfolio details into our assessor bot to gain feedback and suggestions for portfolio rebalancing based on up-to-date market data"
    }
  ];

  return (
    <div>
      <Header />
      <h1 id="about-title">A One-Stop Investment Tool Guide For Beginners</h1>
      <div className="function-area">
        {functionArray.map((functionItem) => (
          <FunctionBox
            image={functionItem.image}
            textTitle={functionItem.textTitle}
            text={functionItem.text}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
