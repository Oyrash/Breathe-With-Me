import carousel from '../lib/carousel';
import { saveState } from '../globalState';
import * as avatars from '../templates/avatars';

const avatarCtrl = () => {
  const landingButton = document.getElementById('landing-button');
  landingButton.addEventListener('click', () => {
    const avatarIndex = $('.active').index('.carousel_item');
    let avatar;
    let granimState;
    switch (avatarIndex) {
      case 0:
        avatar = avatars.cat;
        granimState = 'default-state';
        break;
      case 1:
        avatar = avatars.dog;
        granimState = 'dog-state';
        break;
      case 2:
        avatar = avatars.panda;
        granimState = 'panda-state';
        break;
      default:
        avatar = avatars.cat;
        granimState = 'default-state';
        break;
    }
    saveState({ avatar, granimState });
  });
  const car = carousel();
  car.init();
};

export default avatarCtrl;
