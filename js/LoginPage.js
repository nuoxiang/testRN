/**
 * Created by think on 17/8/21.
 */
import React from "react";
import {Text, View, Button} from "react-native";
import {NavigationActions} from "react-navigation";

class LoginPage extends React.Component {
    static navigationOptions = {
        title: 'Login',
    }

    render() {
        return (
            <View>
                <Text>Page Login</Text>
                <Button title="Login"
                        onPress={() => {
                            const resetAction = NavigationActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'Main',
                                        params: {login: true}
                                    })
                                ]
                            })

                            //use this can get params
                            // const resetAction = NavigationActions.navigate({
                            //             routeName: 'Main',
                            //             params: {login: true}
                            //         })
                            this.props.navigation.dispatch(resetAction)
                        }}/>
            </View>
        )
    }
}

export default LoginPage