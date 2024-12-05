import { Schema, model } from 'mongoose';

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    user: {
      type: String,
      required: [true, 'Github username is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    bio: {
      type: String,
      trim: true
    },
    avatar: {
      type: String,
      required: [true, 'Avatar URL is required']
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Dev'
    }],
    dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'Dev'
    }]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Add index for better query performance
DevSchema.index({ user: 1 });

// Virtual for profile URL
DevSchema.virtual('profileUrl').get(function() {
  return `https://github.com/${this.user}`;
});

const Dev = model('Dev', DevSchema);

export default Dev;
