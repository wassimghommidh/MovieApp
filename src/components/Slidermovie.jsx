// import React, { Component } from "react";
// import Slider from "react-slick";
// import "./Slidermovie.css";
// import MO1 from "../photos/MO1.jpg";
// import MO2 from "../photos/MO2.jpg";
// export default class Slidermovie extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div className="movieslider">
//         <h2> What to watch</h2>
//         <Slider {...settings}>
//           <div>
//             <img className="movies" src={MO1} alt="horse" width={1200} />
//           </div>
//           <div>
//             <img className="movies" src={MO2} alt="horse"  width={1200} />
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import Slider from "react-slick";
import "./Slidermovie.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import MO1 from "../photos/MO1.jpg";
import MO2 from "../photos/MO2.jpg";

import "./Test.scss";

export default function Slidermovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/MovieHome/getAllMovies").then((res) => {
      console.log(res.data, "hello");
      setUserList(res.data);
    });
  }, []);

  return (
    <>
      <div className="movieslider">
        <h2> What to watch</h2>
        <Slider {...settings}>
          {userList?.map((x) => (
            <div>
              <img className="movies" src={x.image} alt="horse" width={800} />
              {/* <li>{x.movie_name}</li> */}
              <div class="card__info">
                <h1 class="card__title">{x.movie_name}</h1>

                <p class="card__slug">{x.description}</p>

                <button class="card__btn" value="Watch trailer">
                  Watch trailer
                </button>

                <div class="card__rating">8.2</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
