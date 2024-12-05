import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';

const CategoryGridTile = ({title, color})=>{
return(
    <View style={[styles.container, {backgroundColor: color}]}>
        <Pressable android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? styles.PressedButton : null]} 
        onPress={()=>{}}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button:{
        flex: 1,
    },
    PressedButton:{
        opacity: 0.5,
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
       // backgroundColor: 'white', //this is for ios sake for shadow to show
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default CategoryGridTile;