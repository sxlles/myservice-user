import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";

const FindButton = ({finds }) => {
    
    const [likeButton, setLike] = useState(true);

    return (
        <TouchableOpacity style={styles.buttonFind}>
            <Image
                source={require('../../../../../../assets/eletricista.jpeg')}
                style={{
                    width: 250,
                    height: 200,
                    resizeMode: 'stretch',
                    borderRadius: 10,
                }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', right: '20%' }}>{finds.nome}</Text>
            <View style={{ flexDirection: 'row', right: '25%', alignContent: 'flex-start' }}>
                <Ionicons name="location" size={25} color='#000' />
                <Text>{finds.empresa}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setLike(!likeButton)} style={{ left: '300%' }}>
                    {
                        likeButton ?
                            <FontAwesome name="heart-o" size={30} color='#000' />
                            :
                            <FontAwesome name="heart" size={30} color='#0A3DC2' />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonFind:{
        backgroundColor: '#FFF',
        width: 290,
        height: 300,
        elevation: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default FindButton;