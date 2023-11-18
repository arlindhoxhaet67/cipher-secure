/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex audio player system with different features like play, pause, stop, volume control, and playlist management.
*/

// Define the AudioPlayer class
class AudioPlayer {
  constructor() {
    this.isPlaying = false;
    this.volume = 50;
    this.playlist = [];
    this.currentTrackIndex = -1;
  }
  
  // Add a track to the playlist
  addTrack(track) {
    this.playlist.push(track);
  }
  
  // Remove a track from the playlist
  removeTrack(index) {
    if (index >= 0 && index < this.playlist.length) {
      this.playlist.splice(index, 1);
    }
  }
  
  // Clear the playlist
  clearPlaylist() {
    this.playlist = [];
    this.currentTrackIndex = -1;
  }
  
  // Play a track
  play(trackIndex) {
    if (this.playlist.length > 0 && !this.isPlaying) {
      if (trackIndex >= 0 && trackIndex < this.playlist.length) {
        this.currentTrackIndex = trackIndex;
      } else {
        this.currentTrackIndex = 0;
      }
      
      this.isPlaying = true;
      console.log('Playing: ' + this.playlist[this.currentTrackIndex]);
    }
  }
  
  // Pause the current track
  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log('Paused: ' + this.playlist[this.currentTrackIndex]);
    }
  }
  
  // Stop playing the current track
  stop() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.currentTrackIndex = -1;
      console.log('Stopped playback');
    }
  }
  
  // Increase the volume by 10
  increaseVolume() {
    if (this.volume < 100) {
      this.volume += 10;
      console.log('Volume increased to: ' + this.volume);
    }
  }
  
  // Decrease the volume by 10
  decreaseVolume() {
    if (this.volume > 0) {
      this.volume -= 10;
      console.log('Volume decreased to: ' + this.volume);
    }
  }
}

// Instantiate an AudioPlayer object
const player = new AudioPlayer();

// Add some tracks to the playlist
player.addTrack('Track 1');
player.addTrack('Track 2');
player.addTrack('Track 3');

// Play the first track
player.play();

// Increase volume twice
player.increaseVolume();
player.increaseVolume();

// Pause playback
player.pause();

// Play the next track
player.play(player.currentTrackIndex + 1);

// Decrease volume once
player.decreaseVolume();

// Stop playback
player.stop();

// Clear the playlist
player.clearPlaylist();