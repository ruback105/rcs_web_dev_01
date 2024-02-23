import { FC } from "react";

type MovieCardProps = {
  imgSrc: string;
  title: string;
  description: string;
};

const MovieCard: FC<MovieCardProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="border-2 border-black rounded-md p-2 flex flex-col space-y-2 w-[200px]">
      <img
        className="h-[150px] object-cover rounded-lg"
        src={imgSrc}
        alt="Movie poster"
      />
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p>
          {description} 
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
