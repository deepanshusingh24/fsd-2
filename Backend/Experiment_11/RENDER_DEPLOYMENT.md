# Deployment Guide to Render

This guide walks you through deploying the microservices to Render.

## Method 1: Using Blueprint (Recommended)

### Step 1: Create a New Blueprint

1. Go to https://dashboard.render.com
2. Click **New +** → **Blueprint**
3. Select **GitHub** and authorize Render to access your repositories
4. Choose your `fsd-2` repository
5. Select the branch (main)
6. Set the root directory to: `Backend/Experiment_11`
7. Click **Create Blueprint**

Render will automatically read the `render.yaml` file and create both services.

### Step 2: Configure Environment Variables

After the blueprint creates the services:

1. Go to the **order-service** service dashboard
2. Click **Environment** 
3. Make note of the service URL (e.g., `https://order-service.onrender.com`)

4. Go to the **customer-service** service dashboard
5. Click **Environment**
6. Update `ORDER_SERVICE_URL` with the order-service URL from step 3
7. Save changes

### Step 3: Monitor Deployment

1. Click **Logs** to see live deployment progress
2. Wait for both services to show "Live" status
3. Click on the service URL to test

---

## Method 2: Manual Deployment (Alternative)

### For Order Service:

1. Go to https://dashboard.render.com and click **New +** → **Web Service**
2. Select your GitHub repository
3. Configure:
   - **Name**: order-service
   - **Environment**: Python 3
   - **Build Command**: `cd Backend/Experiment_11/micro-services-lab/order-service && pip install -r requirements.txt`
   - **Start Command**: `python order_app.py`
   - **Instance Type**: Free
4. Click **Create Web Service**
5. Wait for deployment to complete and copy the service URL

### For Customer Service:

1. Click **New +** → **Web Service** again
2. Configure:
   - **Name**: customer-service
   - **Environment**: Python 3
   - **Build Command**: `cd Backend/Experiment_11/micro-services-lab/customer-service && pip install -r requirements.txt`
   - **Start Command**: `python customer_app.py`
   - **Instance Type**: Free
3. Before creating, add **Environment Variable**:
   - **Key**: `ORDER_SERVICE_URL`
   - **Value**: `https://order-service.onrender.com` (from the order service)
4. Click **Create Web Service**

---

## Testing Deployed Services

Once both services are live:

### Test Customer Service:
```bash
curl https://customer-service.onrender.com/customers/101/orders
```

### Test Order Service:
```bash
curl https://order-service.onrender.com/orders/user/101
```

### Update Order Status:
```bash
curl -X PUT -H "Content-Type: application/json" \
  -d '{"order_status":"Delivered"}' \
  https://order-service.onrender.com/orders/1/status
```

---

## Important Notes

- **Free Tier Limits**: Services spin down after 15 minutes of inactivity
- **Cold Starts**: First request after inactivity will take 30-60 seconds
- **Environment Variables**: Both services auto-use port 8080 on Render
- **Local Development**: Still use ports 5001 and 5002 locally
- **Service Communication**: Customer Service calls Order Service via the `ORDER_SERVICE_URL`

---

## Troubleshooting

### Services don't communicate:
- Verify `ORDER_SERVICE_URL` environment variable is set correctly in customer-service
- Check service URLs in Render dashboard

### Build fails:
- Check logs in the Render dashboard
- Ensure `requirements.txt` files are in the correct directories
- Verify Python version compatibility (3.9+)

### Services show offline:
- Check the build logs for errors
- Ensure start commands are correct
- Free tier services spin down after 15 minutes - make a request to wake them

---

## Clean Up (Optional)

To delete services from Render:
1. Go to service dashboard
2. Click **Settings** → **Delete Service**
3. Confirm deletion
