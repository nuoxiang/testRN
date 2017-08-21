/**
 * Created by think on 17/8/21.
 */
import * as React from "react";
import {Text, View, Button} from "react-native";

class TabA extends React.Component {

    static navigationOptions = {
        title: 'A',
    }

    render() {
        console.log(this.props.navigation)
        let {state} = this.props.navigation
        let isLogin = state && state.params && state.params.login
        return (
            <View>
                <Text>Page A</Text>
                {isLogin ? <Text>Login</Text> :
                    <Button title="Login"
                            onPress={() => {
                                this.props.navigation.navigate('Login')
                            }}/>
                }
            </View>
        )
    }
}

export default TabA