import Player from '../Player';
import playerStub from './stubs/player';

describe('Player Model',()=> {
  let playerInstance = null;
  
  beforeEach(()=>{
    playerInstance = new Player(playerStub);
  });

  it('Check all getters', ()=> {
    expect(playerInstance.getId()).toBe(playerStub.id);
    expect(playerInstance.getActive()).toBe(playerStub.active);
    expect(playerInstance.getName()).toBe(playerStub.name);
    expect(playerInstance.getAge()).toBe(playerStub.age);
    expect(playerInstance.getRole()).toBe(playerStub.role);
    expect(playerInstance.getTeam()).toBe(playerStub.team);
    expect(playerInstance.getGoals()).toBe(playerStub.goals);
    expect(playerInstance.getGames()).toBe(playerStub.games);
    expect(playerInstance.getLocation()).toBe(playerStub.location);
    expect(playerInstance.getRedCards()).toBe(playerStub.red_cards);
  });
  it('check card formatter function', ()=> {
    expect(playerInstance.formatInfoForCard()).toMatchObject({
      title: playerStub.name,
      subtitle: playerStub.role,
      stats: expect.arrayContaining([
        {
          label: "Team",
          value: playerStub.team,
        },
        {
          label: "Location",
          value: playerStub.location,
        },
        {
          label: "Age",
          value: playerStub.age,
        },
        {
          label: "Games",
          value: playerStub.games,
        },
        {
          label: "Goals",
          value: playerStub.goals,
        },
        {
          label: "Red Cards",
          value: playerStub.red_cards,
        },
      ])
    });
  });
  
  
  
})