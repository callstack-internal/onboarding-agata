import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ListItem} from '../components/ListItem';
import {weatherData} from '../data/weatherData';

export const MainScreen = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={weatherData}
        renderItem={({item}) => {
          const {id, name, conditions, temp} = item;
          return (
            <ListItem id={id} name={name} conditions={conditions} temp={temp} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
