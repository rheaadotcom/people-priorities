"""
AI router — exposes Gemini-powered endpoints for transcription, translation, and insights.
"""

from fastapi import APIRouter, Depends, UploadFile, File
from pydantic import BaseModel
from typing import Optional
from app.core.dependencies import get_current_user, get_optional_user

router = APIRouter(prefix="/ai", tags=["AI"])


class TranscribeResponse(BaseModel):
    text: str
    language_detected: str
    confidence: Optional[float] = None


class TranslateRequest(BaseModel):
    text: str
    source_language: Optional[str] = None  # auto-detect if None
    target_language: str = "en"


class TranslateResponse(BaseModel):
    original_text: str
    translated_text: str
    source_language: str
    target_language: str


class InsightsResponse(BaseModel):
    narrative: str           # Gemini-generated AI summary paragraph
    key_issues: list[str]    # Bullet points
    recommended_actions: list[str]
    confidence: Optional[float] = None


@router.post("/transcribe", response_model=TranscribeResponse, summary="Audio → text transcription")
async def transcribe_audio(
    audio: UploadFile = File(...),
    _user=Depends(get_optional_user),
):
    """
    Sends audio file to Gemini multimodal API for speech-to-text.
    Returns transcript with detected language.
    """
    # TODO: Implement Gemini multimodal transcription
    return TranscribeResponse(text="Stub transcript", language_detected="en")


@router.post("/translate", response_model=TranslateResponse, summary="Translate text to English")
async def translate_text(
    body: TranslateRequest,
    _user=Depends(get_optional_user),
):
    """
    Translates text from regional Indian languages to English using Gemini.
    """
    # TODO: Implement Gemini translation
    return TranslateResponse(
        original_text=body.text,
        translated_text=body.text,
        source_language=body.source_language or "auto",
        target_language=body.target_language,
    )


@router.get("/insights", response_model=InsightsResponse, summary="AI-generated constituency insights")
async def get_insights(
    constituency_id: str,
    current_user=Depends(get_current_user),
):
    """
    Calls Gemini to generate a human-readable narrative summary of
    complaint patterns and recommended development priorities for the constituency.
    """
    # TODO: Implement Gemini insights generation
    return InsightsResponse(
        narrative="AI insights will appear here once Gemini integration is complete.",
        key_issues=[],
        recommended_actions=[],
    )
