const express = require('express');
const app     = express();

// Default for env
const PORT       = process.env.PORT || 8080;
const MSG_HEALTH = process.env.MSG_HEALTH || "This is working";
const MSG_SECRET = process.env.MSG_SECRET || "no secret here!";
const ENVIRONMENT = process.env.ENVIRONMENT || "dev";

app.get('/all', (req, res) => {
  res.status(200).json({
    status: 200,
    env: ENVIRONMENT,
    message: MSG_HEALTH,
    secret: MSG_SECRET
  });
});

app.get('/', (req, res) => {
  res.status(202).json({
    status: 202,
    env: ENVIRONMENT,
    secret: MSG_SECRET
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 200,
    env: ENVIRONMENT,
    message: MSG_HEALTH
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
