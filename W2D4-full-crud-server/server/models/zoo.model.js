import { model, Schema } from 'mongoose';
const ZooSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "must have a {PATH}"],
            minlength: [3, "{PATH} must be at least 3 chars long"],
            maxlength: [40, "{PATH} must not be more than 40 chars long"]
        },
        image: {
            type: String // url
        },
        age: {
            type: Number,
            required: [true, "must have an {PATH}"],
            min: [1, "{PATH} must be at least 1"],
        },
        takesMeds: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Zoo = model("Zoo", ZooSchema);
export default Zoo;