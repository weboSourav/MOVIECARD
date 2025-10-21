import MovieCard from '../components/MovieCard'
function Home(){


const movies = [

{id: 1 , title: "john wick 2" , release_date: "2023" },
{id: 2 , title: "race" , release_date: "2002" },
{id: 3 , title: "dhamaal" , release_date: "1904" },

];





    return <div className="home">
<div className="movies-grid">
{movies.map((movie) =>(

<MovieCard movie={movie} key={movie.id}/>
))}
</div>












    </div>










}

export default Home;