import mongoose from "mongoose";
const { Schema } = mongoose;

const highestLevelOfEducationSchema = Schema(
    {
        edu: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const sopSchema = Schema(
    {
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            unique: true,
        },
        fullname: {
            type: String,
            required: [true, 'Please enter your fullname'],
        },
        age: {
            type: String,
            required: [true, 'Please enter your age'],
        },
        highestLevelOfEducation: {
            type: Schema.Types.ObjectId,
            ref: 'HLE',
            required: [true, 'Please add your Highest Level of education'],
        },
        institueForHLE: {
            type: String,
            required: [true, 'Please enter your Institute where you completed your highest level of education']
        },
        course: {
            type: String,
            required: [true, 'Please enter your course']
        },
        workexp: {
            type: String,
            required: [true, 'Please add your work experience']
        },
        canadaInstitueName: {
            type: String,
            required: [true, 'Please enter your institue in which you get admitted in Canada']
        },
        canadaInstitueCourse: {
            type: String,
            required: [true, 'Please enter your program of study in Canada']
        },
        originCountry: {
            type: String,
            required: [true, 'Please enter your origin country']
        },
        futureGoals: {
            type: String,
            required: [true, 'Please enter your futureGoals']
        },
        englishScoresListening: {
            type: Number,
            required: [true, 'Please enter your listening english scores']
        },
        englishScoresWriting: {
            type: Number,
            required: [true, 'Please enter your writing english scores']
        },
        englishScoresReading: {
            type: Number,
            required: [true, 'Please enter your reading english scores']
        },
        englishScoresSpeaking: {
            type: Number,
            required: [true, 'Please enter your speaking english scores']
        },
        tuitionFeeStatus: {
            type: Boolean,
            required: [true, 'Please enter tuition fee status']
        },
        tuitionFee: {
            type: Number,
        },
        gicStatus: {
            type: Boolean,
            required: [true, 'Please enter GIC Status']
        },
        gicFee: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }

)


const HLE = mongoose.model('HLE', highestLevelOfEducationSchema);
const SOPform = mongoose.model('SOPform', sopSchema);

export {
    HLE, SOPform
}
