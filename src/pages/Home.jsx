import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "john wick 2", release_date: "2023" },
    { id: 2, title: "race", release_date: "2002" },
    { id: 3, title: "dhamaal", release_date: "1904" },
    { id: 4, title: "avengers", release_date: "2012" },
    { id: 5, title: "spiderman", release_date: "2021" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="submit-button" onClick={() => {}}>
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
