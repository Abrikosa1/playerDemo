import { RadioPlayerInit } from './radioPlayer.js';
import { MusicPlayerInit } from './musicPlayer.js';
import { VideoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
      playerBlock = document.querySelectorAll('.player-block'),
      temp = document.querySelector('.temp');


const playerDeactivation = () => {
    temp.style.display = 'none';
    playerBlock.forEach(item => item.classList.remove('active'));
    playerBtn.forEach(item => item.classList.remove('active'));

};


playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    playerDeactivation();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
}));



RadioPlayerInit();
MusicPlayerInit();
VideoPlayerInit();