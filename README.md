<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). -->

## Getting Started

## NEXTJS DASHBOARD PROJECT

⚠️ Important API Note

Mock API Usage: This application uses https://jsonplaceholder.typicode.com - a public mock API designed for testing and prototyping
CRUD Operations: While the API allows creating, editing, and deleting posts, these changes are not persisted on the server
Expected Behavior: Updates will appear successful in the response but will not be reflected when data is fetched again
Demo Purpose: This is intentional behavior for demonstration and testing purposes

## Features

- **Admin Dashboard** (/admin)

  - Create, read, update, and delete posts
  - Rich text editor for post content
  - Responsive table view of all posts

- **Public Site** (/)

  - View list of posts with excerpts
  - Post detail pages (/posts/[id])
  - Clean, modern UI

- **Technical Highlights**
  - TypeScript support
  - Optimistic UI updates
  - Client-side data caching
  - Responsive design

## Technologies Used

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Query
- **Rich Text Editor**: Tiptap
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js v20.18.0
- Next.js v15.3.3
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-post-dashboard.git
   cd nextjs-dashboard
   ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
