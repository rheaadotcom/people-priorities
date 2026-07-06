"""
Application configuration using Pydantic Settings.
All values are read from environment variables or .env file.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # ── App ───────────────────────────────────────────────────────────
    app_name: str = "PeoplePriority API"
    app_version: str = "0.1.0"
    debug: bool = False
    environment: str = "development"

    # ── MongoDB ───────────────────────────────────────────────────────
    mongodb_uri: str = "mongodb://localhost:27017"
    mongodb_db_name: str = "people_priority"

    # ── JWT Auth ──────────────────────────────────────────────────────
    jwt_secret_key: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    jwt_access_token_expire_minutes: int = 60 * 24  # 24 hours

    # ── Gemini API ────────────────────────────────────────────────────
    gemini_api_key: str = ""
    gemini_model: str = "gemini-2.0-flash"

    # ── Storage ───────────────────────────────────────────────────────
    # GCS / S3 bucket name for media uploads (optional for hackathon)
    storage_bucket: str = ""
    storage_provider: str = "local"  # "local" | "gcs" | "s3"
    local_upload_dir: str = "uploads"

    # ── CORS ──────────────────────────────────────────────────────────
    cors_origins: list[str] = [
        "http://localhost:3000",
        "https://people-priority.vercel.app",
    ]


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance — call this everywhere instead of instantiating directly."""
    return Settings()
