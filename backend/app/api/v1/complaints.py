"""
Complaints router — handles citizen complaint submissions and MP complaint management.
"""

from fastapi import APIRouter, Depends, Query, UploadFile, File, Form
from typing import Optional
from app.models.complaint import (
    ComplaintCreateRequest,
    ComplaintStatusUpdateRequest,
    ComplaintListResponse,
    ComplaintDetailResponse,
    PaginatedComplaintsResponse,
    ComplaintCategory,
    ComplaintStatus,
)
from app.core.dependencies import get_current_user, get_optional_user

router = APIRouter(prefix="/complaints", tags=["Complaints"])


@router.post("/", status_code=201, summary="Submit a new complaint")
async def create_complaint(
    constituency_id: str = Form(...),
    raw_text: Optional[str] = Form(None),
    latitude: Optional[float] = Form(None),
    longitude: Optional[float] = Form(None),
    audio: Optional[UploadFile] = File(None),
    images: list[UploadFile] = File(default=[]),
    _user=Depends(get_optional_user),
):
    """
    Accept multipart complaint submission from the citizen portal.
    Stores complaint and queues AI pipeline processing in background.
    """
    # TODO: Implement in Phase 2
    return {"message": "Complaint received — processing queued", "complaint_id": "stub-id"}


@router.get("/", response_model=PaginatedComplaintsResponse, summary="List complaints")
async def list_complaints(
    constituency_id: Optional[str] = Query(None),
    category: Optional[ComplaintCategory] = Query(None),
    status: Optional[ComplaintStatus] = Query(None),
    date_from: Optional[str] = Query(None, description="ISO date string"),
    date_to: Optional[str] = Query(None, description="ISO date string"),
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    sort_by: str = Query("created_at"),
    sort_order: str = Query("desc"),
    current_user=Depends(get_current_user),
):
    """
    Paginated list of complaints with flexible filtering for the MP dashboard.
    """
    # TODO: Implement in Phase 2
    return PaginatedComplaintsResponse(items=[], total=0, page=page, per_page=per_page, total_pages=0)


@router.get("/{complaint_id}", response_model=ComplaintDetailResponse, summary="Get complaint detail")
async def get_complaint(
    complaint_id: str,
    current_user=Depends(get_current_user),
):
    """Full complaint detail including all AI enrichment fields."""
    # TODO: Implement in Phase 2
    raise NotImplementedError


@router.patch("/{complaint_id}/status", summary="Update complaint status")
async def update_complaint_status(
    complaint_id: str,
    body: ComplaintStatusUpdateRequest,
    current_user=Depends(get_current_user),
):
    """MP updates a complaint's status (e.g. mark as resolved)."""
    # TODO: Implement in Phase 2
    return {"complaint_id": complaint_id, "status": body.status}
