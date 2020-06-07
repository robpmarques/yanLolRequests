const { Router } = require('express');
const axios = require('axios');

const routes = new Router();
const config = {
  headers: {
    "Access-Control-Request-Headers": "X-PINGOTHER, Content-Type",
    "X-Riot-Token": "RGAPI-dbe31bf4-3cc7-42b5-9b17-08f4ff07bb3b",
  }
};

routes.get('/matchlist/:userId', async (req, res) => {

  let userId = req.params.userId;

  const matchList = await axios.get(`https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${userId}?endIndex=18&beginIndex=1`, config);

  res.json({ matchList: matchList.data.matches });

});

routes.get('/yanId/', async (req, res) => {
  let yanId = await axios.get('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Kur%C3%B6o', config);

  return res.json({ accountId: yanId.data.accountId });
});

routes.get('/match/:matchId', async (req, res) => {

  let matchId = req.params.matchId;

  console.log(process.env.TESTE)

  const match = await axios.get(`https://br1.api.riotgames.com/lol/match/v4/matches/${matchId}`, config);

  res.json({ match: match.data });
});

module.exports = routes;