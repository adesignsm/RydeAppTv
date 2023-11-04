import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video, ResizeMode } from 'expo-av';

import VIDEO1 from './Media/video1.mp4';
import VIDEO2 from './Media/video2.mp4';
import VIDEO3 from './Media/video3.mp4';

const {width, height} = Dimensions.get('window');

export default function App() {
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  lockOrientation(); //delete this line then readd and reload app

  return (
    <SafeAreaView style={styles.container}>
       {/* <Video style={styles.video} source={VIDEO1} useNativeControls resizeMode={ResizeMode.CONTAIN} shouldPlay={false} /> */}
       {/* <Video style={styles.video} source={VIDEO2} useNativeControls resizeMode={ResizeMode.CONTAIN} shouldPlay={false} /> */}
       <Video style={styles.video} source={VIDEO3} useNativeControls resizeMode={ResizeMode.CONTAIN} shouldPlay={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width < 1000 ? 20 : 40,
  },
  video: {
    width: '100%',
    height: '100%',
  }
});
