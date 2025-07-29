# L-Twins Fitness Website - Deployment Guide

## 🚀 Deploying to Server via Cyberduck

### Prerequisites

- ✅ Build completed successfully (`npm run build`)
- ✅ Cyberduck FTP/SFTP client installed
- ✅ Server credentials ready

### 📁 Files to Upload

#### Frontend (Built React App)

**Source:** `dist/` folder
**Upload to:** Your web server's public HTML directory (usually `public_html/` or `www/`)

**Key files in dist/:**

- `index.html` - Main HTML file
- `assets/` - All CSS, JS, and image files
- Favicon and other static assets

#### Backend (Node.js API)

**Source:** `backend/` folder
**Upload to:** Your server's application directory (e.g., `apps/ltwins-backend/`)

**Important backend files:**

- `server.js` - Main server file
- `package.json` - Dependencies
- `database.js` - Database configuration
- `routes/` - API routes
- `.env` - Environment variables (create on server)

### 🔧 Step-by-Step Deployment

#### Option 1: Fresh Deployment (New Installation)

1. **Connect to Server via Cyberduck**

   - Open Cyberduck
   - Create new connection with your server credentials
   - Connect to your hosting provider

2. **Upload Frontend**

   ```
   Local: lazarov-twins-website/dist/*
   Server: /public_html/ (or your web root)
   ```

   - Drag and drop all contents from `dist/` folder
   - Ensure `index.html` is in the root web directory

3. **Upload Backend**

   ```
   Local: lazarov-twins-website/backend/*
   Server: /apps/ltwins-backend/ (or your app directory)
   ```

4. **Create Environment File on Server**
   Create `.env` file in backend directory:
   ```env
   DB_HOST=your_database_host
   DB_PORT=5432
   DB_NAME=ltwins_fitness
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   PORT=3001
   STRIPE_SECRET_KEY=your_stripe_key
   ```

#### Option 2: Update Existing Version

1. **Backup Current Version**

   - Create backup folder: `/backup/ltwins-v1-backup/`
   - Copy current files to backup

2. **Update Frontend**

   - Delete old files in web root (except important config files)
   - Upload new `dist/` contents

3. **Update Backend**
   - Stop backend server if running
   - Upload new backend files
   - Keep existing `.env` file
   - Restart backend server

### 🗄️ Database Setup

#### If Database Doesn't Exist:

```bash
# SSH into your server and run:
cd /path/to/backend
npm install
node setup-database.js
node migrate-training-data.js
```

#### If Database Exists:

- Your existing data will remain intact
- New features will work with existing database

### 🔗 Server Configuration

#### Frontend (Apache/Nginx)

Ensure your web server handles React Router properly:

**Apache (.htaccess):**

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Nginx:**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### Backend (Node.js)

Start the backend server:

```bash
cd /path/to/backend
npm start
# or use PM2 for production:
pm2 start server.js --name "ltwins-backend"
```

### 📋 Post-Deployment Checklist

- [ ] Frontend loads correctly at your domain
- [ ] Navigation works (React Router)
- [ ] Backend API responds at `/api/test`
- [ ] Training programs load from database
- [ ] Shopping cart functionality works
- [ ] Stripe checkout works (if configured)
- [ ] All images and assets load properly

### 🔧 Troubleshooting

#### Frontend Issues:

- **404 errors:** Check .htaccess/nginx config for SPA support
- **Blank page:** Check browser console for errors
- **Missing assets:** Ensure all files from `dist/` were uploaded

#### Backend Issues:

- **API not responding:** Check if Node.js server is running
- **Database errors:** Verify database connection in `.env`
- **CORS errors:** Ensure backend allows your domain

### 📞 Testing Your Deployment

1. **Frontend Test:**

   - Visit: `https://yourdomain.com`
   - Navigate through all pages
   - Test responsive design

2. **Backend Test:**

   - Visit: `https://yourdomain.com/api/test`
   - Should return: `{"message": "Backend is working!"}`

3. **Full Integration Test:**
   - Browse training programs
   - Add to cart
   - Test checkout flow

### 🎉 Your Updated L-Twins Website is Live!

**New Features in This Version:**

- ✨ Shopping cart with persistence
- 💳 Stripe checkout integration
- 🗄️ PostgreSQL database backend
- 🔍 Enhanced search functionality
- 📱 Improved mobile responsiveness
- 🛒 Complete e-commerce flow

---

**Need Help?** Check server logs for any errors and ensure all environment variables are properly configured.
