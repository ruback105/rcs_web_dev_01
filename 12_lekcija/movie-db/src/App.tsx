import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard/MovieCard";

// const movieList = [
//   {
//     imgSrc: "/images/back-to-the-future.jpg",
//     title: "Back to the future",
//     desription:
//       "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
//   },
//   {
//     imgSrc: "/images/godfather.jpg",
//     title: "The Godfather",
//     desription:
//       "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//   },
// ];

function App() {
  const [movieList, setMovieList] = useState<
    Array<{
      imgSrc: string;
      title: string;
      description: string;
    }>
  >([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(
        (
          data: Array<{
            albumId: number;
            id: number;
            thumbnailUrl: string;
            url: string;
            title: string;
          }>
        ) => {
          const fetchedMovieList = data.map((entry) => ({
            imgSrc: entry.url,
            title: entry.title,
            description: "No description",
          }));

          setMovieList(fetchedMovieList);
        }
      );
  }, []);

  if (movieList.length === 0) {
    return "Still loading...";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
      {movieList.map((movie) => (
        <MovieCard
          imgSrc={movie.imgSrc}
          title={movie.title}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default App;
