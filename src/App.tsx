import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Top } from './Top'

function App() {
  return (
    <ChakraProvider>
      <Top />
    </ChakraProvider>
  );
}

export default App;
