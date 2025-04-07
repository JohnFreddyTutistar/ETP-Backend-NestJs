import { Controller, Post, Param, Body } from "@nestjs/common";
import { EdutrackService } from "./edutrack.service";
import { CreateCallHistoryDto } from "./dto/create-call-history.dto";
import { CallHistory } from "./entities/call-history.entity";

@Controller('history')
export class CallHistoryController {

    constructor(private readonly edutrackService: EdutrackService){}

    @Post(':applicantId')
    async create(
        @Param('applicantId') applicantId: string,
        @Body() createCallHistoryDto: CreateCallHistoryDto
    ): Promise<CallHistory> {
        return this.edutrackService.createNewHistory(createCallHistoryDto, applicantId)
    }
}