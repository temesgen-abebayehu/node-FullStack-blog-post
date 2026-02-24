# Full Stack Blog Post Application

This project is a full stack blog post application with a Node.js/Express backend and a React frontend. It allows users to view articles, add comments, and manage authentication.

## Project Structure

```
Backend/
  package.json
  scr/
    db.js
    server.js
Frontend/
  package.json
  README.md
  public/
    index.html
    manifest.json
  src/
    App.css
    App.js
    index.css
    index.js
    NavBar.jsx
    components/
      AddCommentForm.jsx
      ArticleList.jsx
      CommentsList.jsx
    hooks/
      useUser.jsx
    pages/
      AboutPage.jsx
      article-content.js
      ArticlePage.jsx
      ArticlesListPage.jsx
      CreateAccountPage.jsx
      HomePage.jsx
      LoginPage.jsx
      NotFoundPage.jsx
screenShot/
```

## Features
- View a list of articles
- Read individual articles
- Add comments to articles
- User authentication (login, create account)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Backend Setup
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend will typically run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:8000](http://localhost:8000) by default.

## Folder Descriptions
- **Backend/**: Node.js/Express backend API and database logic
- **Frontend/**: React frontend application
- **screenShot/**: Screenshots and images for documentation

## License
This project is licensed under the MIT License.
