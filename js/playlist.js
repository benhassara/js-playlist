
//Playlist class
function Playlist(name) {
  this.name = name;
  this.songs = [];
  this.currentSong = null;
}

Playlist.prototype.addSong = function(song) {
  //add a song to the Playlist
  //song is a Song obj

  this.songs.push(song);
};

Playlist.prototype.find = function(song) {
  //find the song in the Playlist, return loc
  var index = -1;
  this.songs.forEach(function(q, i){
    if (q.title === song.title && q.artist === song.artist)
      index = i;
  });

  return index;
};

Playlist.prototype.getArtists = function(){
  //get all artists in the Playlist
  return this.songs.map(function(a){return a.artist;});
};

Playlist.prototype.currentlyPlaying = function() {
  //return currently playing song
  return this.songs[this.currentSong];
};

Playlist.prototype.play = function() {
  //start the playlist
  this.currentSong = 0;
};
