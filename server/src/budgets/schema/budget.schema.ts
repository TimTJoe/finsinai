import { Schema, Document } from 'mongoose';

export const BudgetSchema = new Schema({
  budget_name: String,
});

export const BudgetLabelSchema = new Schema({
  budget_id: String,
  title: String,
  lrd: Number,
  usd: Number,
});

export interface IBudgetLabel extends Document {
  budget_id: String;
  title: String;
  lrd: Number;
  usd: Number;
}

export interface IBudget extends Document {
  budget_uuid?: String;
  budget_name: String;
}

// const CategoryLabelSchema = new Schema({
//   label_name: String,
//   currency: [CurrencySchema],
// });

// export const CategorySchema = new Schema({
//   category_id: Number,
//   category_name: String,
//   budget_id: Number,
//   labels: [CategoryLabelSchema],
//   sub_total: [CurrencySchema],
// });

// export interface ICategory extends Document {
//   category_id: Number;
//   category_name: String;
//   budget_id: Number;
//   labels: ICategoryLabel[];
//   sub_total: ICurrency[];
// }

// interface ICategoryLabel {
//   label_name: String;
//   currency: ICurrency[];
// }

// export interface ICurrency {
//   lrd: Number;
//   usd: Number;
// }

// export const CurrencySchema = new Schema({
//   lrd: Number,
//   usd: Number,
// });
