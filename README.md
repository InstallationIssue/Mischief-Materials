# Rats in Transit

This is a hobby web app created to assist with running sessions of the Tabletop Game Maze Rats

View the prod deployment on [Vercel](https://rats-in-transit.vercel.app/)


## Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### UI Resources

- [Figma UI Mockup](https://www.figma.com/file/MoV25z5YXoqBKPIaHi4GRM/MRC-Layouts?type=design&node-id=0-1&mode=design&t=jBr15O7pjehRa1H7-0)
- [FontAwesome Free Icon Source](https://fontawesome.com/search)
- [Hero Free Icon Source](https://heroicons.com/)
- [Hero Free Pattern Source](https://heropatterns.com/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Tailwind UI Resources](https://tailwindui.com/?ref=resources)
- [Tailwind Documentation](https://tailwindcss.com/docs/preflight)
- [Colour Generator](https://coolors.co/)
- [React API Reference](https://react.dev/reference/react)
- [Font Reference](https://developers.google.com/fonts/docs/css2)

### Database Resources

- [Prisma API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#default)
- [Prisma API Documentation](https://www.prisma.io/docs)

### Local Deployment

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Vercel Deployment

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Useful Commands

```bash
npx prisma studio # Opens prisma studio

npx prisma migrate dev # Updates database

sqlite3 dev.db # Navigate to /prisma directory opens database with sqlite3 cli

.output ./output.sql
.dump table # Optional, ignore table to dump full database
.exit # Outputs DB to file
```

For VS Code
command [ ] - indenting
command k command 0 - fold all