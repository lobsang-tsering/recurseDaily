## 🚀 Project Structure

```text
├── astro.config.mjs
├── dist
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── fonts
│       ├── atkinson-bold.woff
│       └── atkinson-regular.woff
├── README.md
├── src
│   ├── components
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro
│   │   └── HeaderLink.astro
│   ├── consts.ts
│   ├── content
│   │   ├── blogs
│   │   │   └── using-mdx.mdx
│   │   ├── config.ts
│   │   ├── leetcode
│   │   │   ├── reverse-linked-list.md
│   │   │   └── two-sum.md
│   │   └── me
│   │       └── about.md
│   ├── env.d.ts
│   ├── layouts
│   │   └── BlogPost.astro
│   ├── pages
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── leetcode
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── rss.xml.js
│   └── styles
│       └── global.css
└── tsconfig.json

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
