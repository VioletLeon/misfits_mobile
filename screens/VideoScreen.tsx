import { Video, AVPlaybackStatus } from 'expo-av';
import { View } from 'react-native';
import * as React from 'react';

const VideoScreen = ({ navigation, route }: any) => {
  const video = React.useRef(null);
  const { videoId } = route.params;
  return (
    <View className="w-[100vw] h-[100vw]">
      <Video ref={video} source={{ uri: `https://stream.mux.com/${videoId}.m3u8` }} className="w-[100%] h-[100%]" shouldPlay={true} isMuted={false} volume={1.0} useNativeControls/>
    </View>
  );
};

export default VideoScreen;
