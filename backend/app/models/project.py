"""
Pydantic models for Projects (Development Recommendations).
"""

from __future__ import annotations
from datetime import datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field


class ProjectStatus(str, Enum):
    PROPOSED = "PROPOSED"
    APPROVED = "APPROVED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"
    ON_HOLD = "ON_HOLD"


class ProjectCategory(str, Enum):
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


class ScoreBreakdown(BaseModel):
    """Detailed scoring breakdown for transparency."""
    complaint_volume_score: float = 0.0
    severity_weighted_score: float = 0.0
    sentiment_score: float = 0.0
    dataset_gap_score: float = 0.0
    recency_score: float = 0.0
    total_score: float = 0.0


class ProjectDB(BaseModel):
    """Full project document as stored in MongoDB."""
    id: Optional[str] = Field(None, alias="_id")
    constituency_id: str
    name: str
    description: Optional[str] = None
    category: ProjectCategory
    status: ProjectStatus = ProjectStatus.PROPOSED
    rank: int = 0
    score_breakdown: ScoreBreakdown = Field(default_factory=ScoreBreakdown)
    complaint_count: int = 0
    estimated_impact: Optional[str] = None  # e.g. "~5,000 citizens affected"
    estimated_cost: Optional[float] = None   # in INR
    supporting_datasets: list[str] = []      # dataset source names
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {"populate_by_name": True}


class ProjectResponse(BaseModel):
    id: str
    name: str
    description: Optional[str]
    category: ProjectCategory
    status: ProjectStatus
    rank: int
    score: float
    score_breakdown: ScoreBreakdown
    complaint_count: int
    estimated_impact: Optional[str]
    estimated_cost: Optional[float]
    created_at: datetime
