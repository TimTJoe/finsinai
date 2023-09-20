import { Injectable } from '@nestjs/common';
import { IBudget, IBudgetLabel } from './schema/budget.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectModel('Budget') private readonly budgetModel: Model<IBudget>,
  ) {}


  createBudget(BudgetData: IBudget) {
    const newBudget = new this.budgetModel(BudgetData);
    return newBudget.save();
  }


}
