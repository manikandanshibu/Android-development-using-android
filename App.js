// import React from 'react'
// import MainStackNavigator from './src/navigation/AppNavigator'
// import { Provider as StoreProvider } from 'react-redux'
// import store from './src/redux/Store'

// export default function App3() {
//   return (
//     <StoreProvider store={store}>
//       <MainStackNavigator />
//     </StoreProvider>
//   )
// }
// import React from 'react'
// import MainStackNavigator from './src/navigation/AppNavigator'
// import { Provider as StoreProvider } from 'react-redux'
// import store from './src/redux/Store'

// export default function App() {
//   return (
//     <StoreProvider store={store}>
//       <MainStackNavigator />
//     </StoreProvider>
//   )
// }


import { Button, StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';


import {counterDecrement,counterIncrement} from './src/actions/count'
 function App () {
 
const count = useSelector(state => state.counter.count)
let dispatch = useDispatch();
  
  
    
    return (
      <View >
        <View style={{marginLeft:300,marginBottom:100}}>
        <TouchableHighlight onPress={()=> this.props.navigation.navigate('Tour2')}><Text style={{color:'red',fontSize:30}}>Cart  {count}</Text></TouchableHighlight>
        </View>
        <View style={{marginLeft:3}}>
        <Button
        title='s 6 edge'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
<View style={{marginLeft:3,marginTop:50,}}>
        <Button
        title='i phone 6s'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
<View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='s 7 edge'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
<View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='i phone 8'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
<View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='s 8 edge'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
  <View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='mi 11'
        onPress={()=> dispatch(counterDecrement())}
        />
        </View>
<View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='i phone x'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
<View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='s 9'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>
<View style={{marginLeft:3,marginTop:50}}>
        <Button
        title='pixel 6'
        onPress={()=> dispatch(counterIncrement())}
        />
</View>

        {/* <Text>{count}</Text> */}
        {/* <View style={{marginLeft:30,marginTop:10}}>
        <Button
        title='Decrement'
        onPress={()=> dispatch(counterDecrement())}
        />
        </View> */}
      </View>
    )
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  }
})



export default (App);