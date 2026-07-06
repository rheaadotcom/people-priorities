# Service stubs — business logic to be implemented in Phase 2

from app.db.mongodb import get_complaints_collection
from app.models.complaint import ComplaintDB, ComplaintCreateRequest, ProcessingStatus
from datetime import datetime


class ComplaintService:
    """
    Handles all complaint CRUD operations and triggers AI pipeline.
    """

    async def create(self, data: ComplaintCreateRequest, audio_url: str | None, image_urls: list[str]) -> str:
        """Insert a new complaint and return its MongoDB ID."""
        # TODO: Implement
        raise NotImplementedError

    async def get_by_id(self, complaint_id: str) -> dict | None:
        """Fetch a single complaint by ID."""
        # TODO: Implement
        raise NotImplementedError

    async def list_complaints(self, filters: dict, page: int, per_page: int) -> tuple[list, int]:
        """Return paginated list and total count."""
        # TODO: Implement MongoDB find with filters
        raise NotImplementedError

    async def update_status(self, complaint_id: str, status: str) -> bool:
        """Update complaint status, return True if updated."""
        # TODO: Implement
        raise NotImplementedError


complaint_service = ComplaintService()
