from fastapi import APIRouter
from app.routes.health import router as health_router
from app.routes.submission import router as submission_router  # 1. Import it here

api_router = APIRouter(prefix="/api/v1")

# 2. Attach them to the master router
api_router.include_router(health_router)
api_router.include_router(submission_router)