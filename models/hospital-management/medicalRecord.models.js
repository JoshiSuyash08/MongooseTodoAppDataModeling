import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: patient,
    },

}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);