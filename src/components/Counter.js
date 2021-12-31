import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {selectCount, increment} from '../redux/counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <View>
      <Text>{count}</Text>

      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increase Count</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
