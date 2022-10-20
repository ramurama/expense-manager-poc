import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import {
  DataSyncStatus,
  getSyncStatus,
  isBackgroundSyncRegistered,
  registerBackgroundSync,
  unRegisterBackgroundSync,
} from '../services/syncService'

export function DataSync() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const [status, setStatus] = useState<DataSyncStatus>(null)

  useEffect(() => {
    checkStatusAsync()
  }, [])

  const checkStatusAsync = async () => {
    setStatus(await getSyncStatus())
    setIsRegistered(await isBackgroundSyncRegistered())
  }

  const toggleFetchTask = async () => {
    if (isRegistered) {
      await unRegisterBackgroundSync()
    } else {
      await registerBackgroundSync()
    }

    checkStatusAsync()
  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text>
          Background data sync status: <Text style={styles.boldText}>{status}</Text>
        </Text>
        <Text>
          Background data sync name:{' '}
          <Text style={styles.boldText}>{isRegistered ? 'Registered' : 'Not registered!'}</Text>
        </Text>
      </View>
      <Button
        title={isRegistered ? 'Unregister data sync' : 'Register data sync'}
        onPress={toggleFetchTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
})
