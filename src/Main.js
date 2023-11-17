import React, { useState } from "react";

import emptyStar from "./images/star-regular.svg";
import filledStar from "./images/star-solid.svg";
function Main(){
    const [hoveredStar, setHoveredStar] = useState(0);
    

    const handleClick = (e) =>{
        const reviewMsg = document.getElementById("reviewMsg");
        for(let i=1;i<=hoveredStar;i++){
            const currentStar = "star"+ `${i}`;
            console.log(currentStar);
            const starImage = document.getElementById(currentStar);
            console.log(starImage);
            starImage.src = filledStar;
        }

        reviewMsg.innerHTML = "Thank You for your feedback!";
    }
    
    return(

        <div className="MainSection">
            <div className="ratingComponent" id="ratingComp">
                <h1>How many stars would you give to our service?</h1>
                <div className="stars">
                    <div className="1"
                        onMouseEnter={() => setHoveredStar(1)}
                        onMouseLeave={() => setHoveredStar(0)}
                    >
                        <img id="star1"
                        src={emptyStar}
                        style={{ height: hoveredStar >= 1 ? "7.5rem" : "4.5rem" }}
                        onClick={handleClick}
                        alt="Star 1"
                        />
                    </div>
                    <div className="2"
                        onMouseEnter={() => setHoveredStar(2)}
                        onMouseLeave={() => setHoveredStar(0)}
                    >
                        <img id="star2"
                        src={emptyStar}
                        style={{ height: hoveredStar >= 2 ? "7.5rem" : "4.5rem" }}
                        onClick={handleClick}
                        alt="Star 2"
                        />
                    </div>
                    <div className="3" 
                        onMouseEnter={() => setHoveredStar(3)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={handleClick}
                    >
                        <img  id="star3"

                        src={emptyStar}
                        style={{ height: hoveredStar >= 3 ? "7.5rem" : "4.5rem" }}
                        alt="Star 3"
                        />
                    </div>
                    <div className="4"
                       
                        onMouseEnter={() => setHoveredStar(4)}
                        onMouseLeave={() => setHoveredStar(0)}
                    >
                        <img  id="star4"
                        src={emptyStar}
                        style={{ height: hoveredStar >= 4 ? "7.5rem" : "4.5rem" }}
                        onClick={handleClick}
                        alt="Star 4"
                        />
                    </div>
                    <div className="5"
                        
                        onMouseEnter={() => setHoveredStar(5)}
                        onMouseLeave={() => setHoveredStar(0)}
                    >
                        <img id="star5"
                        src={emptyStar}
                        style={{ height: hoveredStar >= 5 ? "7.5rem" : "4.5rem" }}
                        onClick={handleClick}
                        alt="Star 5"
                        />
                    </div>
                </div>
                <p id="reviewMsg"></p>
            </div>
        </div>
    )
}

export default Main;