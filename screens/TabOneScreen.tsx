import { useVideos } from '../api/queries/useVideos';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import VideoList from './screenComponents/VideoList';
import Constants from 'expo-constants'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const { data, isError, isLoading } = useVideos();

  if (isLoading) { return <Text>Loading...</Text> }
  if (isError) { return <Text>Error</Text> }

  const videoList = data.data

  return (
    <View className="w-[100vw] h-[100vh] bg-slate-100">
      { videoList.map((video: any) => {
         return <VideoList video={video} key={video.playback_id}/>
      })}
    </View>
  );
}
