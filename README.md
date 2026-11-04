# Super Discount .99 & Huntington Drive Commercial Collective (El Sereno, CA 90032)

> *"Eastside proud. Community pricing. Digitizing the independent family storefronts of Huntington Drive."*

A production-grade, ultra-responsive modern **Vite** web application and commercial storefront for **Super Discount .99** (`@superdiscount.99` at 4892 Huntington Dr S, Los Angeles, CA 90032) and neighboring legacy businesses along the Huntington Drive corridor in El Sereno.

Located in [`10_DEV/11_PROJECTS/superdiscount-el-sereno-web/`](file:///root/10_DEV/11_PROJECTS/superdiscount-el-sereno-web/).

---

## 1. Commercial Entities Unified

1. **Super Discount .99:** Household cleaning essentials (Fabuloso, Ariel), handcrafted party piñatas, seasonal goods, phone accessories, and everyday `.99` discount tiers.
2. **El Sereno Meat Market (Carnicería):** Historic butcher shop at 4944 Huntington Dr S specializing in marinated ranchera asada, housemade chorizo, and artisanal queso fresco.
3. **Huntington Panadería & Cafe:** Neighborhood bakery at 4850 Huntington Dr S serving conchas, puerquitos de piloncillo, and morning cafecito.
4. **El Sereno Hardware & Locksmith:** 4780 Huntington Dr N providing commercial key duplication, EMT electrical fittings, and trade fasteners.

---

## 2. Infrastructure & Deployment Ready

- **Vite Build System:** Fast HMR and lightweight bundle production (`npm run build`).
- **Vercel Architecture:** Complete [`vercel.json`](file:///root/10_DEV/11_PROJECTS/superdiscount-el-sereno-web/vercel.json) configuration with client-side SPA routing.
- **GitHub Pages CI/CD:** Fully automated GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///root/10_DEV/11_PROJECTS/superdiscount-el-sereno-web/.github/workflows/deploy.yml).
- **Branch Protection Standards:** Enterprise governance policy documented in [`BRANCH_PROTECTION.md`](file:///root/10_DEV/11_PROJECTS/superdiscount-el-sereno-web/BRANCH_PROTECTION.md).
- **Instagram Live Simulator:** Built-in modal showcasing simulated feed drops for `@superdiscount.99`.

---

## 3. Quick Run

Preview directly in local browser:
```bash
cd /root/10_DEV/11_PROJECTS/superdiscount-el-sereno-web

# Install Vite and build
npm install
npm run build

# Preview via loopback
npx vite preview --port 3000 --host 127.0.0.1
```
