# 📚 Learning Management System (LMS)  

A feature-rich **Learning Management System (LMS)** built using the **MERN stack**, **Clerk** for authentication, and **Svix** for real-time notifications. This platform enables **educators to create, manage, and track courses**, while **students can enroll and engage with learning materials**.  

## 🚀 Features  
- ✅ **User Authentication** – Secure authentication with Clerk  
- ✅ **Course Management** – Create, edit, and delete courses  
- ✅ **Student Enrollment** – Track student progress and enrollments  
- ✅ **Interactive Learning** – Video player and course content management  
- ✅ **Real-Time Notifications** – Powered by Svix  
- ✅ **Responsive UI** – Built with Tailwind CSS  

## 🛠️ Tech Stack  
- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: Clerk  
- **Notifications**: Svix  

## 🗂️ Project Structure  
```bash  
/backend   - Node.js, Express, MongoDB backend  
/frontend  - React.js frontend  
```

## 🌍 Routes  
### Public Routes  
- `/` → Home  
- `/course-list` → List all courses  
- `/course-list/:input` → Search courses  
- `/course/:id` → Course details  
- `/my-enrollments` → User’s enrolled courses  
- `/player/:courseId` → Course player  
- `/loading:path` → Loading page  

### Educator Routes  
- `/educator` → Educator dashboard  
- `/educator/add-course` → Add a new course  
- `/educator/my-course` → View educator’s courses  
- `/educator/student-enrolled` → Manage student enrollments  

## 🔧 Installation  
1. **Clone the repository**  
   ```bash  
   git clone https://github.com/Lakshya-jangid-08/LMS_Website.git
   cd lms  
   ```

2. **Install dependencies**  
   ```bash  
   npm install  
   ```

3. **Run the project**  
   ```bash  
   npm start  
   ```

## 🎯 Contributing  
Contributions are welcome! Feel free to open issues and pull requests.  

## 📄 License  
This project is licensed under the **MIT License**.  
