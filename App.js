/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Button,
  Alert,
  IconButton,
  CloseIcon
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <NativeBaseProvider>
      {/* <Box alignItems="center">
        <Button onPress={() => console.log("hello world")}>Click Me</Button>
      </Box> */}
      <Center>
        <Alert w="90%" maxW="400" status="info" colorScheme="info">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  We are going live in July!
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
                borderWidth: 0
              }} icon={<CloseIcon size="3" color="coolGray.600" />} />
            </HStack>
            <Box pl="6" _text={{
              color: "coolGray.600"
            }}>
              We are happy to announce that we are going live on July 28th. Get
              ready!
            </Box>
          </VStack>
        </Alert>
      </Center>

      {/* <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              px={2}
              py={1}
              _dark={{bg: 'blueGray.800'}}
              _light={{bg: 'blueGray.200'}}>
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center> */}
    </NativeBaseProvider>
  );
};
export default App;
