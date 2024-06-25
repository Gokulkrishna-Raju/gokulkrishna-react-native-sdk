export interface AppState {
    isVisible: boolean;
    position: string;
    spotcheckURL: string;
    spotcheckID: number;
    spotcheckContactID: number;
    afterDelay: number;
    maxHeight: number;
    currentQuestionHeight: number;
    isFullScreenMode: boolean;
    isBannerImageOn: boolean;
    triggerToken: string;
    closeButtonStyle: Record<string, string>;
    isCloseButtonEnabled: boolean;
    isSpotPassed: boolean;
    isChecksPassed: boolean;
    customEventsSpotChecks: Array<Record<string, any>>;
    targetToken: string;
    domainName: string;
    userDetails: Record<string, any>;
    variables: Record<string, any>;
    customProperties: Record<string, any>;
    traceId: string;
  }