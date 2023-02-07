import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ListItem} from '../components/ListItem';
import {useWeatherData} from '../hooks/useWeatherData';
import {Loader} from '../components/Loader';
import {ErrorMessage} from '../components/ErrorMessage';

export const MainScreen = () => {
  const {data, error, loading} = useWeatherData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage text="Ooops, something went wrong :(" />;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ListItem {...item} />;
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
