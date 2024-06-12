import { useState } from "react";
import { Flex, Box, Divider, Input, Stack, FlexboxProps, InputProps, Button, Textarea, HStack, VStack } from "@chakra-ui/react"


export const Top = () => {

    return (
        <Flex
      direction="column"
      h="100vh"
      p={4}
    >
        
      <Box
        flex="1"
        overflowY="auto"
        mb={4}
        p={4}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
      >ƒ
      </Box>
      <Flex>
        <Textarea
          placeholder="メッセージを入力..."
          mr={4}
          resize="none"
        />
        <Button  colorScheme="blue">
          送信
        </Button>
      </Flex>
    </Flex>
        )
}