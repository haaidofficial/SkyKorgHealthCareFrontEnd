# Next.js + Tailwind Products (with Search/Filters & Gmail forms)

A fully responsive Next.js (App Router) + Tailwind CSS starter with:

- Main menu (Home, About, Services, Products, Contact, Get Quote)
- Products → Category → Product Detail flow
- Breadcrumbs on product details
- Right-side **Get Quote** slide-over form (prefills from product page)
- **Contact form** page
- **Search & Filters** on Category pages (search by name/SKU, filter by Material, sort by name)
- All static copy from JSON (`data/content.json`), products in `data/products.json`
- Submissions sent to **Gmail** using Nodemailer (configure `.env.local`)

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Configure email (Gmail)

This project uses **Nodemailer** with Gmail SMTP. Recommended approach is to use a **Gmail App Password** (requires 2-Step Verification):

1. Enable 2-Step Verification on your Google account
2. Create an **App password** for "Mail" → "Other" (or select your app)
3. Copy the generated 16-character password
4. Create `.env.local` in the project root using the template below

> If you use regular Gmail password, login will fail. App Password is the secure method for SMTP.

### `.env.local`

```
GMAIL_USER=youraddress@gmail.com
GMAIL_PASS=your_app_password_here
# where to deliver notifications (defaults to GMAIL_USER if omitted)
TO_EMAIL=youraddress@gmail.com
```

**Forms**
- Quote form → `POST /api/quote`
- Contact form → `POST /api/contact`

## JSON-driven content
- Edit labels and copy in `data/content.json`
- Edit categories and products in `data/products.json`

## Build

```bash
npm run build
npm start
```

## Notes
- Replace `public/placeholder.png` with real images
- Extend filters easily by adding more facets in `app/products/[category]/page.tsx`
- For production, consider adding server-side validation & rate limiting on API routes
