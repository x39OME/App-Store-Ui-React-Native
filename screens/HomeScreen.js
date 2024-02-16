import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import {Bars3CenterLeftIcon, BellIcon, ArrowDownTrayIcon} from 'react-native-heroicons/solid'
import {storeColors} from '../theme'
import {categories, featured, games} from '../constants'
import GradientButton from '../components/gradientButton'
import GameCard from '../components/gameCard'

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);
  return (

    // LinearGradient
    <LinearGradient className='w-full flex-1' colors={['rgba(56, 131 ,244, 0.9)', 'rgba(9, 181,211, .4)']}>
      <SafeAreaView>
        <View className='container mt-4'>

          {/* Bar */}
          <View className='flex-row justify-between items-center px-4'>
            <Bars3CenterLeftIcon color={storeColors.icons} size='30' />
            <BellIcon color={storeColors.icons} size='30' />
          </View>

          {/* Categories */}
          <View className='mt-3 space-y-3'>
            <Text className='ml-4 text-4xl font-extrabold ' style={{color: storeColors.text}}>
              Browse Games
            </Text>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  categories.map((category) => {
                    if(category==activeCategory){
                      // Show Gradient Category
                      return (
                        <GradientButton key={category} value={category} />
                      )
                    }else{
                      // Show Normal Category
                      return (
                        <TouchableOpacity onPress={()=> setActiveCategory(category)}
                          key={category} className='bg-blue-200 py-3 px-4 mx-1 rounded-full'>
                          <Text className='font-bold'>
                            {category}
                          </Text>
                        </TouchableOpacity>
                      )
                    }
                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* Featured */}
          <View className="mt-3 space-y-4">
            <Text style={{color: storeColors.text}} className="ml-4 text-lg font-bold">
                Featured Games
            </Text>
            <View className="pl-1">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  featured.map((item, index)=>{
                    return (
                      <GameCard key={index} game={item} />
                    )
                  })
                }
              </ScrollView>
            </View>
          </View>

          {/* Games List */}
          <View className='mt-2'>
            <View className="flex-row justify-between items-center mb-2">
              <Text style={{color: storeColors.text}} className="ml-4 text-lg font-bold">
                Top Action Games
              </Text>
              <TouchableOpacity className="mr-4">
                <Text className="text-white font-bold">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{height: 280}} showsVerticalScrollIndicator={false}>
              {
                games.map((game, index)=>{
                  let bg= game.id==selectedGame? 'rgba(255,255,255,.3)': 'transparent';

                  return (
                    <TouchableOpacity onPress={()=> setSelectedGame(game.id)}
                      style={{backgroundColor: bg}}
                      className="mx-2 p-1 mb-1 flex-row rounded-3xl"
                      key={index}>

                      <Image source={game.image} style={{width: 80, height: 80}} className="rounded-2xl" />

                      <View className="flex-1 flex justify-center pl-3 space-y-3">
                        <Text style={{color: storeColors.text}} className="font-semibold">
                          {game.title}
                        </Text>
                        <View className="flex-row space-x-3">
                          <View className="flex-row space-x-1">
                            <Image className="h-4 w-4 opacity-80" source={require('../assets/images/fullStar.png')} />
                            <Text className="text-xs font-bold text-gray-700">
                              {game.stars} rating
                            </Text>
                          </View>
                          <View className="flex-row space-x-1">
                            <ArrowDownTrayIcon size="15" className="text-blue-500" />
                            <Text className="text-xs font-bold text-gray-700">
                              {game.downloads}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View className="flex justify-center items-center">
                        <GradientButton value="play" buttonClass="py-2 px-5" />
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>

          </View>

        </View>
      </SafeAreaView>
    </LinearGradient>

  )
}