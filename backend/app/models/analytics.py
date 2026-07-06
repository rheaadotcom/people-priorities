"""
Pydantic models for Analytics aggregations and responses.
"""

from __future__ import annotations
from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class CategoryCount(BaseModel):
    category: str
    count: int
    percentage: float


class StatusCount(BaseModel):
    status: str
    count: int


class TrendDataPoint(BaseModel):
    date: str          # ISO date string "YYYY-MM-DD"
    count: int
    category: Optional[str] = None


class GeoCluster(BaseModel):
    """A density point for the heatmap."""
    latitude: float
    longitude: float
    intensity: int     # complaint count at this location


class SentimentSummary(BaseModel):
    average_score: float   # -1.0 to 1.0
    positive_count: int
    neutral_count: int
    negative_count: int


class DashboardSummary(BaseModel):
    """Top-level KPI data for the overview page."""
    total_complaints: int
    pending_count: int
    in_progress_count: int
    resolved_count: int
    dismissed_count: int
    duplicate_count: int
    this_week_count: int
    this_month_count: int
    change_from_last_week: float      # percentage
    change_from_last_month: float     # percentage
    top_category: Optional[str]
    top_severity: Optional[str]
    avg_resolution_days: Optional[float]
    sentiment: SentimentSummary
    last_updated: datetime


class AnalyticsTrendsResponse(BaseModel):
    daily: list[TrendDataPoint]
    weekly: list[TrendDataPoint]
    monthly: list[TrendDataPoint]
    by_category: list[CategoryCount]
    by_status: list[StatusCount]


class GeoAnalyticsResponse(BaseModel):
    clusters: list[GeoCluster]
    total_geo_tagged: int
    constituency_bounds: Optional[dict] = None  # GeoJSON bbox
