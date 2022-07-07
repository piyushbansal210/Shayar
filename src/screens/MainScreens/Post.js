import { View, Text, StyleSheet, Dimensions, SafeAreaView, TextInput, Pressable } from 'react-native'
import React from 'react'
import { StatusBar as SB } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const { width, height } = Dimensions.get('screen')

const postSchema = Yup.object().shape({
    Title: Yup.string().min(2, 'Title is too short!').max(50, 'Title Is too Long!').required('Title is Required'),
    Shayari: Yup.string().min(2, 'Shayari is too short!').required('Shayari is Required'),
});

export default function Post({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <SB style="dark" />
            <Formik
                initialValues={{
                    Title: '',
                    Shayari: '',
                }}
                validationSchema={postSchema}
                onSubmit={values => {
                    // same shape as initial values
                    navigation.navigate('editPost',{values:values})
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                    <>
                        <View>

                            <Text style={styles.heading}>Title</Text>
                            <TextInput
                                name="Title"
                                style={styles.titleText}
                                placeholder="Title"
                                onChangeText={handleChange('Title')}
                                onBlur={handleBlur('Title')}
                                value={values.Title}
                            />
                            {errors.Title &&
                                <Text style={{ fontSize: 10, color: 'red' ,marginBottom:10,fontFamily:'SemiBold',}}>{errors.Title}</Text>
                            }

                            <Text style={styles.heading}>Shayari</Text>
                            <TextInput
                                name="Shayari"
                                style={styles.shayariText}
                                multiline={true}
                                placeholder="Shayari"
                                onChangeText={handleChange('Shayari')}
                                onBlur={handleBlur('Shayari')}
                                value={values.Shayari}
                            />
                            {errors.Shayari &&
                                <Text style={{ fontSize: 10, color: 'red' ,marginBottom:10,fontFamily:'SemiBold',marginTop:10 }}>{errors.Shayari}</Text>
                            }

                        </View>
                        <Pressable style={{
                            width: '100%',
                            marginTop:20,
                            alignSelf: 'center',
                        }} onPress={handleSubmit}>
                            <LinearGradient
                                colors={['#FF6200', '#FF6200', '#FD9346']}
                                style={styles.button}>

                                <Text style={styles.textLogo}>Next</Text>
                                <AntDesign name="arrowright" size={24} color="white" />
                            </LinearGradient>
                        </Pressable>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#FCFCFC'
    },
    heading: {
        fontFamily: 'Header',
        fontSize: 20,
        marginBottom: 4
    },
    shayariText: {
        fontFamily: 'SemiBold',
        fontSize: 17,
        backgroundColor: '#f2f2f2',
        padding: 10,
        height: height / 3,
        textAlignVertical: 'top',
    },
    titleText: {
        fontFamily: 'SemiBold',
        fontSize: 17,
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginBottom: 10
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

        flexDirection: 'row'
    },
    textLogo: {
        fontFamily: 'Header',
        color: 'white',
        fontSize: 17
    }
})