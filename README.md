# FRCDesign.org

A community-driven learning course and resource hub for FRC design and CAD, focused on Onshape. The site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and deploys with the Cloudflare adapter.

## Project Structure

```text
.
├── .github/workflows/          # GitHub Actions checks
├── public/                     # Static files served exactly by URL
├── scripts/                    # Maintenance scripts
│   └── check-local-links.mjs   # Rendered local link/asset checker
├── src/
│   ├── assets/                 # Imported theme, header, footer, and homepage assets
│   ├── components/
│   │   ├── content/            # Components used inside MDX pages
│   │   ├── general/            # Site-wide utility components
│   │   └── homepage/           # Homepage components
│   ├── config/                 # Sidebar and table-of-contents configuration
│   ├── content/docs/           # Starlight MDX documentation pages
│   ├── data/                   # Static data such as glossary terms
│   ├── plugins/                # Remark plugins
│   ├── starlightOverrides/     # Custom Starlight component overrides
│   └── styles/                 # Global CSS
├── astro.config.mjs            # Astro, Starlight, sitemap, and Cloudflare config
├── package.json
├── package-lock.json
├── tsconfig.json
└── wrangler.jsonc
```

Generated folders such as `dist/`, `.astro/`, and `node_modules/` are ignored by git.

## Content Organization

All docs live under `src/content/docs/`. Page URLs are based on the folder path and `.mdx` filename.

File naming rules:
- Use lowercase filenames.
- Use hyphens between words: `methods-of-contributing.mdx`, not `methodsofcontributing.mdx`.
- Keep `index.mdx` for section landing pages.
- Existing team/year mechanism examples use underscore-style identifiers, such as `2910_2023_dt.mdx`.

When renaming or moving a page, update:
- `src/config/sidebarConfig.ts` — controls sidebar order and labels
- Any Markdown links to the old route
- Header or navigation links if the page is a nav target

## Assets

For normal content images, place them near the page that uses them, usually in an `img/` folder beside the MDX file, and reference them with `ContentFigure`, `Slides`, or Markdown image syntax.

Use `public/` only when the browser needs to request an exact static URL, such as raw HTML `<video>` sources or files that should not go through Astro image optimization.

## Global MDX Imports

`ContentFigure`, `Aside`, `Slides`, `LinkButton`, and `ImageTable` are auto-imported into every `.mdx` file via `src/plugins/remark-mdx-global-imports.ts`. No import statement is needed to use them. To register a new global component, add it to the `GLOBAL_IMPORTS` array in that file.

Documentation for Markdown/MDX page components is maintained on the site itself in the [Adding a Page guide](https://frcdesign.org/contribution/adding-a-page/).

## Glossary Terms

Glossary tooltip terms are defined in `src/data/glossary.ts`. Add new terms to the `glossaryTerms` array, keep definitions short enough for hover tooltips, and update `src/content/docs/resources/glossary.mdx` when the term should also appear on the public glossary page.

More detailed contributor guidance is maintained in the [Contribution Style Guide](https://frcdesign.org/contribution/styleguide/#glossary-terms).

## Local Development

### Prerequisites

- Node.js 22 is used in CI. Node.js 18 or higher should work locally.
- Git
- A code editor such as VS Code

### Setup

```bash
git clone https://github.com/frcdesign/FRCDesign.org.git
cd FRCDesign.org
npm install
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321).

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check:links:local` | Build the site and check rendered local links/assets plus Onshape workspace-link rules |

## Link Checking

`npm run check:links:local` builds the site, serves `dist/` locally, crawls rendered same-origin links, and fails on broken local `href`, `src`, `srcset`, and `poster` URLs.

The checker also inspects `cad.onshape.com/documents/...` links. Onshape document links must use workspace URLs containing `/w/`; version URLs containing `/v/` and placeholder document links fail the check.

External links other than Onshape document shape checks are not fetched, which keeps PR checks stable.

## CI

GitHub Actions runs `.github/workflows/checks.yml` on pull requests and pushes to `main`.

The workflow:
- Installs dependencies with `npm ci`
- Runs `npm run check:links:local`

## Deployment

The site is configured for Cloudflare via `@astrojs/cloudflare` and `wrangler.jsonc`.

## Contributing

See the [Contribution Guide](https://frcdesign.org/contribution/methods-of-contributing/) on the website.

## Links

- [FRCDesign.org](https://frcdesign.org)
- [GitHub Repository](https://github.com/frcdesign/FRCDesign.org)
- [Contributor Discord Server](https://discord.gg/25pk6Mnh8k)
- [Community Discord Server](https://discord.gg/frcdesign)

---

<!-- markdownlint-disable-next-line MD025 -->
# FRCDesign.org 简体中文说明

FRCDesign.org 是由社区共同建设的 FRC 设计与 CAD（计算机辅助设计）学习课程和资源中心，重点介绍 Onshape。本网站使用 [Astro](https://astro.build) 和 [Starlight](https://starlight.astro.build) 构建，并通过 Cloudflare 适配器部署。

## 中文本地化项目说明

本仓库基于官方 `frcdesign/FRCDesign.org`，目标是提供简体中文本地化。这是一项简体中文本地化工作，并非 frcdesign 官方中文版本。

- 英文内容保持与官方 `main` 分支同步，中文文档位于 `src/content/docs/zh/`。
- 169 个正式中文内容页已完成覆盖；导航、侧栏、内部链接和主要共享 UI 已完成中文适配。
- `test-content-figure` 是内部测试页，不属于正式翻译范围。
- 语言切换器、正式 locale 配置以及 SEO 语言配对仍属于后续架构完善项。

## 项目结构

```text
.
├── .github/workflows/          # GitHub Actions 检查
├── public/                     # 按原始 URL 提供的静态文件
├── scripts/                    # 维护脚本
│   └── check-local-links.mjs   # 渲染后本地链接与资源检查器
├── src/
│   ├── assets/                 # 导入的主题、页眉、页脚和首页资源
│   ├── components/
│   │   ├── content/            # MDX 页面内使用的组件
│   │   ├── general/            # 全站通用组件
│   │   └── homepage/           # 首页组件
│   ├── config/                 # 侧栏和目录配置
│   ├── content/docs/           # Starlight MDX 文档页面
│   ├── data/                   # 术语表词条等静态数据
│   ├── plugins/                # Remark 插件
│   ├── starlightOverrides/     # 自定义 Starlight 组件覆盖
│   └── styles/                 # 全局 CSS
├── astro.config.mjs            # Astro、Starlight、站点地图和 Cloudflare 配置
├── package.json
├── package-lock.json
├── tsconfig.json
└── wrangler.jsonc
```

`dist/`、`.astro/` 和 `node_modules/` 等生成目录已被 git 忽略。

## 内容组织

所有文档均位于 `src/content/docs/` 下。页面 URL 由文件夹路径和 `.mdx` 文件名决定。

文件命名规则：

- 文件名使用小写字母。
- 单词之间使用连字符：应为 `methods-of-contributing.mdx`，而不是 `methodsofcontributing.mdx`。
- 各小节的入口页面保留使用 `index.mdx`。
- 现有队伍/年份机制示例使用下划线形式的标识符，例如 `2910_2023_dt.mdx`。

重命名或移动页面时，请更新：

- `src/config/sidebarConfig.ts`——控制侧栏顺序和标签
- 所有指向旧路由的 Markdown 链接
- 如果该页面是导航目标，还需更新页眉或导航链接

## 资源文件

普通内容图片应放在使用它们的页面附近，通常位于 MDX 文件旁的 `img/` 文件夹中，并使用 `ContentFigure`、`Slides` 或 Markdown 图片语法引用。

只有当浏览器需要请求准确的静态 URL 时才使用 `public/`，例如原始 HTML `<video>` 的源文件，或不应经过 Astro 图片优化的文件。

## 全局 MDX 导入

`ContentFigure`、`Aside`、`Slides`、`LinkButton` 和 `ImageTable` 通过 `src/plugins/remark-mdx-global-imports.ts` 自动导入每个 `.mdx` 文件，使用时无需编写 import 语句。如需注册新的全局组件，请将其添加到该文件的 `GLOBAL_IMPORTS` 数组中。

Markdown/MDX 页面组件的文档维护在网站的[添加页面指南](https://frcdesign.org/contribution/adding-a-page/)中。

## 术语表词条

术语表的悬浮提示词条在 `src/data/glossary.ts` 中定义。请将新词条添加到 `glossaryTerms` 数组，释义应足够简短以便在悬浮提示中显示；如果该词条也应出现在公开术语表页面上，请同时更新 `src/content/docs/resources/glossary.mdx`。

更详细的贡献者指南维护在[贡献风格指南](https://frcdesign.org/contribution/styleguide/#glossary-terms)中。

## 本地开发

### 前置条件

- CI 使用 Node.js 22。本地开发应可使用 Node.js 18 或更高版本。
- Git
- VS Code 等代码编辑器

### 设置

```bash
git clone https://github.com/frcdesign/FRCDesign.org.git
cd FRCDesign.org
npm install
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321)。

## 命令

| 命令 | 操作 |
| :-- | :-- |
| `npm install` | 安装依赖 |
| `npm run dev` | 在 `localhost:4321` 启动开发服务器 |
| `npm run build` | 将生产版本网站构建到 `./dist/` |
| `npm run preview` | 在本地预览生产版本 |
| `npm run check:links:local` | 构建网站，并检查渲染后的本地链接、资源及 Onshape 工作区链接规则 |

## 链接检查

`npm run check:links:local` 会构建网站，在本地提供 `dist/` 中的内容，抓取渲染后的同源链接，并在本地 `href`、`src`、`srcset` 和 `poster` URL 损坏时使检查失败。

检查器还会检查 `cad.onshape.com/documents/...` 链接。Onshape 文档链接必须使用包含 `/w/` 的工作区 URL；包含 `/v/` 的版本 URL 和占位文档链接无法通过检查。

除 Onshape 文档链接格式检查外，检查器不会获取其他外部链接，从而保证 PR 检查稳定。

## 持续集成（CI）

GitHub Actions 会在拉取请求以及向 `main` 分支推送时运行 `.github/workflows/checks.yml`。

该工作流会：

- 使用 `npm ci` 安装依赖
- 运行 `npm run check:links:local`

## 部署

本网站已通过 `@astrojs/cloudflare` 和 `wrangler.jsonc` 配置为部署到 Cloudflare。

## 参与贡献

请参阅网站上的[贡献指南](https://frcdesign.org/contribution/methods-of-contributing/)。

## 链接

- [FRCDesign.org](https://frcdesign.org)
- [GitHub 仓库](https://github.com/frcdesign/FRCDesign.org)
- [贡献者 Discord 服务器](https://discord.gg/25pk6Mnh8k)
- [社区 Discord 服务器](https://discord.gg/frcdesign)
