# Document Summarizer

This project consists of a backend and a frontend for summarizing documents. The backend is built with FastAPI, and the frontend with React.

## Setup

1. Clone the repository.
2. Navigate to the project root directory.

### Backend

1. Navigate to the `backend` directory.
2. Create a virtual environment and activate it.
3. Install dependencies: `pip install -r requirements.txt`
4. Run the server: `uvicorn app.main:app --reload`

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Docker

To run the entire application using Docker Compose:

1. Build and start the containers: `docker-compose up --build`
2. Access the frontend at `http://localhost:3000`
3. The backend API will be available at `http://localhost:8000`

## Usage

- Upload a document via the frontend.
- The backend processes the document and returns a summary.
- The summary is displayed on the frontend.

## Notes

- Ensure the backend server is running and accessible for the frontend to make API calls.
- You can configure the ports and other settings in the Docker and backend/frontend configuration files.
