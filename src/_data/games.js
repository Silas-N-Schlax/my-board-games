const fs = require('fs');
const path = require('path');

module.exports = function() {
  try {
    // Read the JSON file
    const jsonPath = path.join(__dirname, '..', 'assets', 'files', 'games.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    const games = JSON.parse(jsonData);
    
    // Sort games alphabetically by name
    const sortedGames = games.sort((a, b) => {
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });
    // console.log('Sorted games:', sortedGames);
    return sortedGames;
  } catch (error) {
    console.error('Error reading or parsing games.json:', error);
    return [];
  }
};
