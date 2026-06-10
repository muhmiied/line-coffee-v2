# Line Coffee — Public Pages Section Map

Each section is a named block within a page. Sections guide UI phase planning and component decomposition. Order reflects top-to-bottom layout.

---

## Home (`/`)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Hero slider (3–4 slides). Each slide: headline in active language, CTA button. Dark warm background, floating product object, soft glow. No hard-coded bilingual stacking. |
| 2 | Categories | Floating category tiles. Each tile: category name in active language, links to /products/category/[slug]. Soft glass or warm translucent surface. |
| 3 | Featured Products | Boutique product cards for 4–6 products. Name in active language, default variant price, conditional image slot. Links to /products/[slug]. |
| 4 | Story / About Preview | Short brand story excerpt in active language. CTA linking to /about. Warm editorial background, floating coffee object, minimal copy. |
| 5 | Features / Why Line Coffee | 3–4 glass feature cards. Each: icon, short title, short supporting text in active language. Subtle beige/gold border, hover lift. |
| 6 | Contact / WhatsApp CTA | WhatsApp CTA as primary action. Brief contact info in active language. Warm dark gradient background. |

---

## Products Listing (`/products`) — Boutique Product Grid

| # | Section | Description |
|---|---------|-------------|
| 1 | Page Hero / Title | Page heading in active language. Optional short subtitle. Warm premium hero, minimal. |
| 2 | Category Filters / Nav | Horizontal scrollable pill nav of all visible categories. Category names in active language. Links to /products/category/[slug]. |
| 3 | Product Grid | Boutique product cards. Each: conditional image slot, product name in active language, category label, default price, weight tag chips. Links to /products/[slug]. |
| 4 | Empty State | Shown when no products are visible. Branded premium empty state with icon and message in active language. |

---

## Category Page (`/products/category/[slug]`) — Editorial Category Experience

| # | Section | Description |
|---|---------|-------------|
| 1 | Category Hero / Title | Category name and description in active language. Optional banner image or floating product object. Warm dark or dynamic background. Back link to /products. |
| 2 | Product Grid | Boutique product card layout (same as Products Listing). Filtered to this category's products. |
| 3 | Empty State | Shown when category has no visible products. Branded premium empty state with message in active language. |

---

## Product Detail (`/products/[slug]`) — Premium Product Showcase

| # | Section | Description |
|---|---------|-------------|
| 1 | Product Image Area | Large floating product object or main image (from products.main_image_id → media_assets). Conditional: renders only when image_url is non-null. Dark premium background, soft shadow. |
| 2 | Product Name | Product name in active language. Large Playfair Display (EN) or Cairo (AR) heading. |
| 3 | Description | Full description in active language. Max-prose width, glass detail panel. |
| 4 | Variant Selector | Weight/size options as selectable chips. Shows weight + unit label. |
| 5 | Price | Selected variant price. Large, prominent, warm accent. |
| 6 | Add to Cart | Placeholder button for future cart/order logic. Disabled or hidden until cart phase. |
| 7 | WhatsApp / Order CTA | Secondary "Order via WhatsApp" CTA. Future phase. |

---

## About (`/about` — to be created)

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Full-width hero. Brand tagline in active language. Warm dark editorial background, floating coffee object. |
| 2 | Our Story | Short paragraph about Line Coffee's origin in active language. Glass story panel. |
| 3 | Founder / Family Story | Personal touch: who started it, why, since 2015. Image slot for founder photo or craft imagery. |
| 4 | Quality / Sourcing / Roasting | 2–3 paragraphs or glass cards about sourcing standards and roasting process. Active language only. |
| 5 | CTA | Link to /products or WhatsApp button. |

---

## Contact (`/contact` — to be created) — Glass Contact Hub

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Page heading in active language. Warm dark gradient background. |
| 2 | Contact Info | Separate glass cards for WhatsApp, phone, email, and location. Labels and content in active language. |
| 3 | WhatsApp CTA | Prominent WhatsApp-first CTA button. Pre-filled greeting message. |
| 4 | Message Form | Glass card with a simple contact form for sending a message directly. Active language labels. |
| 5 | Social Links | Instagram, Facebook, TikTok, or other active channels. Icon links. |

---

## Blog (`/blog` — standalone page, shell in UI-5, content later)

Blog is a planned standalone page with its own navbar link. The shell (layout, empty state, premium editorial card design) is built in UI-5. Actual post content is a later phase with its own DB structure.

| # | Section | Description |
|---|---------|-------------|
| 1 | Blog Hero | Page heading in active language. Premium editorial warm background. |
| 2 | Posts Grid | Soft editorial article cards. Each: cover image slot, title in active language, short excerpt, date, category tag. |
| 3 | Coffee Education Posts | Content focus: brewing guides, coffee types, flavor guides, origin stories. |
| 4 | Product-Related Content | Posts that can link to specific products or categories. |
| 5 | Empty State | Used in UI-5 shell before real posts exist. Branded premium empty state. |
