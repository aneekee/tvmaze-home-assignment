import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ShowSearchResultModel } from './models/show.model';

@Injectable()
export class ShowsService {
  constructor(private readonly httpService: HttpService) {}

  async searchShows(query: string): Promise<ShowSearchResultModel[]> {
    const response = await firstValueFrom(
      this.httpService.get(`http://api.tvmaze.com/search/shows?q=${query}`),
    );

    return response.data as ShowSearchResultModel[];
  }
}
