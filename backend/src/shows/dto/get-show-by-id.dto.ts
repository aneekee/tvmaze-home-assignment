import { IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetShowByIdDto {
  @ApiProperty({
    description: 'ID of the TV show to retrieve',
    example: '169',
  })
  @IsNumberString()
  id: string;
}
