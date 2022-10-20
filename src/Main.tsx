import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Chart } from './components/charts/Chart'
import { PDFGenerator } from './components/PDFGenerator/PDFGenerator'
import { DataSync } from './pages/DataSync'
import { Dummy } from './pages/Dummy'
import { defineBackgroundSyncTask } from './services/syncService'

defineBackgroundSyncTask()

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Chart />
      <PDFGenerator content="Hello World" /> */}
      <DataSync />
      {/* <Dummy /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
