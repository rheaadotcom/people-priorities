from bson import ObjectId
from datetime import datetime, timezone
from app.db.mongodb import get_database
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate, ComplaintDB
from typing import List, Optional

COLLECTION_NAME = "complaints"

async def create_complaint(complaint: ComplaintCreate) -> ComplaintDB:
    db = get_database()
    
    complaint_dict = complaint.model_dump()
    
    now = datetime.now(timezone.utc)
    complaint_dict["status"] = "pending"
    complaint_dict["ai_processing_status"] = "pending"
    complaint_dict["created_at"] = now
    complaint_dict["updated_at"] = now
    
    result = await db[COLLECTION_NAME].insert_one(complaint_dict)
    
    created_complaint = await db[COLLECTION_NAME].find_one({"_id": result.inserted_id})
    return ComplaintDB(**created_complaint)

async def get_complaint(id: str) -> Optional[ComplaintDB]:
    if not ObjectId.is_valid(id):
        return None
    db = get_database()
    complaint = await db[COLLECTION_NAME].find_one({"_id": ObjectId(id)})
    if complaint:
        return ComplaintDB(**complaint)
    return None

async def get_complaints(skip: int = 0, limit: int = 100) -> tuple[List[ComplaintDB], int]:
    db = get_database()
    cursor = db[COLLECTION_NAME].find().sort("created_at", -1).skip(skip).limit(limit)
    complaints = await cursor.to_list(length=limit)
    total = await db[COLLECTION_NAME].count_documents({})
    
    return [ComplaintDB(**c) for c in complaints], total

async def update_complaint(id: str, complaint_update: ComplaintUpdate) -> Optional[ComplaintDB]:
    if not ObjectId.is_valid(id):
        return None
        
    db = get_database()
    
    update_data = complaint_update.model_dump(exclude_unset=True)
    if not update_data:
        return await get_complaint(id)
        
    update_data["updated_at"] = datetime.now(timezone.utc)
    
    result = await db[COLLECTION_NAME].update_one(
        {"_id": ObjectId(id)},
        {"$set": update_data}
    )
    
    if result.modified_count == 1 or result.matched_count == 1:
        return await get_complaint(id)
    return None

async def delete_complaint(id: str) -> bool:
    if not ObjectId.is_valid(id):
        return False
        
    db = get_database()
    result = await db[COLLECTION_NAME].delete_one({"_id": ObjectId(id)})
    return result.deleted_count == 1
