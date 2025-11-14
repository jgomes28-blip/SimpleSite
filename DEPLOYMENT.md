# Deployment Guide

## Option 1: GitHub Pages (Recommended - Easiest & Free)

Your site is already set up for GitHub Pages! Just follow these steps:

### Steps:

1. **Go to your GitHub repository**: https://github.com/jgomes28-blip/SimpleSite

2. **Click on "Settings"** (top right of the repository)

3. **Scroll down to "Pages"** in the left sidebar

4. **Under "Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`

5. **Click "Save"**

6. **Wait 1-2 minutes** for GitHub to build your site

7. **Your site will be live at**: 
   ```
   https://jgomes28-blip.github.io/SimpleSite/
   ```

That's it! Your site is now live and accessible to anyone with the link.

---

## Option 2: Google Drive Hosting

Google Drive doesn't directly host HTML files, but here are two workarounds:

### Method A: Using Google Sites (Easiest for Google Drive)

1. **Go to Google Sites**: https://sites.google.com
2. **Create a new site**
3. **Click "Embed"** → **"Embed code"**
4. **Upload your files to Google Drive**:
   - Upload `index.html`, `styles.css`, and `script.js` to a folder
   - Make the folder **public** (right-click → Share → Anyone with the link)
5. **Get the public link** to your `index.html` file
6. **Use an iframe embed** in Google Sites:
   ```html
   <iframe src="YOUR_GOOGLE_DRIVE_HTML_LINK" width="100%" height="800px"></iframe>
   ```
7. **Publish your Google Site**

**Note**: This method has limitations - some features may not work perfectly.

### Method B: Using a Google Drive HTML Viewer Service

1. **Upload files to Google Drive**:
   - Create a folder
   - Upload `index.html`, `styles.css`, `script.js`
   - Make folder public

2. **Get the folder ID** from the URL:
   ```
   https://drive.google.com/drive/folders/FOLDER_ID_HERE
   ```

3. **Use a service like**:
   - https://sites.google.com/site/gdocs2direct/
   - Or search "Google Drive HTML viewer"

4. **Convert your `index.html` link** to a direct link

5. **Share that link**

**Note**: This method is less reliable and may have CORS issues.

---

## Option 3: Netlify (Free & Easy Alternative)

1. **Go to**: https://www.netlify.com
2. **Sign up** with GitHub (free)
3. **Click "Add new site"** → **"Import an existing project"**
4. **Connect to GitHub** → Select `SimpleSite` repository
5. **Deploy settings**:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. **Click "Deploy"**
7. **Your site is live!** (Netlify gives you a free domain)

---

## Recommendation

**Use GitHub Pages** - It's:
- ✅ Free
- ✅ Already connected to your repo
- ✅ Takes 2 minutes to set up
- ✅ Professional URL
- ✅ Automatic updates when you push
- ✅ No limitations

Your teacher can access it at: `https://jgomes28-blip.github.io/SimpleSite/`

