const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());


app.get('/api/data', async (req, res) => {
  try {
    const username = 'maptest';
      const password = 'zdXfLjkerHkt2Bxb';
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    const response = await axios.get('http://3.233.221.252:8080/v1/mappoints', {
        headers: {
          Authorization: authHeader
        }
      });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('',()=>{
    console.log('backend started');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
