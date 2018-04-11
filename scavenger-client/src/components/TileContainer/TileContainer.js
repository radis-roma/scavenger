import React, { Component } from 'react';
import GameTile from '../GameTile/GameTile.js';
import './TileContainer.css';

class TileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCollection: [
        {
          name: 'Warcraft III: The Frozen Throne',
          lobbyList: [
            {
              hostName: 'boybutcher',
              region: 'North America',
              playerCount: 1,
              playerCap: 8,
              description: 'let\'s play Island Troll Tribes!\nThe lobby name is \'cats\'\n the password is \'1234\'',
            },
            {
              hostName: 'braunstein',
              region: 'North America',
              playerCount: 1,
              playerCap: 2,
              description: '1v1 me on Booty Bay.'
            }
          ],
        },
        {
          name: 'Halo: Reach',
          lobbyList:[
            {
              hostName: 'foosh',
              region: 'East Asia',
              playerCount: 1,
              playerCap: 16,
              description: 'CTF on Bloodgulch'
            }
          ]
        }
      ],
    }
  }

  render() {
    const {
      gameCollection,
    } = this.state;

    return (
      <div 
        className='tile-container'
      >
        {
          gameCollection.map((gameData, i) => {
            return (
              <GameTile 
                key={i}
                gameData={gameData}
              />
            )
          })
        }
      </div>
    )
  }
}

export default TileContainer;
