## 🔹 Backend `src` Folder

The `src` folder contains all backend source code, organized by modules and functionality.


### **Folder Details**
- **`controllers`** – Handles logic for API requests and responses.  
- **`routes`** – Maps HTTP endpoints to controllers.  
- **`services`** – Contains reusable business logic and interacts with the database via Prisma.  
- **`prisma`** – Contains Prisma schema for database models and migrations.  
- **`utils`** – General-purpose helper functions like encryption, JWT handling, and validation.  
- **`middleware`** – Middleware for authentication, error handling, and logging.  
- **`server.ts`** – Initializes Express server, middleware, and routes.  
- **`.env`** – Stores environment variables (database URL, JWT secrets, etc.).  

> 💡 **Tip:** Keep controllers lightweight; place most business logic in `services`. Load environment variables with a package like `dotenv` for security.
