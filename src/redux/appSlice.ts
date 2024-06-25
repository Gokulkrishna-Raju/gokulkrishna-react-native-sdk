import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { AppState } from './AppState';

// Initial State
const initialState: AppState = {
  isVisible: false,
  position: 'bottom',
  spotcheckURL: '',
  spotcheckID: 0,
  spotcheckContactID: 0,
  afterDelay: 0,
  maxHeight: 0.5,
  currentQuestionHeight: 0,
  isFullScreenMode: true,
  isBannerImageOn: false,
  triggerToken: '',
  closeButtonStyle: {},
  isCloseButtonEnabled: false,
  isSpotPassed: false,
  isChecksPassed: false,
  customEventsSpotChecks: [],
  targetToken: '',
  domainName: '',
  userDetails: {},
  variables: {},
  customProperties: {},
  traceId: '',
};

// Create a slice
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateProperty: <K extends keyof AppState>(
      state: AppState,
      action: PayloadAction<{ key: K; value: AppState[K] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

// Export the action
export const { updateProperty } = appSlice.actions;