# Document Summarizer Frontend

This is the frontend for the Document Summarizer application. It allows users to upload documents and view the summarized content.

## Setup

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Project Structure

- `public/`: Public assets
- `src/`: Source files
  - `components/`: React components
  - `App.js`: Main application component
  - `index.js`: Entry point

## Usage

- Use the file upload component to select and upload a document.
- The summary will be displayed below the upload form.

## Dependencies

- React
- Axios

## Docker

To build and run the frontend using Docker:
1. `docker build -t document-summarizer-frontend .`
2. `docker run -p 3000:3000 document-summarizer-frontend`
