import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { Public } from '@src/auth/auth.decorator';
import { IBudget, IBudgetLabel } from './schema/budget.schema';

@Public()
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Get()
  greeting() {
    return 'It works!';
  }

  @Post()
  createBudget(@Body() BudgetDTO: IBudget) {
    return this.budgetsService.createBudget(BudgetDTO);
  }
}
