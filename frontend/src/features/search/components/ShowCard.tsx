import { type Show } from '@/features/shows/types/shows.types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ShowCardProps {
  show: Show;
  onClick: (id: number) => void;
}

export const ShowCard = ({ show, onClick }: ShowCardProps) => {
  return (
    <Card
      className="h-[400px] cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(show.id)}
    >
      {show.image?.medium ? (
        <div className="w-full h-[200px] overflow-hidden rounded-t-xl">
          <img
            src={show.image.medium}
            alt={show.name}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-t-xl">
          <span className="text-gray-500">No image</span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{show.name}</CardTitle>
        <CardDescription>
          {show.genres?.join(', ') || 'No genres'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="line-clamp-3 text-sm">
          {show.summary ? (
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          ) : (
            <p>No description available</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {show.rating?.average ? (
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{show.rating.average}</span>
          </div>
        ) : (
          <span className="text-gray-400">No rating</span>
        )}
        {show.premiered && (
          <span className="text-sm text-gray-500">
            {new Date(show.premiered).getFullYear()}
          </span>
        )}
      </CardFooter>
    </Card>
  );
};
