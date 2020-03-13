// == Import
import axios from 'axios';
import { LOAD_TRAINER, saveTrainer, LOAD_ALL_TRAINERS, displayAllTrainers } from 'src/actions/trainer';

const trainerMiddleware = (store) => (next) => (action) => {
  const trainerId = 2;
  switch (action.type) {
    case LOAD_TRAINER:
      axios({
        method: 'GET',
        url: `http://54.89.22.26/api/trainer/${trainerId}`,
      })
      .then((response) => {
        console.log(response.data);
        store.dispatch(saveTrainer(response.data));       
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case LOAD_ALL_TRAINERS:
      axios({
        method: 'GET',
        url: `http://54.89.22.26/api/trainers`,
      })
      .then((response) => {
        console.log(response.data);
        store.dispatch(displayAllTrainers(response.data));       
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    default:
      break;
  }
  next(action);
};

export default trainerMiddleware;
