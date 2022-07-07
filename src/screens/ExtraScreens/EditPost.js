import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity,Platform, SafeAreaView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

const { width, height } = Dimensions.get('screen');

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';


import Colors from '../../assets/data/Colors'
import Align from '../../assets/data/Align'
import Font from '../../assets/data/Font'
import Size from '../../assets/data/Size'

export default function EditPost(props) {

    const [background, setBackground] = useState('orange');
    const [align, setAlign] = useState({
        justify: 'center',
        align: 'center'
    });
    const [size, setSize] = useState({
        shayariFontSize: 16,
        titleFontSize: 26
    });
    const [font, setFont] = useState('SemiBold');

    const { Shayari, Title } = props.route.params.values;

    const [option, setOption] = useState('color');



    console.log(props.route)


    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{paddingTop:Platform.OS ==="ios"?0:StatusBar.currentHeight,backgroundColor:'white',height:height/9,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>

                <View style={styles.headerLeft}>
                    <Ionicons name="arrow-back" size={24} color="black" onPress={() => props.navigation.goBack()} />
                    <Text style={styles.headerTitle}> Edit Post</Text>
                </View>

                <View style={{marginRight:15, }}>
                    <Text style={{fontFamily:'SemiBold',color:'#24A0ED',fontSize:20}}>POST</Text>
                </View>
            </View>


            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={[styles.post, { backgroundColor: background, alignItems: align.align, justifyContent: align.justify }]}>
                    <Text style={[styles.title, {
                        fontFamily: font,
                        fontSize: size.titleFontSize
                    }]}>{Title}</Text>
                    <Text style={[styles.shayari, {
                        fontFamily: font,
                        fontSize: size.shayariFontSize
                    }]}>{Shayari}</Text>
                </View>


                <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, marginTop: 0, justifyContent: 'space-evenly' }}>
                    <Ionicons name="color-palette-sharp" size={24} color="#616161" onPress={() => setOption('color')} />
                    <FontAwesome name="font" size={24} color="#616161" onPress={() => setOption('font')} />
                    <MaterialIcons name="format-size" size={24} color="#616161" onPress={() => setOption('size')} />
                    <FontAwesome name="align-right" size={24} color="#616161" onPress={() => setOption('align')} />
                </View>


                {
                    option === 'color' && (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                            {Colors.map((item) => {
                                return (
                                    <TouchableOpacity key={item} onPress={() => setBackground(item)} style={[styles.colorBox, {
                                        backgroundColor: item
                                    }]}>
                                        <Text style={[styles.colorText, { fontFamily: font }]}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    )
                }

                {
                    option === 'font' && (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                            {Font.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => setFont(item.font)} style={[styles.fontBox, {
                                        backgroundColor: background
                                    }]}>
                                        <Text style={[styles.fontText, { fontFamily: item.font }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    )
                }

                {
                    option === 'size' && (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                            {Size.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => setSize({
                                        shayariFontSize: item.quote,
                                        titleFontSize: item.shayari
                                    })} style={[styles.sizeBox, {
                                        backgroundColor: background
                                    }]}>
                                        <Text style={[styles.fontText, { fontFamily: font }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    )
                }

                {
                    option === 'align' && (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                            {Align.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => setAlign({
                                        justify: item.verticalAlign,
                                        align: item.horicontalAlign
                                    })} style={[styles.alignBox, { backgroundColor: background, marginHorizontal: 15, alignItems: item.horicontalAlign, justifyContent: item.verticalAlign }]}>
                                        <FontAwesome name="align-right" size={24} color="white" />
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    )
                }





            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    },
    post: {
        backgroundColor: 'orange',
        aspectRatio: 1,
        margin: 15,
        width: width - 30,
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Header',
        color: 'white',
        fontSize: 22
    },
    shayari: {
        fontFamily: 'Header',
        color: 'white',
        fontSize: 12
    },
    colorBox: {
        marginHorizontal: 15,
        width: width / 3,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorText: {
        fontFamily: 'Header',
        color: 'white',
        padding: 5
    },
    fontText: {
        fontFamily: 'Header',
        color: 'white'
    },
    fontBox: {
        marginHorizontal: 15,
        width: width / 3,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sizeBox: {
        marginHorizontal: 15,
        width: width / 3,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alignBox: {
        marginHorizontal: 15,
        width: width / 3,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 15
    },
    textLogo: {
        fontFamily: 'Header',
        fontSize: 16,
        color: 'white',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,

    },
    headerTitle: {
        fontFamily: 'Header',
        fontSize: 25,
        marginLeft: 10
    }
})