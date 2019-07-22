import React, { Component } from 'react';
import { Button, Alert, StyleSheet, TextInput, Text, Image, View } from 'react-native';
import { ChatClient } from "../lib/chat/ChatClient";



const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAtV1ADKJ/YgRDOWJAAL6kKhFjHD/wpvUEQagL1bwGX2DsWaej
wMlnFkp3SaBNqJSiuXopls2HXj2XRWBOyu5DVj4VLgGJX1hMhf4gzN10DNHodCtB
fdhu0xmU6zA4YK4J+eTsoJyFan4x9/rSJ74v3pZZnGiJ90vODWtTaI2iSeygXrgp
6L9GdBYMCGjhM8CCnO2+erksm7gmeN1uwWSmI2b0iVDzo7GT32xJzhQhBPFVeDv9
Z3VsW1wcNXhByiiTjortmseFdu4R5Kck4UkowAzsAOJFws1WaIiarJRDet4degfk
2e0gPzAPPLvSe4tx12DymZP03fx6c32GTYek4QIDAQABAoIBAFYZFrbozaAydddg
FRJFbpmp92sJz6zy1Dp3FGc7A6tzz8AgHVUAR7gFUevZ9gP5y+ZRYDz/BSxwAMgm
mEEuKzld76APiq+As5NIuTmIR/duDvRXNJgRj0sX8eJU2e7LsGC5lLwKkiukDQS0
ReAoIYGBzri5yAVmL0Ofl9Eiq9B7fqh6pf203KwpT+9Roi9abII6ttFbMsqeDXLy
b9kmbSRn4uy2hKeKs2e29Tm0zo8fszVjwU/DieqREHrEQCrHap+8Gw5zG2tVRHLy
auv45a2VPtYvWmPx2zOdi3ItyBpoPQNEEehWWXVqb6VaMdb1Rrv4X2gG4MF6j5Jo
bdoKbiECgYEA9dq1IZ0tPKM/P50x1F/vesSiVb0++CtMRRQIehkponoPFMYHmOlz
V1AF6xMt9V4Nz/75prkBslH4/AlpNfrdeBZaesKKMo264yXPy9J7QhgbX2RW2072
xBqeHE/3QHuYOg29axBZkTX9IMCrKIz2T3nxgbgnoEYBrR8fGhIrFXcCgYEAvNk/
JQ78hr8VGkleAdOD6nKqIAizX8Vlj39LjWlQfOQVyiJDOKUvEnoeUKNAJ0Zmsd1j
2uX4Sa+kElElZy9nXkpiY1q5IOU+o2N7qzkImtYQYreuGg0MOi7nzWwBtTA+yKsl
gR+s8/usJIezhpLT0fr3R4nBkc8/L/Z//gSGjmcCgYEA4GKaSnGPpfZAdajcn75n
bZ8loic03390/t8H1Zg9naLVPNp4eKEouhm5LRG2MmmDJcDKzdWwrLWQD0fvlGq/
0yhjsAL56qXcWhBalOYnxO0HnoqPk12Abv70K1b4jQvApcuAg8TKWnPx8QCntjzh
WSwstX4D/I2oXf83fa3zUIUCgYAag2GjIUyA2njq/Nvu47REiR6raq1MR9lvYQ7J
Zry/HAKXI2JOpJpMPMrexVyvZunqFMv9IoZOShN94tieeQBJM6ZGjqkpHiZCKChn
rJUxr9YTFfiifax2yrkOlRhUSNa3s5eLXlgY1P+hDVA+F4UXmOV4rLV5dCBJ6pCj
qB0ABwKBgQDcIfHX6p76mg7xu/m5tkkEqhiaG4A6oh1GDkPb4S++ujtRni68IClW
+tBD9JdPdUKfA82lZ8k6UEpQd1NP7jIF4u4ILk4aTr1M8445a+DOy6AqnQaAKLrJ
kLsei5HEO/ioG2xRS6RrTWNXHNdLKTXN69QIG6ZSTT5o5o6L08XIAg==
-----END RSA PRIVATE KEY-----`

export default class LoginScreen extends Component {
    constructor(props){
	super(props);
	
    }

    _bootstrapAsync = async ()=> {
	this.props.navigationn.navigate("Auth");
    }
    
    buttonPressHandler(){
	
	console.log("Initializing chat")
	const chat = new ChatClient({
	    version: "0.0.140",
	    url: "192.168.0.96",
	    port: "4000"
	})
	console.log("Chat initialized. Connecting");
	
	chat.on("login_success", ()=>{
	    console.log("Login success")
	})
	
	chat.on("login_fail", (err)=>{
	    console.log("Login fail: " + err)
	})
	
	chat.topicLogin(PRIVATE_KEY)
	    .then(res =>{
		console.log("Topic login resolved")
	    })
	
    }

    render(){
	return (
	   <View style={styles.container}>
	       <View style={styles.controlsContainer}>
		  <TextInput placeholder={"Enter ip address of your island"}/>
		  <TextInput placeholder={"Enter your password"}/>
   		  <Button onPress={this.buttonPressHandler} title="Login"/>
	       </View>
	   </View> 
	)
    }
}


const styles = StyleSheet.create({
    container:{
	flex:1,
	backgroundColor: "#fff",
	alignItems: 'center', 
	justifyContent: 'flex-start'
    },
    
    loginButton:{

    },
    
    
    controlsContainer:{
	flex: 2, 
	backgroundColor: "#fff",
	alignItems: 'center',
	justifyContent: 'flex-start',
	margin: 40
    }
    
})
