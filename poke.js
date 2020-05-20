import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Slider, Switch, Button } from 'react-native'

export default class flex extends Component {
    constructor(props){
        super(props)
        this.state={
            nums:[],
            size:100
        }
    }
    _createRandom=()=>{
        let nums=[]
        for(let i=0;i<4;i++){
            let x=Math.floor(Math.random()*9+1)
            nums[i]=x
        }
        // console.log(nums.join(','))
        this.setState({nums:nums})
    }
    
    render() {
        return (
            <View>
                <Button title="抽取" onPress={this._createRandom}/>
                <View>
                {this.state.nums.map((item,index)=><Text style={[style.block,{width:this.state.size},{height:this.state.size}]}>{index}</Text>)} 
                </View>
               
                

            </View>
        )
    }
}
const style = StyleSheet.create({
    block:{
        borderWidth:1,
        borderRadius:6,
        margin:6,
        alignContent:"space-around",
        textAlign:"center",
        textAlignVertical:'center'
    },
    poker:{
        flexDirection:"row",
        flexGrow:1,
        margin:0,
        alignContent:"space-around"
        
    }
})
