# Next.js + Notion API Blog

This is a simple blog application built with [Next.js](https://nextjs.org/) and integrated with [Notion API](https://www.notion.so/my-integrations). The blog automatically pulls content from a Notion database and displays it on the website. The project leverages **Static Site Generation (SSG)** with Incremental Static Regeneration (ISR) to update the blog posts dynamically without rebuilding the entire site.

## Features

- **Notion Integration:** Easily write and manage blog posts using Notion. The content is fetched automatically and displayed on the blog.
- **Static Site Generation (SSG) with ISR:** The blog uses Next.js's ISR feature to generate static pages that are periodically revalidated, ensuring up-to-date content without rebuilding the whole site.
- **Profile Section:** The page includes a simple profile section with a user profile picture and name.
- **Responsive Design:** The website is designed to work across devices, providing a seamless reading experience.

## Setup and Installation

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nextjs-notion-blog.git
   cd nextjs-notion-blog
2. **Install Dependencies**

    Install the necessary dependencies using npm or yarn:

    ```bash
    npm install
    # or
    yarn install
3. **Configure Environment Variables**

    You can obtain the NOTION_DATABASE_ID by following the instructions on the Notion API documentation.
    Set up the required environment variables in a .env.local file:

    ```ini
    NOTION_TOKEN=<your-notion-token> 
    NOTION_DATABASE_ID=<your-notion-database-id>
4. **Run the Development Server**

    The app will be running on http://localhost:3000.
    Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
## How It Works
- **Fetching Data from Notion**: The getDatabase function fetches data from the specified Notion database. The posts are displayed in a list with their titles and last edited date.
- **Static Generation with ISR**: The blog posts are pre-rendered at build time using getStaticProps. The revalidate property ensures that the posts are updated every 10 seconds without a full site rebuild.
- **Styling**: The project uses custom CSS modules to style the components.

## Folder Structure
- **pages/index.js**: The main page displaying the list of blog posts.
- **pages/[id].js**: The individual post page that displays the full content.
- **lib/notion.js**: Contains the logic to fetch data from the Notion database.
- **styles/**: Contains the CSS modules used for styling.
