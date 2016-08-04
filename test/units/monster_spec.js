describe('CustomMonsterMarker', function() {

  beforeEach(function() {
    var map;
    monster = new CustomMonsterMarker(34, map, 1);

  });

  it('starts at a lat and lng', function() {
    expect(monster.latlng).toEqual(34);
  });

  it('starts with monster id', function() {
    expect(monster.args).toEqual(1);
  });

  it('starts on a map', function() {
    expect(monster.map).toBeTruthy;
  });

});

