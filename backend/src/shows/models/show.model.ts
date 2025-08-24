import { ApiProperty } from '@nestjs/swagger';

export class ImageModel {
  @ApiProperty({ example: 'http://example.com/medium.jpg', required: false })
  medium?: string;

  @ApiProperty({ example: 'http://example.com/original.jpg', required: false })
  original?: string;
}

export class RatingModel {
  @ApiProperty({ example: 8.5, required: false })
  average?: number;
}

export class NetworkModel {
  @ApiProperty({ example: 1, required: false })
  id?: number;

  @ApiProperty({ example: 'NBC', required: false })
  name?: string;

  @ApiProperty({ example: 'US', required: false })
  country?: { code: string; name: string; timezone: string };
}

export class ShowModel {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Breaking Bad' })
  name: string;

  @ApiProperty({ example: 'http://example.com/show', required: false })
  url?: string;

  @ApiProperty({ type: ImageModel, required: false })
  image?: ImageModel;

  @ApiProperty({
    example: 'A high school chemistry teacher turned meth manufacturer.',
    required: false,
  })
  summary?: string;

  @ApiProperty({ type: RatingModel, required: false })
  rating?: RatingModel;

  @ApiProperty({ example: 'English', required: false })
  language?: string;

  @ApiProperty({ example: ['Drama', 'Crime'], required: false })
  genres?: string[];

  @ApiProperty({ example: '2008-01-20', required: false })
  premiered?: string;

  @ApiProperty({ type: NetworkModel, required: false })
  network?: NetworkModel;
}

export class ShowSearchResultModel {
  @ApiProperty()
  score: number;

  @ApiProperty({ type: ShowModel })
  show: ShowModel;
}
