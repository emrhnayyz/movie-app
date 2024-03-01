import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {

    const { currentUser } = useContext(AuthContex);
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (currentUser) {
            navigate("/details/"+id)
        } else if (!currentUser) {
          toastWarnNotify("Please log in to see the details of movie!");
        }  
    }

    return (


        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 m-auto mt-[20px] min-h-[500px]"
            onClick={handleClick}
        >
            <div className="h-100 w-80"
                id="container"

            >
                <img
                    loading="lazy"
                    src={poster_path ? IMG_API + poster_path : defaultImage} alt="movie-card" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white ">{title}</h1>
                <h2 className="font-dmserif text-2xl font-bold text-white ">Imdb:{vote_average.toFixed(1)}</h2>
                <span className={`tag `}>{vote_average.toFixed(1)}</span>
                <h2>Overview</h2>
                <p className="movie-card mb-3 text-lg italic text-white opacity-0    transition-opacity duration-300 group-hover:opacity-100 max-h-[200px] ">{overview}</p>

            </div>


        </div>



    );
};

export default MovieCard;
