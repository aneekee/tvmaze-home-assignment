import { useParams } from 'react-router-dom';

export const ShowDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold">Show Details</h1>
      <p>Show ID: {id}</p>
    </div>
  );
};
