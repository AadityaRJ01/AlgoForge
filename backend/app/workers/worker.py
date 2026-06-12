import time
from celery import Celery
from app.config import settings

# Initialize Celery app
# By default, naming the variable 'celery' or 'app' allows Celery CLI to auto-detect it
celery = Celery(
    "algoforge_tasks",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL
)

# Optional configuration settings
celery.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="UTC",
    enable_utc=True,
)

@celery.task(name="app.workers.worker.example_task")
def example_task(seconds: int = 5) -> str:
    """
    An example background task that simulates execution time.
    """
    time.sleep(seconds)
    return f"Task completed successfully after {seconds} seconds!"
