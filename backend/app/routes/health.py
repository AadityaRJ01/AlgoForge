from fastapi import APIRouter

router = APIRouter()

@router.get("/health", summary="Perform a System Health Check")
async def health_check():
    """
    Checks the health of the system.
    """
    return {
        "status": "healthy",
        "service": "AlgoForge API",
        "version": "0.1.0"
    }
