import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Dimensions, Image } from 'react-native';

const  Card = ({data})  => {

  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image style={styles.img} source={{uri : data.imgURL}} />
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>{data.price}</Text>
        {!data.inStock ? <Text style={styles.stok}> STOKTA YOK </Text> : null }
    </View>
  );
}
export default  Card; 
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#ECEFF1',
        marginTop : 30,
        marginLeft : 15,
        marginRight : 15,
        height : Dimensions.get('window').height / 3,
        borderRadius : 15,
        
      },
      imgContainer : {
        marginTop : 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      img : {
        width : 120,
        height : 120,
        borderRadius : 15
      },
      stok : {
        paddingLeft : 10,
        paddingTop : 10,
        color : 'red',
        fontSize : 15,
        fontWeight : 'bold',
      },
      title : {
        paddingLeft : 10,
        paddingTop : 10,
        fontSize : 15,
        fontWeight : 'bold',
      },
      price : {
        paddingLeft : 10,
        paddingTop:5
      }
})
