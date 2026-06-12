from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routes import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="AlgoForge API Services",
    version="0.1.0"
)

# Configure CORS
# In production, this should be restricted to specific allowed origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(api_router)

@app.get("/", summary="Root Endpoint")
async def root():
    """
    Welcome endpoint returning basic information about the API service.
    """
    return {
        "message": f"Welcome to {settings.PROJECT_NAME}",
        "environment": settings.ENVIRONMENT,
        "docs_url": "/docs",
        "status": "running"
    }
