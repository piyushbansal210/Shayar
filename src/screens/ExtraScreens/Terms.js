import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import { general, rights, head } from '../../assets/data/Terms'
import { Entypo } from '@expo/vector-icons';


export default function Terms() {
  console.log(general)
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.detail}>{head}</Text>

      <Text style={styles.title}>GENERAL TERMS</Text>
      {
        general.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={[styles.detail, { flex: 1 }]}>{item}</Text>
            </View>
          )
        })
      }

      <Text style={styles.title}>CONTENT RIGHTS AND OWNERSHIP</Text>
      {
        rights.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={[styles.detail, { flex: 1 }]}>{item}</Text>
            </View>
          )
        })
      }


      <Text style={styles.title}>MIRAQUILL COOPERATION WITH LAW ENFORCEMENT AGENCY</Text>
      <Text style={styles.detail}>Miraquill may inform and/or provide information to law enforcement agencies or government of unlawful activity by You.</Text>

      <Text style={styles.title}>DISCLAIMER OF WARRANTY / LIMITATION OF LIABILITIES</Text>
      <Text style={styles.detail}>ALL PRODUCTS AND SERVICES MADE AVAILABLE ON OR THROUGH THIS SITE ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTY OF ANY KIND, EITHER EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

        WE AND OUR AFFILIATES, AND THEIR STAFF DO NOT WARRANT, AND HEREBY DISCLAIM ANY WARRANTIES, EITHER EXPRESS, IMPLIED OR OTHERWISE, WITH RESPECT TO THE SITE, CONTENT QUALITY, ACCURACY, COMPLETENESS AND ADEQUACY, OR THAT THE PRODUCT OR SERVICES WILL MEET YOUR NEED OR EXPECTATIONS.

        WE AND OUR AFFILIATES DO NOT WARRANT THAT THE SITE WILL OPERATE IN AN UNINTERRUPTED MANNER AND IT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.

        EXCEPT AS PROHIBITED BY LAW, YOU AGREE THAT WE AND OUR AFFILIATES, WILL NOT BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES ARISING OUT OF OR RELATING TO THESE TERMS OF USE, OR YOUR (OR ANY THIRD PARTY) USE OF OR INABILITY TO USE THIS SITE.

        EXCEPT AS PROHIBITED BY LAW, YOU AGREE THAT WE AND OUR AFFILIATES WILL HAVE NO LIABILITY FOR ANY CONSEQUENTIAL, INDIRECT, PUNITIVE, SPECIAL OR INCIDENTAL DAMAGES, WHETHER FORESEEABLE OR UNFORESEEABLE, AND WHETHER WE AND OUR AFFILIATES HAS BEEN NEGLIGENT OR OTHERWISE AT FAULT.</Text>
      <Text style={styles.title}>INDEMNIFICATION</Text>
      <Text style={styles.detail}>You agree to indemnify, defend and hold Us harmless and Our respective affiliates, officers, directors, governing board members, employees, and agents from and against any third party claims arising out of Your use or any way related to Your use of the Services, including any liabilities, damages, expenses, including litigation cost and attorneys fees.</Text>
      <Text style={styles.title}>TERMINATION</Text>
      <Text style={styles.detail}>If You breach any provisions of this Terms of Use, We reserve right to suspend or prohibit Your access to the Services.</Text>

      <Text style={styles.title}>GOVERNING AND JURISDICTION</Text>
      <Text style={styles.detail}>The provisions of this Terms of Use are governed by and construed in accordance with the laws of India. You agree to submit to the exclusive jurisdiction of the courts at Delhi, India.</Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    padding: 15
  },
  title: {
    fontFamily: 'Bold',
    backgroundColor: '#f2f2f2',
    padding: 10
  },
  detail: {
    fontFamily: 'Regular',
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingTop: 5
  }
})