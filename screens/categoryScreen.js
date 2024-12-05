import { View, Text, StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from '../data/dummy-data.js';
import CategoryGridTile from '../components/categoryGridTile';

const renderCategoryItems = (itemData) =>{
return(
<CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
)
};

const CategoryScreen = () => {

  return (
    <View style={styles.screen}>
        <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItems}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default CategoryScreen;