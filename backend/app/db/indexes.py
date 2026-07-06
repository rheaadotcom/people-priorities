"""
MongoDB index definitions.
Run on startup to ensure all required indexes exist.
"""

import logging
from pymongo import ASCENDING, DESCENDING, GEOSPHERE, TEXT

logger = logging.getLogger(__name__)


async def create_indexes(db) -> None:
    """Create all collection indexes idempotently."""
    logger.info("Creating MongoDB indexes…")

    # ── complaints ──────────────────────────────────────────────────────────
    complaints = db["complaints"]
    await complaints.create_index([("constituency_id", ASCENDING)])
    await complaints.create_index([("category", ASCENDING)])
    await complaints.create_index([("status", ASCENDING)])
    await complaints.create_index([("created_at", DESCENDING)])
    await complaints.create_index([("location", GEOSPHERE)])
    await complaints.create_index([("translated_text", TEXT)])
    await complaints.create_index(
        [("constituency_id", ASCENDING), ("category", ASCENDING), ("status", ASCENDING)]
    )

    # ── projects ────────────────────────────────────────────────────────────
    projects = db["projects"]
    await projects.create_index([("constituency_id", ASCENDING)])
    await projects.create_index([("score", DESCENDING)])
    await projects.create_index([("rank", ASCENDING)])

    # ── users ───────────────────────────────────────────────────────────────
    users = db["users"]
    await users.create_index([("email", ASCENDING)], unique=True)
    await users.create_index([("constituency_id", ASCENDING)])

    logger.info("MongoDB indexes created ✓")
