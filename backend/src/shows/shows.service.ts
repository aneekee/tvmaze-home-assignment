import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ShowSearchResultModel } from './models/show.model';

@Injectable()
export class ShowsService {
  constructor(private readonly httpService: HttpService) {}

  async searchShows(query: string) {
    const response = await firstValueFrom(
      this.httpService.get<ShowSearchResultModel[]>(
        `${process.env.BASE_API_URL}/search/shows?q=${query}`,
      ),
    );

    const genres = this.getShowsSearchGenres(response.data);
    return { data: response.data, genres };
  }

  getShowsSearchGenres(data: ShowSearchResultModel[]) {
    const genresSet = new Set<string>();
    data.forEach((show) => {
      if (show.show.genres) {
        show.show.genres.forEach((genre) => genresSet.add(genre));
      }
    });

    return Array.from(genresSet).sort();
  }
}
