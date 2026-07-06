"""
Pydantic models for Complaints.
Includes both database (ODM-style) and API request/response schemas.
"""

from __future__ import annotations
from datetime import datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field, field_validator
from bson import ObjectId


# ── Enums ─────────────────────────────────────────────────────────────────────

class ComplaintCategory(str, Enum):
    ROAD = "ROAD"
    WATER = "WATER"
    ELECTRICITY = "ELECTRICITY"
    HEALTH = "HEALTH"
    EDUCATION = "EDUCATION"
    SANITATION = "SANITATION"
    AGRICULTURE = "AGRICULTURE"
    EMPLOYMENT = "EMPLOYMENT"
    SECURITY = "SECURITY"
    OTHER = "OTHER"


class ComplaintSeverity(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class ComplaintStatus(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    RESOLVED = "RESOLVED"
    DISMISSED = "DISMISSED"


class ProcessingStatus(str, Enum):
    QUEUED = "QUEUED"
    PROCESSING = "PROCESSING"
    DONE = "DONE"
    FAILED = "FAILED"


# ── Sub-models ────────────────────────────────────────────────────────────────

class GeoPoint(BaseModel):
    type: str = "Point"
    coordinates: list[float]  # [longitude, latitude]


class AIEnrichment(BaseModel):
    """Fields populated by the AI pipeline after submission."""
    translated_text: Optional[str] = None
    language_detected: Optional[str] = None
    category: Optional[ComplaintCategory] = None
    subcategory: Optional[str] = None
    severity: Optional[ComplaintSeverity] = None
    ai_summary: Optional[str] = None
    sentiment_score: Optional[float] = None  # -1.0 to 1.0
    keywords: list[str] = []
    is_duplicate: bool = False
    duplicate_of: Optional[str] = None  # ObjectId as string


# ── Database Model ─────────────────────────────────────────────────────────────

class ComplaintDB(BaseModel):
    """Full document as stored in MongoDB."""
    id: Optional[str] = Field(None, alias="_id")
    constituency_id: str
    citizen_id: Optional[str] = None

    # Raw input
    raw_text: Optional[str] = None
    audio_url: Optional[str] = None
    image_urls: list[str] = []
    location: Optional[GeoPoint] = None

    # Status
    status: ComplaintStatus = ComplaintStatus.PENDING
    processing_status: ProcessingStatus = ProcessingStatus.QUEUED

    # AI enrichment (filled after processing)
    ai: AIEnrichment = Field(default_factory=AIEnrichment)

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {"populate_by_name": True, "arbitrary_types_allowed": True}


# ── API Request / Response Schemas ────────────────────────────────────────────

class ComplaintCreateRequest(BaseModel):
    """Incoming from citizen submission form."""
    constituency_id: str
    raw_text: Optional[str] = None
    location: Optional[GeoPoint] = None
    # audio_url and image_urls are set after upload by storage service


class ComplaintStatusUpdateRequest(BaseModel):
    status: ComplaintStatus


class ComplaintListResponse(BaseModel):
    id: str
    constituency_id: str
    raw_text: Optional[str]
    category: Optional[ComplaintCategory]
    severity: Optional[ComplaintSeverity]
    status: ComplaintStatus
    processing_status: ProcessingStatus
    ai_summary: Optional[str]
    sentiment_score: Optional[float]
    location: Optional[GeoPoint]
    image_urls: list[str]
    is_duplicate: bool
    created_at: datetime


class ComplaintDetailResponse(ComplaintListResponse):
    """Full complaint data including all AI enrichment."""
    translated_text: Optional[str]
    language_detected: Optional[str]
    subcategory: Optional[str]
    keywords: list[str]
    duplicate_of: Optional[str]
    audio_url: Optional[str]
    updated_at: datetime


class PaginatedComplaintsResponse(BaseModel):
    items: list[ComplaintListResponse]
    total: int
    page: int
    per_page: int
    total_pages: int
