import os
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    PROJECT_NAME: str = "AlgoForge API"
    ENVIRONMENT: str = Field(default="development")
    
    # Database Settings
    DATABASE_URL: str = Field(
        default="postgresql://algoforge_user:algoforge_password@db:5432/algoforge_db"
    )
    
    # Redis Settings
    REDIS_URL: str = Field(
        default="redis://redis:6379/0"
    )
    
    # Celery settings
    CELERY_BROKER_URL: str = Field(
        default="redis://redis:6379/0"
    )
    CELERY_RESULT_BACKEND: str = Field(
        default="redis://redis:6379/0"
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

settings = Settings()
