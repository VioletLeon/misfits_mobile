import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import misfitsLogo from '../assets/images/misfitsLogo.png';
import Constants from 'expo-constants';

export default function Login({ navigation }: any) {

  const handlePress = (event) => {
    navigation.navigate('Root');
  }

  return (
    <View className="min-w-[100vw] min-h-[100vh] bg-slate-100 flex flex-col items-center">
      <View className="flex justify-center items-center h-[40%]">
        <Image source={misfitsLogo} />
        <Text className="text-2xl font-bold">Misfit Method</Text>
      </View>
      <View className="flex flex-col h-[25%] w-[100%] px-10 self-start items-start justify-evenly">
        <Text className="text-lg font-bold">Login</Text>
        <TextInput placeholder="Email" className="bg-white w-[100%] h-10"></TextInput>
        <TextInput placeholder="Password" className="bg-white w-[100%] h-10"></TextInput>
      </View>
      <TouchableOpacity className="bg-blue-500 border-2 rounded-2xl border-transparent w-[75%] h-[7%] flex justify-center items-center" onPress={handlePress}>
        <Text className="text-white text-xl font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
