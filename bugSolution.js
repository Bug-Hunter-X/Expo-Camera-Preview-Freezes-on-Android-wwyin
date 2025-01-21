// bugSolution.js
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';


export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraRef, setCameraRef] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const restartCamera = async() => {
    if (cameraRef) {
      await cameraRef.stopRecording(); //stop recording if active
      await cameraRef.unloadAsync();
      await cameraRef.prepareAsync();
    }
  }

  if (hasPermission === null) {
    return <View />; // show spinner 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => setCameraRef(ref)}>
          {/* Add a button to trigger restartCamera() periodically  */}
          <Button title="Restart Camera" onPress={restartCamera} />
      </Camera>
    </View>
  );
}
