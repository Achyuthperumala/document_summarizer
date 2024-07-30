from transformers import pipeline

# Initialize the summarization pipeline
summarizer = pipeline("summarization")

def summarize_document(file_path):
    with open(file_path, "r") as file:
        content = file.read()
    summary = summarizer(content, max_length=150, min_length=40, do_sample=False)[0]['summary_text']
    return summary
