import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { SearchInput } from '~/components/nativewindui/SearchInput';

export default function SearchInputScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Search Input' }} />
      <View className="justify-center p-4">
        <SearchInput />
      </View>
    </>
  );
}