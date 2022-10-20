import { Dimensions, StyleSheet } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { ChartConfig, ChartData } from 'react-native-chart-kit/dist/HelperTypes'

const screenWidth = Dimensions.get('screen').width

const data: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      data: [1100, 900, 1050, 1400, 1120, 764, 1100, 900],
    },
  ],
}

const chartConfig: ChartConfig = {
  // backgroundColor: "#fff",
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(51,51,51, ${opacity})`,
  barRadius: 2,
  barPercentage: 0.6,
  // style: {
  //   borderRadius: 16,
  // },
  // propsForDots: {
  //   r: "6",
  //   strokeWidth: "2",
  //   stroke: "red",
  // },
}

export const Chart = () => {
  return (
    <BarChart
      style={styles.chartStyle}
      data={data}
      width={screenWidth - 25}
      height={250}
      yAxisLabel="₹"
      yAxisSuffix=""
      chartConfig={chartConfig}
      verticalLabelRotation={10}
      fromZero
      showBarTops={false}
      withVerticalLabels={false} // instead show legends
      withInnerLines={true}
    />
  )
}

const styles = StyleSheet.create({
  chartStyle: {
    padding: 4,
    zIndex: 999,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'lightgrey',
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
})
