const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ismailmushraf:%40Ismail1603%23@cluster0.yzchtqc.mongodb.net/CourseDB');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: Array 
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String, 
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
