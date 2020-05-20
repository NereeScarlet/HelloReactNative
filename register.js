import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Slider, Switch, Button, TextInput } from 'react-native'

export default class flex extends Component {
    constructor(props){
        super(props)
        this.state={
            a:0,b:0,
            aa:0,bb:"",cc:""
        }
    }
    _register=()=>{
        if (this.state.a.length < 4) {
            this.state.aa = true
            this.setState({bb:"用户名不能小于4位"})
        }
        let right = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!right.test(this.state.b)){
            this.state.aa = true
            this.setState({cc:"email格式错误"})
        }
        if(this.state.aa){}
    }
    
    render() {
        return (
            <View>
                <TextInput placeholder="username" value={this.state.a} onChangeText={txt=>this.setState({a:txt})}/>
                <Text>{this.state.bb}</Text>
                <TextInput placeholder="email" value={this.state.b} onChangeText={txt=>this.setState({b:txt})}/>
                <Text>{this.state.cc}</Text>
                <Button title="注册" onPress={this._register}/>
            </View>
        )
    }
}

