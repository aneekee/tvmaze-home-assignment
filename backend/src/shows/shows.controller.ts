import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ShowsService } from './shows.service';
import { SearchShowsDto } from './dto/search-shows.dto';
import { ShowSearchResultModel } from './models/show.model';

@ApiTags('Shows')
@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @ApiOperation({ summary: 'Search for TV shows' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of TV shows matching the search query',
    type: [ShowSearchResultModel],
  })
  @Get('search')
  search(@Query() searchDto: SearchShowsDto) {
    return this.showsService.searchShows(searchDto.q);
  }
}
