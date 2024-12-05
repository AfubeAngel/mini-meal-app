import {View, Text, StyleSheet, Pressable} from 'react-native';

const CategoryGridTile = ({title, color})=>{
return(
    <View style={styles.container}>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryGridTile;