import React, { Component } from 'react'
import { Text, View ,FlatList, Button} from 'react-native'


export default class FlatDemo extends Component {

    constructor(props){
        super(props)
        this.max=4
        this.state={data:[1,2,3,4]}
    }
    _renderItem=({item})=>{
        return (
            <View style={{height:120,justifyContent:"space-between"}}>
                <Text style={{textAlign:"center",margin:30,}}>{item}</Text>
                <Button title="删除" />
            </View>
        )
    }
    _ItemSeparatorComponent=()=>{
        return <View style={{height:1,backgroundColor:"red"}}></View>
    }

    _refresh=()=>{
        let d=Math.floor(Math.random()*100+100)
        let data=this.state.data.splice(0)
        data.unshift(d)
        this.setState({data:data})
    }
    _reachEnd=()=>{
        let data=this.state.data.splice(0)
        data.push(++this.max)
        this.setState({data:data})
    }

    // onpress =()=>{
    //     let data=this.state.data.splice(0)
    //     data.push(++this.max)
    //     this.setState({data:data})
    // }


    render() {
        return (
            <View>
                <FlatList
                    keyExtractor={({item,index})=>index}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    data={this.state.data} 
                    renderItem={this._renderItem}
                    refreshing={false}
                    onRefresh={this._refresh}
                    onEndReached={this._reachEnd}
                    onEndReachedThreshold={0.2}
                />
            </View>
        )
    }
}