import { ApiProperty } from '@nestjs/swagger';

export class ScheduleModel {
  @ApiProperty({ example: '22:00', required: false })
  time?: string;

  @ApiProperty({ example: ['Sunday'], required: false })
  days?: string[];
}

export class CountryModel {
  @ApiProperty({ example: 'United States', required: false })
  name?: string;

  @ApiProperty({ example: 'US', required: false })
  code?: string;

  @ApiProperty({ example: 'America/New_York', required: false })
  timezone?: string;
}

export class NetworkModel {
  @ApiProperty({ example: 20, required: false })
  id?: number;

  @ApiProperty({ example: 'AMC', required: false })
  name?: string;

  @ApiProperty({ type: CountryModel, required: false })
  country?: CountryModel;

  @ApiProperty({ example: null, required: false })
  officialSite?: string | null;
}

export class WebChannelModel {
  @ApiProperty({ example: 142, required: false })
  id?: number;

  @ApiProperty({ example: 'AMC.com', required: false })
  name?: string;

  @ApiProperty({ type: CountryModel, required: false })
  country?: CountryModel;

  @ApiProperty({ example: 'https://www.amc.com/', required: false })
  officialSite?: string | null;
}

export class ExternalsModel {
  @ApiProperty({ example: 18164, required: false })
  tvrage?: number | null;

  @ApiProperty({ example: 81189, required: false })
  thetvdb?: number | null;

  @ApiProperty({ example: 'tt0903747', required: false })
  imdb?: string | null;
}

export class ImageModel {
  @ApiProperty({
    example:
      'https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg',
    required: false,
  })
  medium?: string;

  @ApiProperty({
    example:
      'https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg',
    required: false,
  })
  original?: string;
}

export class RatingModel {
  @ApiProperty({ example: 9.2, required: false })
  average?: number | null;
}

export class LinkModel {
  @ApiProperty({ example: 'https://api.tvmaze.com/shows/169' })
  href: string;

  @ApiProperty({ example: 'El Camino: A Breaking Bad Movie', required: false })
  name?: string;
}

export class LinksModel {
  @ApiProperty({ type: LinkModel })
  self: LinkModel;

  @ApiProperty({ type: LinkModel, required: false })
  previousepisode?: LinkModel;
}

export class ShowModel {
  @ApiProperty({ example: 169 })
  id: number;

  @ApiProperty({ example: 'https://www.tvmaze.com/shows/169/breaking-bad' })
  url: string;

  @ApiProperty({ example: 'Breaking Bad' })
  name: string;

  @ApiProperty({ example: 'Scripted', required: false })
  type?: string;

  @ApiProperty({ example: 'English', required: false })
  language?: string;

  @ApiProperty({ example: ['Drama', 'Crime', 'Thriller'], required: false })
  genres?: string[];

  @ApiProperty({ example: 'Ended', required: false })
  status?: string;

  @ApiProperty({ example: 60, required: false })
  runtime?: number | null;

  @ApiProperty({ example: 60, required: false })
  averageRuntime?: number | null;

  @ApiProperty({ example: '2008-01-20', required: false })
  premiered?: string | null;

  @ApiProperty({ example: '2019-10-11', required: false })
  ended?: string | null;

  @ApiProperty({
    example: 'http://www.amc.com/shows/breaking-bad',
    required: false,
  })
  officialSite?: string | null;

  @ApiProperty({ type: ScheduleModel, required: false })
  schedule?: ScheduleModel;

  @ApiProperty({ type: RatingModel, required: false })
  rating?: RatingModel;

  @ApiProperty({ example: 100, required: false })
  weight?: number;

  @ApiProperty({ type: NetworkModel, required: false })
  network?: NetworkModel | null;

  @ApiProperty({ type: WebChannelModel, required: false })
  webChannel?: WebChannelModel | null;

  @ApiProperty({ required: false })
  dvdCountry?: string | null;

  @ApiProperty({ type: ExternalsModel, required: false })
  externals?: ExternalsModel;

  @ApiProperty({ type: ImageModel, required: false })
  image?: ImageModel;

  @ApiProperty({
    example:
      '<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy.</p>',
    required: false,
  })
  summary?: string | null;

  @ApiProperty({ example: 1755368175, required: false })
  updated?: number;

  @ApiProperty({ type: LinksModel, required: false })
  _links?: LinksModel;
}

export class ShowSearchResultModel {
  @ApiProperty({ example: 1.1877761 })
  score: number;

  @ApiProperty({ type: ShowModel })
  show: ShowModel;
}
