import mongoose, { Schema, Model, Document } from 'mongoose';

type NumberPeopleSawDocument = Document & {
    NumberPeopleSaw: number;
};

type NumberPeopleSawInput = {
    NumberPeopleSaw: NumberPeopleSawDocument['NumberPeopleSaw'];
};

const NumberPeopleSawsSchema = new Schema(
    {
        NumberPeopleSaw: {
            type: Schema.Types.String,
            required: true,
        },
    },
    {
        collection: 'NumberPeopleSaw',
        timestamps: true,
    },
);

const NumberPeopleSaw: Model<NumberPeopleSawDocument> = mongoose.model<NumberPeopleSawDocument>('NumberPeopleSaw', NumberPeopleSawsSchema);

export { NumberPeopleSaw, NumberPeopleSawInput, NumberPeopleSawDocument };
