import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid";
import { storeColors } from "../theme";
import StarRating from 'react-native-star-rating-widget';

export default function GameCard({game}) {
  const [isFavourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);

  return (

    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-3xl" />
      <LinearGradient colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity onPress={() => setFavourite(!isFavourite)}
            className="p-2 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,.4)" }} >

            <HeartIcon size="25" color={isFavourite ? storeColors.redHeart : "white"}/>
          </TouchableOpacity>
        </View>

        <View className="space-y-1">
          <StarRating
            disabled={true}
            starSize={18}
            containerStyle={{ width: 90 }}
            maxStars={5}
            rating={game.stars}
            onChange={setRating}
            />

          <Text className="text-xl font-bold text-gray-300">
            {game.title}
          </Text>

          <View className="flex-row items-center space-x-2">
            <ArrowDownTrayIcon size="18" color="lightgray" />
            <Text className="text-sm text-gray-300 font-semibold">
              {game.downloads} Downloads
            </Text>
          </View>

        </View>
      </LinearGradient>
    </View>
    );
}
