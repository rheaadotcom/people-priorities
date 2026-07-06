"""
Pydantic models for Users (MPs and admin).
"""

from __future__ import annotations
from datetime import datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field, EmailStr


class UserRole(str, Enum):
    MP = "MP"
    ADMIN = "ADMIN"
    VIEWER = "VIEWER"


class UserDB(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    email: str
    hashed_password: str
    full_name: str
    role: UserRole = UserRole.MP
    constituency_id: Optional[str] = None
    constituency_name: Optional[str] = None
    state: Optional[str] = None
    party: Optional[str] = None
    avatar_url: Optional[str] = None
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {"populate_by_name": True}


class LoginRequest(BaseModel):
    email: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int  # seconds
    user: "UserPublic"


class UserPublic(BaseModel):
    id: str
    email: str
    full_name: str
    role: UserRole
    constituency_id: Optional[str]
    constituency_name: Optional[str]
    state: Optional[str]
    party: Optional[str]
    avatar_url: Optional[str]
