import { NativeModules, Platform } from 'react-native';
import Paystack from './paystack';
import * as paystackProps from './types';

// export default NativeModules.ReactNativePaystackWebviewModule;

const LINKING_ERROR =
  `The package 'paystack_webview' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const PaystackWebview = NativeModules.PaystackWebview
  ? NativeModules.PaystackWebview
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// export function multiply(a: number, b: number): Promise<number> {
//   return PaystackWebview.multiply(a, b);
// }

export { Paystack, paystackProps };

export default PaystackWebview;
