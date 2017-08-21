/**
 * Created by think on 17/8/21.
 */
import React from "react";
import {TabNavigator} from "react-navigation";
import TabA from "./TabA";
import TabB from "./TabB";

export default MainPage = TabNavigator({
    A: {
        screen: TabA,
    },
    B: {
        screen: TabB,
    },
});
    