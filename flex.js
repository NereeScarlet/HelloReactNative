import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Slider, Switch, Button } from 'react-native'

export default class flex extends Component {
    constructor(props){
        super(props)
        this.state={
            size:30,
            count:[],
            value:50,
            aa:"wrap",
            stat:false
        }
    }
    componentDidMount(){
        console.disableYellowBox = true;
    }
    onpress =()=>{
        let num=this.state.count
            num.push(1)

        this.setState({
            count:num
        })
    }
    onChange =(value)=>{
        this.setState({
            size:value
        })
        this.setState({
            size:value
        })
    }
    blockChange=(v)=>{
        if(v) this.setState({stat:true})
        else this.setState({stat:false})
        if(this.state.stat == true){
            this.setState({aa:"wrap"})
        }else{
            this.setState({aa:"nowrap"})
        }
    }
    render() {
        return (
            <View>
                <View style={style.container}>
                    <View style={style.top}>
                        <Text style={{fontSize:15, color:"white"}}>
                            第7组 李晋源
                        </Text>
                    </View>
                </View>
                <View style={style.body}>
                    <View style={style.Lcontainer}>
                        <View> 
                            <TouchableHighlight style={style.button} onPress={this.onpress}>
                                <Text style={{color:"white"}}>ADD</Text>
                            </TouchableHighlight>
                            
                            <Slider style={style.Slider} minimumValue={0} maximumValue={100} value={this.state.size} onValueChange={this.onChange}></Slider>
                            
                            <Switch style={[style.Switch,{justifyContent:"center"}]} value={this.state.stat == true} onValueChange={this.blockChange}></Switch>

                        </View>
                    </View>
                    <View style={[style.Rcontainer,{flexWrap:this.state.aa}]}>
                    {this.state.count.map((item,index)=><Text style={[style.block,{width:this.state.size},{height:this.state.size}]}>{index}</Text>)} 
                    </View>
                </View>
                <View style={style.ending}>
                    <Text style={style.Text}> one </Text>
                    <Text style={style.Text}> two </Text>
                    <Text style={style.Text}> three </Text>
                </View>

            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        borderWidth:2,
        borderRadius:6,
        margin:4
    },
    top:{
        backgroundColor:'#40E0D0',
        margin:1,
        flexGrow:1,
        height:80,
        alignItems:'center',
        justifyContent:"center"
    },
    body:{
        flexDirection:"row",
        width:'100%',
        height:'78%',
    },
    Lcontainer:{
        width:'30%',
        borderWidth:1,
        borderRadius:6,
        flexDirection:"row",
        justifyContent:"center",
        margin:4
    },
    Rcontainer:{
        borderWidth:1,
        borderRadius:6,
        width:'66%',
        margin:4,
        flexDirection:"row"
    },
    ending:{
        flexDirection:"row",
        flexGrow:1,
        margin:0,
        alignContent:"space-around"
    },
    Text:{
        borderWidth:2,
        borderRadius:6,
        margin:6,
        backgroundColor:'#40E0D0',
        flexGrow:1,
        color:"white",
        height:'100%',
        fontSize:20,
        textAlign:"center",
        textAlignVertical:'center'
    },
    button: {
        padding:30,
        borderWidth:1,
        borderRadius:6,
        marginTop:20,
        margin:6,
        alignContent:"center",
        backgroundColor: '#40E0D0',
      },
    block:{
        borderWidth:1,
        borderRadius:6,
        margin:6,
        alignContent:"space-around",
        textAlign:"center",
        textAlignVertical:'center'
    },
    Slider:{
        width:'100%',
        marginTop:50,
        justifyContent:"center"
    },
    Switch:{
        width:73,
        alignItems:"center",
        marginTop:50,
        justifyContent:"center"
    }
})
