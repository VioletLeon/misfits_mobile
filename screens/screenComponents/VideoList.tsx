import { Pressable, View, Text, Image } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

type Props = {
  video: {
    id: number;
    playback_id: string;
    thumbnail: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
};

const StyledPressable = styled(Pressable)

const VideoList = ({ video }: Props) => {

  const navigation = useNavigation();

  const handlePress = (event) => {
    console.log(video.playback_id)
    navigation.navigate('Video', { videoId: video.playback_id });
  }

  return (
      <StyledPressable className={"w-[100%] h-[10%] bg-slate-200 flex flex-row border-b-2 border-slate-500 overflow-hidden hover:bg-slate-500 hover:border-slate-200 active:bg-slate-500 active:border-slate-200"} onPress={handlePress} key={video.playback_id}>
        <View className="w-[25%] h-[100%] py-4 mx-4">
          <Image source={{ uri: video.thumbnail }} className="w-[100%] h-[100%]" />
        </View>
        <View className="flex flex-col justify-center">
          <Text className="text-md text-black font-bold">{video.title}</Text>
          <Text className="text-xs">Uploaded: {video.createdAt}</Text>
        </View>
      </StyledPressable>
  );
};

export default VideoList;
