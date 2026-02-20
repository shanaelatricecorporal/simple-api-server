# Simple API Server

A beginner friendly REST API built with Node.js and Express.

## Features
- Create notes
- View notes
- Delete notes
- JSON file storage

## Endpoints

GET /notes  
Returns all notes

POST /notes  
Body:
{
  "text": "Your note"
}

DELETE /notes/:id  
Deletes a note

## Run locally
npm install
npm start
