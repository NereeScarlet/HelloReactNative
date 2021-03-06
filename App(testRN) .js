import React,{Component} from 'react'
import {View,FlatList,Text,Image,Button,TextInput,StyleSheet,Dimensions,Alert,TouchableOpacity} from 'react-native'
let {width,height} = Dimensions.get("window")
const URL = "http://www.cjlly.com:3047/record"

export default class Login extends Component{
    constructor(){
        super()
        // 使用state存储数据
        this.state = {
            songList:[],
            // 控制是否刷新
            refreshing:false,
            "start":0,
            "page":0,
            "total":0
        }
        this.loadData()
    }
    // 请求网络数据
    loadData(){
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            // 更新state，使其触发render方法，重新加载下载下来的数据
            this.setState({
                "songList":json,
                "total":14
            })
        })
        
    }
    
    // onpress =()=>{
    //     let list = this.state.songList
    //     list.splice(1,1)

    //     this.setState({
    //         "songList":list
    //     })
    // }
    // 此方法用于渲染单元格
    // 此方法被调用时，会传递单元格对应的数据，也就是我们电影数组中的每个对象
    renderItem({item}){
        return (
            <View style={styles.item}>
                <View style={styles.header}>
                    <Image style={{width:80,height:100}} source={{uri:item['img']}}></Image>
                </View>
                <View Style={{flexDirection:"column"}}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                {/* <View>
                    <Button title="del" onPress={this.onpress}></Button>
                </View> */}
                
            </View>
        )
    }
    renderSep(){
        return (
            <View style={styles.line}>
            </View>
        )
    }
    // 下拉刷新
    loadNewData(){
        this.loadData()
    }
    refreshFooter(){
        if (this.state.start+20 <= this.state.total){
            return (
                <View>
                    <Text style={{fontSize:20,textAlign:"center"}}>加载中...</Text>
                </View>
            )
        }else{
            return (
                <View>
                    <Text style={{fontSize:20,textAlign:"center"}}>加载完毕</Text>
                </View>
            ) 
        }
        
    }
    loadMoreData(){
        if(this.state.start+20 <= this.state.total){
            this.state.start += 20
            let url = URL+"?start="+this.state.start+"&count=20"
            fetch(url)
            .then(response => response.json())
            .then(json => {
                // 更新state，使其触发render方法，重新加载下载下来的数据
                this.setState({
        
                    // 追加数据
                    "songList":this.state.songList.concat(json)
                })
            })
        }
        
    }
    render(){
        console.log("render")
       return (
           
           <View>
               
               <FlatList
                    data={this.state.songList}
                    // 当需要渲染单元格时，会自动调用此方法
                    renderItem={this.renderItem}
                    // 分割线
                    ItemSeparatorComponent={this.renderSep}
                    // 下拉刷新:需要设置对应的方法
                    onRefresh={this.loadNewData.bind(this)}
                    // 控制刷新状态的变量（布尔类型）
                    refreshing={this.state.refreshing}
                    // 上拉加载
                    onEndReached={this.loadMoreData.bind(this)}
                    // 触发的距离（如果不设置，会直接触发）
                    // 距离（0-1）之间，数字越小，距离底部越近时触发
                    onEndReachedThreshold={0.01}
                    // 上拉加载可以配合底部视图使用
                    ListFooterComponent={this.refreshFooter.bind(this)}
               >
               </FlatList>
           </View>
       )
   }
}
let styles = StyleSheet.create({
    item:{
        height:100,
        flexDirection:"row",
        backgroundColor:"#D0D0D0"
    },
    header:{
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        flex:1,
        margin:30,
        textAlign:"center"
    },
    line:{
        height:5,
        backgroundColor:"#E0E0E0"
    }
})
