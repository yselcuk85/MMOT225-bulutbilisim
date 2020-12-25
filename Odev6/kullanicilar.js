import React from 'react';

import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';

export default class KULLANICI extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            Kullanıcı:0,
        }
    }

    componentDidMount = async ()=>{
        let user =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({users:user})
    };

    handlePress = id =>{
        this.setState({Kullanıcı:id})
    }

    userListView(){

        if(this.state.Kullanıcı<1){
            return(
                <Text style={{fontSize:15, margin:17}}>Belirlediğiniz Rakamı Seçiniz</Text>
            ) 
        }
        let renderUserList=[];
        this.state.users.map((v,k)=>{

            if(v.id===this.state.Kullanıcı){
               renderUserList.push(<Text style={{minHeight:55, fontSize:19, paddingLeft:10, marginTop:45}}>
             <Text style={{color:'#00bfff', fontSize:19}}>ID:</Text> {v.id} {"\n\n"}
               <Text style={{color:'#00bfff', fontSize:19}}>TITLE:</Text> {v.title} {"\n\n"}
               <Text style={{color:'#00bfff', fontSize:19}}>BODY:</Text> {v.body} {"\n\n"}</Text>)
            }

        }
        )
        return renderUserList
    }

    render(){
        return(
        <View style={{flex:1}}>




            <FlatList style = {{marginTop:25,flex:1,minHeight:307,backgroundColor: 'black'}}

                let data = {this.state.users}
                renderItem={({item})=>{

                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{minHeight: 10, backgroundColor: 'red'}}>
                           <Text style={{fontSize:18,color:'yellow', backgroundColor:'#454931',textAlign:'center'}}>{item.id}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                
                />
 <ScrollView style={{flex:2,minHeight:300}}>
                {this.userListView()}
                </ScrollView>
                
        </View>
            

        )
    }
}