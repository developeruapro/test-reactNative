import React, {useState} from "react";
import {View, Button} from "react-native";
import PostmanEcho from '../actions/PostmanEcho'

export const navigationOptions = () => ({
    title: "MEDICATION FORM",
    headerLeft: () => (
        <View style={{paddingLeft: 15}}/>
    ),
})

const TestButtonScreen: React.FC = () => {
    const [postmanEchos, setPostmanEchos] = useState(null);

    const triggerRequestAction = async () => {
        const names = [
            "Dorothea", "Rose", "Blanche", "Sophia"
        ];
        const nums = [
            1, 3, 2, 4
        ];

        var res = await PostmanEcho(names, nums);
        setPostmanEchos(res.data);
    };

    return (
        <View>
            <Button
                title={'Send request'}
                onPress={() => {
                    triggerRequestAction();
                }}
            />

        </View>

    );
}

export default TestButtonScreen;