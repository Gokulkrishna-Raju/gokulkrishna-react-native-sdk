import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'gokulkrishna-react-native-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type GokulkrishnaReactNativeSdkProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'GokulkrishnaReactNativeSdkView';

export const GokulkrishnaReactNativeSdkView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<GokulkrishnaReactNativeSdkProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
