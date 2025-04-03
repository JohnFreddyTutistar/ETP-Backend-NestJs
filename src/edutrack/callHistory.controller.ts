import { Controller, Post, Param, Body, ParseIntPipe } from "@nestjs/common";
import { EdutrackService } from "./edutrack.service";
import { CreateCallHistoryDto } from "./dto/create-call-history.dto";
import { CallHistory } from "./entities/call-history.entity";

@Controller('history')
export class CallHistoryController {

    constructor(private readonly edutrackService: EdutrackService){}

    @Post(':applicantId')
    async create(
        @Param('applicantId', ParseIntPipe) applicantId: number,
        @Body() createCallHistoryDto: CreateCallHistoryDto
    ): Promise<CallHistory> {
        return this.edutrackService.createNewHistory(createCallHistoryDto, applicantId)
    }
}