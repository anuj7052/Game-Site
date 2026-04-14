# GameVault - Deployment Guide

## Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account
- Azure account (for Blob Storage & CDN)
- Vercel account (for frontend deployment)
- Google AdSense account (optional)

---

## 1. MongoDB Atlas Setup

### Create a Cluster

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new project called "GameVault"
3. Deploy a free cluster (M0) or production tier
4. **Region**: Choose an Azure-integrated region (e.g., Azure East US 2) for best performance
5. Wait for cluster provisioning

### Configure Access

1. **Database Access** → Add a database user with read/write permissions
2. **Network Access** → Add:
   - Your local IP for development
   - `0.0.0.0/0` for production (or whitelist specific Vercel/Azure IPs)
3. **Connect** → Get the connection string:
   ```
   mongodb+srv://<username>:<password>@<cluster>.mongodb.net/gamevault?retryWrites=true&w=majority
   ```

### Create Text Index

The app creates a text index on `title`, `description`, and `tags` automatically via the schema. If search is slow, verify the index exists in Atlas UI under "Indexes".

---

## 2. Azure Blob Storage Setup

### Create Storage Account

1. Go to [Azure Portal](https://portal.azure.com)
2. Create a **Storage Account**:
   - Resource Group: `gamevault-rg`
   - Storage account name: `gamevaultassets`
   - Region: Same as your MongoDB Atlas cluster
   - Performance: Standard
   - Redundancy: LRS (or GRS for production)

### Create Container

1. Open the storage account → **Containers**
2. Create a container named `game-assets` with **Blob (anonymous read access for blobs only)**

### Configure CORS

1. Storage account → **Resource sharing (CORS)**
2. Add a rule:
   - Allowed origins: `*` (or your domain)
   - Allowed methods: `GET, PUT, OPTIONS`
   - Allowed headers: `*`
   - Max age: `3600`

### Get Connection String

1. Storage account → **Access keys**
2. Copy the **Connection string** for key1

---

## 3. Azure CDN Setup (Optional but Recommended)

1. In Azure Portal, create a **Front Door and CDN profiles** resource
2. Create a CDN profile:
   - Profile name: `gamevault-cdn`
   - Pricing tier: Standard Microsoft
3. Add an endpoint:
   - Name: `gamevault-assets`
   - Origin type: Storage
   - Origin hostname: `gamevaultassets.blob.core.windows.net`
4. Your CDN endpoint will be: `https://gamevault-assets.azureedge.net`

---

## 4. Local Development

```bash
# Clone the repo
git clone <repo-url>
cd gamevault

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Seed the Database

```bash
# Using curl
curl -X POST http://localhost:3000/api/admin/seed \
  -H "x-admin-secret: your-admin-secret-here"

# Or use the Admin Panel at http://localhost:3000/admin
# Login with your ADMIN_SECRET and click "Seed Database"
```

---

## 5. Vercel Deployment (Frontend)

### Setup

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import the repository
3. Configure environment variables in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `AZURE_STORAGE_CONNECTION_STRING` | Your Azure Storage connection string |
| `AZURE_STORAGE_CONTAINER_NAME` | `game-assets` |
| `AZURE_CDN_ENDPOINT` | `https://your-cdn.azureedge.net` |
| `ADMIN_SECRET` | A secure random string (min 32 chars) |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Your AdSense publisher ID |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |

4. Deploy

### Custom Domain

1. Vercel Dashboard → Settings → Domains
2. Add your domain and configure DNS

---

## 6. Azure App Service Deployment (Alternative)

If you prefer Azure over Vercel:

```bash
# Install Azure CLI
brew install azure-cli  # macOS
az login

# Create App Service
az group create --name gamevault-rg --location eastus2
az appservice plan create --name gamevault-plan --resource-group gamevault-rg --sku B1 --is-linux
az webapp create --name gamevault-app --resource-group gamevault-rg --plan gamevault-plan --runtime "NODE:18-lts"

# Configure env vars
az webapp config appsettings set --name gamevault-app --resource-group gamevault-rg --settings \
  MONGODB_URI="your-connection-string" \
  ADMIN_SECRET="your-secret" \
  AZURE_STORAGE_CONNECTION_STRING="your-storage-string"

# Deploy
az webapp deployment source config-local-git --name gamevault-app --resource-group gamevault-rg
git remote add azure <deployment-url>
git push azure main
```

---

## 7. Post-Deployment Checklist

- [ ] Seed database with sample games via `/admin`
- [ ] Verify all pages load correctly
- [ ] Test game iframe loading
- [ ] Check search functionality
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test admin panel CRUD operations
- [ ] Check responsive design on mobile
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Google AdSense (if applicable)
- [ ] Set up monitoring/alerts in Azure or Vercel

---

## 8. Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | Yes | MongoDB Atlas connection string |
| `ADMIN_SECRET` | Yes | Secret for admin panel authentication |
| `AZURE_STORAGE_CONNECTION_STRING` | No* | Azure Blob Storage connection string |
| `AZURE_STORAGE_CONTAINER_NAME` | No* | Blob container name (default: `game-assets`) |
| `AZURE_CDN_ENDPOINT` | No | Azure CDN endpoint URL |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | No | Google AdSense publisher ID |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public site URL for sitemap/SEO |

*Required only if using Azure for image storage

---

## Generating a Secure Admin Secret

```bash
# Using openssl
openssl rand -hex 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
