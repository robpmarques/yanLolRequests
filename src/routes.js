const { Router } = require('express');
const axios = require('axios');

const routes = new Router();

const config = {
  headers: {
    "Access-Control-Request-Headers": "X-PINGOTHER, Content-Type"
  }
};

routes.get('/matchlist/:userId', async (req, res) => {

  let userId = req.params.userId;

  const matchList = await axios.get(`https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${userId}?endIndex=18&beginIndex=1&api_key=${process.env.apiKey}`, config);

  res.json({ matchList: matchList.data.matches });

});

routes.get('/match/:matchId', async (req, res) => {

  let matchId = req.params.matchId;

  console.log(process.env.TESTE)

  const match = await axios.get(`https://br1.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${process.env.apiKey}`, config);

  res.json({ match: match.data });
});

module.exports = routes;