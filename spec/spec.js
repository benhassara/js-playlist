var Song = require('../js/song.js');
var Playlist = require('../js/playlist.js');

describe('Playlist', function() {

  beforeEach(function(){
    var playlist = new Playlist('Mixtape');
    var stairway = new Song('Stairway to Heaven',
                            'Led Zeppelin',
                            8);
    var tweezer = new Song('Tweezer', 'Phish', 30);
  });

  describe('#addSong', function(){
    it('should add a song to the Playlist', function() {
      playlist.addSong(stairway);
      expect(playlist.songs).toEqual([stairway]);
    });
  });

  describe('#find', function(){
    it('should return index of the song in the playlist', function(){
      playlist.addSong(stairway);
      playlist.addSong(tweezer);
      expect(playlist.find(tweezer)).toEqual(1);
    });
  });

  describe('#getArtists', function(){
    it('should return a list of artists in the playlist', function(){
      playlist.addSong(stairway);
      expect(playlist.getArtists()).toEqual(['Led Zeppelin']);
      playlist.addSong(tweezer);
      expect(playlist.getArtists()).toEqual(['Led Zeppelin', 'Phish']);
    });
  });

  describe('#currentlyPlaying', function(){
    it('should return the index of the currently playing song', function(){
      playlist.currentSong = 0;
      expect(playlist.currentlyPlaying()).toEqual(0);
    });
  });
});
