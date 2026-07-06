"""
v1 API Router aggregator — combines all sub-routers under /api/v1.
"""

from fastapi import APIRouter
from app.api.v1 import complaints, analytics, projects, ai, auth

router = APIRouter(prefix="/api/v1")

router.include_router(auth.router)
router.include_router(complaints.router)
router.include_router(analytics.router)
router.include_router(projects.router)
router.include_router(ai.router)
