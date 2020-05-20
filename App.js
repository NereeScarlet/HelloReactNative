import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class App3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>1</Text>
                <Text style={styles.content}>2</Text>
                <Text style={styles.content}>3</Text>
                <Text style={styles.content}>4</Text>
                <Text style={styles.content}>5</Text>
                <Text style={styles.content}>6</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    content:{backgroundColor:'cadetblue',margin:1,width:78,height:100},
    container:{backgroundColor:'antiquewhite',flexGrow:1,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:"flex-start",
        alignItems:"flex-start",
        alignContent:"stretch"
        
    }
})