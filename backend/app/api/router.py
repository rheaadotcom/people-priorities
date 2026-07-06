from fastapi import APIRouter
from app.api.endpoints import complaints

api_router = APIRouter()
api_router.include_router(complaints.router, prefix="/complaints", tags=["Complaints"])
