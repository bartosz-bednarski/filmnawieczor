const express = require("express");
const path = require("path");

const app = express();

// Serwuj pliki statyczne z katalogu 'dist'
app.use("/dist", express.static(path.join(__dirname, "dist")));

// Serwuj pliki statyczne z katalogu 'public'
app.use(express.static(path.join(__dirname, "public")));

// Ustawienie routingu dla strony głównej
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start serwera na porcie 3000 (możesz zmienić na inny port jeśli potrzebujesz)
const port = 3000;
app.listen(port, function () {
  console.log(`Serwer działa na porcie ${port}`);
});
