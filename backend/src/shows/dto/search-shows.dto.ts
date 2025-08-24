import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchShowsDto {
  @ApiProperty({
    description: 'Search query for TV shows',
    example: 'Breaking Bad',
    minLength: 1,
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  q: string;
}
