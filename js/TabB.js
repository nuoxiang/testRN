/**
 * Created by think on 17/8/21.
 */
import React from "react";
import {Text, View} from "react-native";

class TabB extends React.Component {

    static navigationOptions = {
        title: 'B',
    }

    render() {
        return (
            <View>
                <Text>Page B</Text>
            </View>
        )
    }
}

export default TabB