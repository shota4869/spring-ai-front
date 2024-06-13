import { useState } from "react";
import { Flex, Box, Divider, Input, Stack, FlexboxProps, InputProps, Button, Textarea, HStack, VStack } from "@chakra-ui/react"
import { useSpringAi } from "./hooks/useSpringAi";

export const Top = () => {


  const {sendAction, answer} = useSpringAi()

  const [message, settMessage] = useState('')

  const onClickSendButton = () => {
    sendAction(message);
}


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
      >
        {answer}
      </Box>
      <Flex>
        <Textarea
          value={message}
          onChange={(e) => settMessage(e.target.value)}
          placeholder="メッセージを入力..."
          mr={4}
          resize="none"
        />
        <Button  colorScheme="blue"　onClick={onClickSendButton}>
          送信
        </Button>
      </Flex>
    </Flex>
        )
}