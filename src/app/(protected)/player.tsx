import { View, Text, Pressable, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import dummyBooks from "@/dummyBooks";

const book = dummyBooks[0];

export default function Player() {
  return (
    <SafeAreaView className="flex-1  p-4 py-10 gap-4">
      <Pressable
        onPress={() => router.back()}
        className="absolute top-16 left-4 bg-gray-800 rounded-full p-2"
      >
        <Entypo name="chevron-down" size={24} color="white" />
      </Pressable>

      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-[95%] aspect-square rounded-[30px] self-center"
      />

      <Text className="text-3xl font-bold text-center mb-8 text-white">
        Player
      </Text>
    </SafeAreaView>
  );
}
