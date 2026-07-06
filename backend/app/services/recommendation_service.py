# Recommendation Engine stub — scoring and ranking logic

from app.db.mongodb import get_projects_collection, get_complaints_collection


class RecommendationService:
    """
    Scores and ranks development project recommendations using a weighted formula:

    Score = w1×(complaint_count)
          + w2×(severity_weighted_sum)   [CRITICAL=4, HIGH=3, MED=2, LOW=1]
          + w3×(sentiment_negativity)
          + w4×(dataset_gap_indicator)
          + w5×(recency_decay_factor)    [recent complaints weighted more]
    
    Weights default: w1=0.25, w2=0.30, w3=0.15, w4=0.20, w5=0.10
    """

    WEIGHTS = {
        "complaint_count": 0.25,
        "severity": 0.30,
        "sentiment": 0.15,
        "dataset_gap": 0.20,
        "recency": 0.10,
    }

    async def calculate_scores(self, constituency_id: str) -> list[dict]:
        """Compute scores for all project categories in a constituency."""
        # TODO: Implement aggregation pipeline + scoring
        raise NotImplementedError

    async def get_ranked_projects(self, constituency_id: str, limit: int = 10) -> list:
        """Return top-N ranked projects for a constituency."""
        # TODO: Implement
        raise NotImplementedError

    async def persist_rankings(self, constituency_id: str, scores: list[dict]) -> None:
        """Upsert ranked projects into MongoDB."""
        # TODO: Implement
        raise NotImplementedError


recommendation_service = RecommendationService()
