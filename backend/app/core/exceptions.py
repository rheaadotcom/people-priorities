"""
Custom HTTP exception handlers and exception classes.
"""

from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse


class AppException(Exception):
    """Base application exception with HTTP status code."""
    def __init__(self, status_code: int, detail: str, error_code: str = "APP_ERROR"):
        self.status_code = status_code
        self.detail = detail
        self.error_code = error_code
        super().__init__(detail)


class NotFoundError(AppException):
    def __init__(self, resource: str, id: str):
        super().__init__(404, f"{resource} with id '{id}' not found", "NOT_FOUND")


class ValidationError(AppException):
    def __init__(self, detail: str):
        super().__init__(422, detail, "VALIDATION_ERROR")


class AIServiceError(AppException):
    def __init__(self, detail: str = "AI service unavailable"):
        super().__init__(503, detail, "AI_SERVICE_ERROR")


# ── Exception handlers ─────────────────────────────────────────────────────────

async def app_exception_handler(request: Request, exc: AppException) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": exc.error_code,
            "detail": exc.detail,
            "path": str(request.url),
        },
    )


async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": "HTTP_ERROR",
            "detail": exc.detail,
            "path": str(request.url),
        },
    )


async def unhandled_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    return JSONResponse(
        status_code=500,
        content={
            "error": "INTERNAL_SERVER_ERROR",
            "detail": "An unexpected error occurred. Please try again.",
            "path": str(request.url),
        },
    )
