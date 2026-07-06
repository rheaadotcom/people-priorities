"""
Analytics router — provides aggregated stats, trends, and geo data for the MP dashboard.
"""

from fastapi import APIRouter, Depends, Query
from typing import Optional
from app.models.analytics import (
    DashboardSummary,
    AnalyticsTrendsResponse,
    GeoAnalyticsResponse,
)
from app.core.dependencies import get_current_user

router = APIRouter(prefix="/analytics", tags=["Analytics"])


@router.get("/summary", response_model=DashboardSummary, summary="Dashboard KPI summary")
async def get_summary(
    constituency_id: Optional[str] = Query(None),
    current_user=Depends(get_current_user),
):
    """
    Returns top-level KPI metrics for the dashboard overview cards.
    Includes complaint counts by status, sentiment summary, and week-over-week change.
    """
    # TODO: Implement MongoDB aggregation pipeline
    return DashboardSummary(
        total_complaints=0, pending_count=0, in_progress_count=0,
        resolved_count=0, dismissed_count=0, duplicate_count=0,
        this_week_count=0, this_month_count=0,
        change_from_last_week=0.0, change_from_last_month=0.0,
        top_category=None, top_severity=None, avg_resolution_days=None,
        sentiment={"average_score": 0.0, "positive_count": 0, "neutral_count": 0, "negative_count": 0},
        last_updated=__import__("datetime").datetime.utcnow(),
    )


@router.get("/trends", response_model=AnalyticsTrendsResponse, summary="Complaint trends over time")
async def get_trends(
    constituency_id: Optional[str] = Query(None),
    granularity: str = Query("daily", pattern="^(daily|weekly|monthly)$"),
    days: int = Query(30, ge=7, le=365),
    current_user=Depends(get_current_user),
):
    """
    Time-series complaint counts for Recharts line/bar charts.
    Supports daily, weekly, and monthly granularity.
    """
    # TODO: Implement aggregation
    return AnalyticsTrendsResponse(daily=[], weekly=[], monthly=[], by_category=[], by_status=[])


@router.get("/geo", response_model=GeoAnalyticsResponse, summary="Geographic complaint density")
async def get_geo_analytics(
    constituency_id: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    current_user=Depends(get_current_user),
):
    """
    Returns geo-clustered complaint data for the Leaflet heatmap layer.
    """
    # TODO: Implement geo aggregation
    return GeoAnalyticsResponse(clusters=[], total_geo_tagged=0)
