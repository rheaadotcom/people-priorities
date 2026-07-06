"""
Projects router — ranked development project recommendations.
"""

from fastapi import APIRouter, Depends, Query, BackgroundTasks
from typing import Optional
from app.models.project import ProjectResponse
from app.core.dependencies import get_current_user

router = APIRouter(prefix="/projects", tags=["Projects"])


@router.get("/recommendations", response_model=list[ProjectResponse], summary="Get ranked project recommendations")
async def get_recommendations(
    constituency_id: Optional[str] = Query(None),
    limit: int = Query(10, ge=1, le=50),
    current_user=Depends(get_current_user),
):
    """
    Returns development projects ranked by composite scoring:
    complaint volume × severity × sentiment × dataset gaps × recency.
    """
    # TODO: Implement recommendation engine
    return []


@router.post("/recalculate", summary="Trigger re-scoring of project recommendations")
async def recalculate_recommendations(
    background_tasks: BackgroundTasks,
    constituency_id: Optional[str] = Query(None),
    current_user=Depends(get_current_user),
):
    """
    Triggers a background re-run of the recommendation engine for a constituency.
    Returns immediately — check /recommendations after a few seconds.
    """
    # TODO: Enqueue background scoring task
    return {"message": "Re-scoring queued", "constituency_id": constituency_id}
