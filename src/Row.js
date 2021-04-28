import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";


//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=71b33695d8b96242669cc582c4b38cd6&language=en-US


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("");
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);




    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
const  handleClick = async (movie) => {
    if(trailerUrl) {
        settrailerUrl("");
    }
    else{
        //console.log(movie?.id);
        const streamUrl = "https://api.themoviedb.org/3/movie/"+movie?.id+"/videos?api_key=71b33695d8b96242669cc582c4b38cd6&language=en-US";
        
        await axios.get(streamUrl).then(function(response){
                settrailerUrl(response?.data.results[0].key);
            }
            
            
        ).catch(err => {
            console.log(err);
        });
    }
}

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {   
                    movies.map(movie => (
                        <img key={movie.id} onClick={() => handleClick(movie)} className="row__poster" src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title}></img>
                    ))
                }

            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 
        </div>
    )
}

export default Row
