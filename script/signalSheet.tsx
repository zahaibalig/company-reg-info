
import React, { useRef } from 'react'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { Badge, Box, Button, Divider, HStack, Image, Text, VStack } from 'native-base';
import { Color } from '../../constants/Colors';

import TargetComponent from './TargetComponent';
import CButton from '../CButton';

export default function signalSheet({sheetId,payload}:any) {

  const actionSheetRef=useRef(null)

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      overlayColor="#395144"
      snapPoints={[100, 120, 150]}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}>
      <Box alignItems={'center'} px={3}>
        <HStack w={'100%'} justifyContent={'space-around'} p={2}>
          <Badge colorScheme="success" borderRadius={10}>
            {payload?.entry}
          </Badge>
          <Badge colorScheme="danger" borderRadius={10}>
            {payload?.stop}
          </Badge>
        </HStack>
        <VStack px={5}>
          {payload.targets?.map((targetPrice: any, index: number) => {
            return (
              <TargetComponent
                key={index}
                index={index + 1}
                price={targetPrice}
                percentage={(((targetPrice - 20) / 20) * 100).toPrecision(2)}
              />
            );
          })}
        </VStack>
        <Divider
          alignSelf={'center'}
          my="2"
          w={150}
          _light={{
            bg: Color.BorderColor,
          }}
          _dark={{
            bg: 'muted.50',
          }}
        />
        {payload?.info && (
          <Text fontWeight={'bold'} fontSize="xl">
            Info
          </Text>
        )}
        <Image source={require('../../assets/images/binance.png')} alt="exchange" borderRadius={10} />
        <CButton
          onPress={() => {
            SheetManager.hide('signal');
          }}
          text='Close'
        />
      </Box>
    </ActionSheet>
  );
}