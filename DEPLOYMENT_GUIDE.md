# Shivay Finance - Deployment Guide

This guide will walk you through deploying your Next.js website to Vercel and connecting it to a GoDaddy domain.

## Prerequisites
- A GitHub account with your project repository
- A Vercel account (free tier is sufficient)
- A GoDaddy domain (or any domain registrar)

## Step 1: Deploy to Vercel

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com) and sign in with GitHub
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure project settings (Vercel will detect Next.js automatically)
   - Click "Deploy"

3. **Get your Vercel URL**
   - After deployment, note your project URL (e.g., `your-project.vercel.app`)

## Step 2: Connect GoDaddy Domain

1. **In Vercel**
   - Go to your project dashboard
   - Click on "Settings" → "Domains"
   - Enter your domain (e.g., `shivayfinanceandservices.com`)
   - Click "Add"

2. **In GoDaddy**
   - Log in to your GoDaddy account
   - Go to "My Products" → "Domains"
   - Click on "DNS" next to your domain
   - Remove any existing A and CNAME records
   - Add new records:
     
     **Type** | **Name** | **Value** | **TTL**
     ---------|----------|-----------|--------
     A        | @        | 76.76.21.21 | 1 Hour
     CNAME    | www      | cname.vercel-dns.com. | 1 Hour

3. **Wait for DNS propagation**
   - DNS changes can take up to 48 hours to propagate globally (usually faster)
   - You can check propagation using [https://www.whatsmydns.net/](https://www.whatsmydns.net/)

## Step 3: Verify SSL (Automatic with Vercel)

- Vercel automatically provisions SSL certificates for your domain
- This usually happens within minutes after DNS propagation
- You can check the status in Vercel's project settings under "Domains"

## Step 4: Configure GitHub Integration (Optional)

For automatic deployments:
1. In Vercel, go to your project → "Settings" → "Git"
2. Enable "Automatically deploy from GitHub"
3. Select the branch you want to deploy (usually `main` or `master`)

## Common Issues & Solutions

1. **Domain not connecting**
   - Double-check DNS records in GoDaddy
   - Ensure there are no typos in the domain name
   - Try clearing your DNS cache or using incognito mode

2. **SSL not working**
   - Wait a few minutes for SSL provisioning
   - Check Vercel's domain settings for any error messages

3. **Site not updating**
   - Ensure you've pushed changes to the connected GitHub branch
   - Check Vercel deployment logs for errors

## Maintenance

- Keep your dependencies updated
- Monitor your Vercel dashboard for any build errors
- Set up email notifications for deployment status

## Support

For additional help:
- [Vercel Documentation](https://vercel.com/docs)
- [GoDaddy Help Center](https://in.godaddy.com/help)
- [GitHub Documentation](https://docs.github.com)

---
Last updated: December 2025
