# AI Service stub — Gemini API integration to be implemented in Phase 5

import google.generativeai as genai
from app.config import get_settings


class AIService:
    """
    Orchestrates all Gemini API calls for the AI enrichment pipeline.
    
    Pipeline order per complaint:
    1. transcribe()    — audio → text
    2. translate()     — regional language → English
    3. classify()      — category + severity + subcategory
    4. deduplicate()   — find similar existing complaints
    5. summarize()     — generate 2-sentence AI summary
    6. sentiment()     — score -1.0 to 1.0
    """

    def __init__(self):
        settings = get_settings()
        if settings.gemini_api_key:
            genai.configure(api_key=settings.gemini_api_key)
            self.model = genai.GenerativeModel(settings.gemini_model)
        else:
            self.model = None

    async def transcribe(self, audio_bytes: bytes, mime_type: str = "audio/webm") -> dict:
        """Convert audio to text using Gemini multimodal."""
        # TODO: Implement
        raise NotImplementedError

    async def translate(self, text: str, source_lang: str | None = None) -> dict:
        """Translate text to English."""
        # TODO: Implement
        raise NotImplementedError

    async def classify(self, text: str) -> dict:
        """Return category, subcategory, severity."""
        # TODO: Implement
        raise NotImplementedError

    async def deduplicate(self, text: str, constituency_id: str) -> dict:
        """Check for semantically similar existing complaints."""
        # TODO: Implement embedding + cosine similarity
        raise NotImplementedError

    async def summarize(self, text: str) -> str:
        """Generate a concise 2-sentence summary."""
        # TODO: Implement
        raise NotImplementedError

    async def sentiment(self, text: str) -> float:
        """Return sentiment score between -1.0 (very negative) and 1.0 (very positive)."""
        # TODO: Implement
        raise NotImplementedError

    async def generate_insights(self, constituency_id: str, complaint_summaries: list[str]) -> dict:
        """Generate constituency-level narrative insights."""
        # TODO: Implement
        raise NotImplementedError


ai_service = AIService()
