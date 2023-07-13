import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
    guildId: string;
    userId: string;
    money: number;
    bank: number;
    married: boolean;
    married_to: string;
    rob: boolean;
    robCooldown: number;
    workCooldown: number;
    dailyCooldown: number;
    robCooldown_time: number;
    workCooldown_time: number;
    booster: number;
}

const userSchema = new Schema<IUser>({
    guildId: String,
    userId: String,
    money: Number,
    bank: Number,
    married: Boolean,
    married_to: String,
    rob: Boolean,
    robCooldown: Number,
    robCooldown_time: Number,
    dailyCooldown: Number,
    workCooldown_time: Number,
    workCooldown: Number,
    booster: Number,
});

export default model<IUser>("User", userSchema);
