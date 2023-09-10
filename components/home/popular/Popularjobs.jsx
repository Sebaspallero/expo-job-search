import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import {COLORS, SIZES} from '../../../constants'
import useFetch from '../../../hook/useFetch'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'

const Popularjobs = () => {

  const router = useRouter()
  const {error, data, isLoading} = useFetch('search', {query: 'React Developer', num_pages: 1})
  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size='large' color={COLORS.primary}/>)
         : error ? (<Text>Something went Wrong</Text>)
        : (<FlatList
              data={[1,2,3,4]}
              renderItem={({item})=> (
                <PopularJobCard
                  item={item}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{columnGap: SIZES.medium}}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
        )}
      </View>
    </View>
  )
}

export default Popularjobs