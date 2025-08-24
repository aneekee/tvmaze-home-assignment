import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ShowsService } from './shows.service';
import { SearchShowsDto } from './dto/search-shows.dto';
import { ShowModel, ShowSearchResultModel } from './models/show.model';
import { GetShowByIdDto } from './dto/get-show-by-id.dto';

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

  @ApiOperation({ summary: 'Get TV show by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns a TV show with the specified ID',
    type: ShowModel,
  })
  @ApiResponse({
    status: 404,
    description: 'TV show with the specified ID not found',
  })
  @Get(':id')
  getById(@Param() params: GetShowByIdDto) {
    return this.showsService.getShowById(params.id);
  }
}
