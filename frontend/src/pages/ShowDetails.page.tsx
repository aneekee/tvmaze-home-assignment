import { useParams, Navigate } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useShow } from '@/features/shows/hooks/useShow';

export const ShowDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { show, isLoading, isError } = useShow({ id: id || '' });

  if (isError) {
    return <Navigate to="/not-found" />;
  }

  if (isLoading || !show) {
    return (
      <div className="container mx-auto py-6 space-y-4">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{show.name}</CardTitle>
          <div className="text-sm text-gray-500">
            {show.genres?.join(' • ')}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {show.image?.medium && (
              <img
                src={show.image.medium}
                alt={show.name}
                className="rounded-md object-cover"
              />
            )}
            <div>
              {show.summary && (
                <div
                  className="prose prose-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: show.summary }}
                />
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {show.status && (
                  <div>
                    <span className="font-semibold">Status:</span> {show.status}
                  </div>
                )}
                {show.premiered && (
                  <div>
                    <span className="font-semibold">Premiered:</span>{' '}
                    {show.premiered}
                  </div>
                )}
                {show.ended && (
                  <div>
                    <span className="font-semibold">Ended:</span> {show.ended}
                  </div>
                )}
                {show.network?.name && (
                  <div>
                    <span className="font-semibold">Network:</span>{' '}
                    {show.network.name}
                  </div>
                )}
                {show.rating?.average && (
                  <div>
                    <span className="font-semibold">Rating:</span>{' '}
                    {show.rating.average}/10
                  </div>
                )}
                {show.runtime && (
                  <div>
                    <span className="font-semibold">Runtime:</span>{' '}
                    {show.runtime} minutes
                  </div>
                )}
                {show.language && (
                  <div>
                    <span className="font-semibold">Language:</span>{' '}
                    {show.language}
                  </div>
                )}
                {show.officialSite && (
                  <div>
                    <span className="font-semibold">Official Site:</span>{' '}
                    <a
                      href={show.officialSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
