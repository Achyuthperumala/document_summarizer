from fastapi import UploadFile, File, Form
from fastapi.responses import JSONResponse
from . import app
from .summarizer import summarize_document
import os

UPLOAD_DIR = "./uploaded_files"

if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())
    return {"filename": file.filename}

@app.post("/summarize")
async def get_summary(file_name: str = Form(...)):
    file_path = os.path.join(UPLOAD_DIR, file_name)
    if not os.path.exists(file_path):
        return JSONResponse(content={"error": "File not found"}, status_code=404)

    summary = summarize_document(file_path)
    return {"summary": summary}
