const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE = "./notes.json";

/* Read notes */
function readNotes() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

/* Save notes */
function saveNotes(notes) {
  fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
}

/* GET all notes */
app.get("/notes", (req, res) => {
  res.json(readNotes());
});

/* ADD note */
app.post("/notes", (req, res) => {
  const notes = readNotes();
  const newNote = {
    id: Date.now(),
    text: req.body.text
  };
  notes.push(newNote);
  saveNotes(notes);
  res.status(201).json(newNote);
});

/* DELETE note */
app.delete("/notes/:id", (req, res) => {
  let notes = readNotes();
  notes = notes.filter(n => n.id != req.params.id);
  saveNotes(notes);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
