import { Schema, model, models, Document, Model } from "mongoose";

// 1. TypeScript interface for Lead documents
export interface ILead extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Lead: Model<ILead> =
  models.Lead || model<ILead>("Lead", LeadSchema);
