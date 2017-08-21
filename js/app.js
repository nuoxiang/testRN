/**
 * Created by think on 17/8/21.
 */
import React from "react";
import {StackNavigator} from "react-navigation";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

export default app = StackNavigator({
    Main: {
        screen: MainPage
    },
    Login: {
        screen: LoginPage
    },
})

    