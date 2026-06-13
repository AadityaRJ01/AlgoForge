from fastapi import APIRouter
from pydantic import BaseModel
from app.services.sandbox import execute_code

# We keep this generic. The master router will handle versioning!
router = APIRouter(tags=["Submissions"])

class CodeSubmissionRequest(BaseModel):
    code: str
    language: str
    input_data: str

@router.post("/execute", summary="Execute Code Submission in Sandbox")
async def execute_submission(payload: CodeSubmissionRequest):
    result = execute_code(
        code=payload.code,
        language=payload.language,
        input_data=payload.input_data
    )
    return result