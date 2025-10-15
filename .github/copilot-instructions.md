# Copilot Instructions for trim-leng.github.io

## Project Overview
This is a Jekyll-based static site, enhanced with TinaCMS for content management. The project is structured for GitHub Pages deployment and uses a modern theme focused on speed, SEO, and multilingual content (including Tibetan and Chinese).

## Key Architecture & Components
- **Jekyll**: Main static site generator. Content lives in `_posts/`, `_drafts/`, and root `.html` files.
- **TinaCMS**: Provides a visual editing interface. Configuration is in `tina/config.js`.
- **Assets**: Images and static files are in `assets/` (mediaRoot: `/assets/img`).
- **Admin UI**: Built to `admin/` via TinaCMS build.
- **Custom Data**: Menus and other data in `_data/` (YAML).
- **Includes/Layouts**: Jekyll partials in `_includes/`, layouts in `_layouts/`.

## Developer Workflows
- **Local Development**: Use `npm run dev` or `yarn dev` (runs TinaCMS and Jekyll together).
- **Production Build**: Use `npm run build` (TinaCMS build, then Jekyll build).
- **Content Editing**: Use TinaCMS admin UI at `/admin` (after build/dev).
- **Theme**: Based on the "Sleek" Jekyll theme, see `source backup/README.md` for upstream info.

## Project-Specific Conventions
- **Post Filenames**: Auto-slugified as `YYYY-MM-DD-title` (see TinaCMS config for logic).
- **Categories**: Predefined, multilingual (see `tina/config.js`).
- **Media Uploads**: Go to `/assets/img` (relative to project root).
- **Public Folder**: Always `./` (project root) for both Jekyll and TinaCMS.
- **Custom Includes**: Use `_includes/` for reusable HTML (e.g., `card.html`, `form.html`).
- **Data Files**: Use `_data/menu.yml` for navigation structure.

## Integration Points
- **Disqus**: Enable by setting `disqus.shortname` in `_config.yml`.
- **Formspree**: Forms supported via includes, see `form.html`.
- **Google Tag Manager**: Supported via `_includes/gtm.html`.

## External Dependencies
- **Ruby/Jekyll**: Install via `gem install jekyll` and `bundle install`.
- **Node.js**: Required for TinaCMS and build scripts.
- **Gulp**: Optional for asset pipeline (see `source backup/README.md`).

## Examples
- To add a new post: Use TinaCMS or add a markdown/html file to `_posts/`.
- To add a menu item: Edit `_data/menu.yml`.
- To customize layout: Edit files in `_layouts/` or `_includes/`.

## References
- TinaCMS config: `tina/config.js`
- Jekyll config: `_config.yml`
- Theme docs: `source backup/README.md`

---
If you are unsure about a workflow or convention, check the referenced files or ask for clarification.
