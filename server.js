const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.post('/inscription', (req, res) => {
  const { prenom, nom, email, password } = req.body;


  console.log("Données reçues :");
  console.log(prenom, nom, email, password);

  res.send(`Reçu : ${prenom} ${nom} (${email})`);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

