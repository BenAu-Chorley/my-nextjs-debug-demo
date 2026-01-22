This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Creating this project from scratch

There are more than one way to create a Next.js project. This project used the following commands:

1. `npx ceate-next-app@latest my-nextjs-debug-demo --typescript --eslint --tailwind --src-dir --app --turbopack --react-compiler --import-alias "@/*"`
2. `cd my-nextjs-debug-demo/`
3. `code .`

Inside VS code, do the followings:

1. create `src/app/api` and `.vscode` folders
2. create `src/app/posts/page.tsx` file (refer to the file content in this repo)
3. create `src/app/counter/page.tsx` file (refer to the file content in this repo)
4. replace content in `src/app/page.tsx` with the content of the page in this repo
5. create `.vscode/launch.json` file (refer to the file content in this repo)
6. uninstall extension `Microsoft Edge Tools for VS Code` if it's installed
7. open `Run and Debug` panel (Ctrl + Shift + D)
8. select `Next.js: debug full stack` from the dropdown and press the green play button or press F5
9. a chrome browser will be opened but you might need to type in your URL manually

### Server side debugging
1. set a breakpoint to line 11 in `src/app/posts/page.tsx`. In other words, break at the line:
   1. `const posts: Post[] = await res.json();` 
2. In Chrome, visit `http://localhost:3000/posts` and your breakpoint should hit

### Client side debugging
1. set a breakpoint to line 10 `setCounter(count + 1);` in `src/app/counter/page.tsx`
   1. Note that setting this line is VS code is easier than searching for the location in your browser to set it there
   2. If setting the breakpoint in Chrome after it is opened by VS code debugger, you can go to the `source` tab in Chrome and press `Ctrl + P` to open the file searcher
   3. Type `counter` and select `page.tsx` and set the breakpoint there
   4. Visit `http://localhost:3000/counter` and click the "Increment" button
   5. When your breakpoint is hit in Chrome, debug from there (which will be easier than debugging from VS code)
   6. Next.js automatically generates source maps in development mode, which map minified code back to your original TypeScript/JSX. This is why you can see your actual source code in DevTools

## Getting Started

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
