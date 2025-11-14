#!/bin/bash

# GCP Cloud Run Deployment Script for 한국저시력인협회 Website
# This script builds and deploys the Next.js app to Google Cloud Run

set -e

# Configuration
PROJECT_ID="${GCP_PROJECT_ID:-lowvison}"
REGION="${GCP_REGION:-asia-northeast3}"
SERVICE_NAME="lowvision-webapp"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

echo "🚀 Starting deployment to Google Cloud Run..."
echo "   Project: ${PROJECT_ID}"
echo "   Region: ${REGION}"
echo "   Service: ${SERVICE_NAME}"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: gcloud CLI is not installed."
    echo "   Install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Set GCP project
echo "📌 Setting GCP project..."
gcloud config set project ${PROJECT_ID}

# Enable required APIs
echo "🔧 Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Build Docker image using Cloud Build
echo "🏗️  Building Docker image..."
cd webapp
gcloud builds submit --tag ${IMAGE_NAME}

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars "NODE_ENV=production"

# Get service URL
SERVICE_URL=$(gcloud run services describe ${SERVICE_NAME} --platform managed --region ${REGION} --format 'value(status.url)')

echo ""
echo "✅ Deployment completed!"
echo "🌐 Your app is now live at: ${SERVICE_URL}"
echo ""
echo "📊 Next steps:"
echo "   1. Test your app: ${SERVICE_URL}"
echo "   2. Set up custom domain (optional)"
echo "   3. Configure environment variables (if needed)"
echo "   4. Set up monitoring and logging"
echo ""
