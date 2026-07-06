"""
Auth router — MP login and token management.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from app.models.user import LoginRequest, TokenResponse
from app.core.dependencies import get_current_user

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/login", response_model=TokenResponse, summary="MP Login")
async def login(body: LoginRequest):
    """
    Authenticate an MP with email + password.
    Returns a JWT access token valid for 24 hours.
    """
    # TODO: Implement real auth against MongoDB in Phase 2
    # For hackathon scaffolding, return a stub response
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Auth not yet implemented — coming in Phase 2",
    )


@router.get("/me", summary="Get current user profile")
async def get_me(current_user=Depends(get_current_user)):
    """Returns the authenticated MP's profile."""
    return current_user


@router.post("/logout", summary="Logout (client-side token removal)")
async def logout():
    """
    Since JWTs are stateless, logout is handled client-side by removing the token.
    This endpoint exists for audit logging purposes.
    """
    return {"message": "Logged out successfully"}
