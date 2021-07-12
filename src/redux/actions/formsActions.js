import * as TYPES from './types';
import * as formService from '../../services/forms';

export const contactUs = (payload) => async (dispatch) => {
  try {
    await formService.contactUs(payload);
  } catch (error) {
    alert('Error');
  }
};

export const applyForJob = (payload) => async (dispatch) => {
  try {
    await formService.applyForJob(payload);
  } catch (error) {
    alert('Error');
  }
};
