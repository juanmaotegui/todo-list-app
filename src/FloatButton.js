import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 30,
                right: 30,
                padding: 15,
                backgroundColor: '#fff',
                borderRadius: 30,
            }}>
            <Text>Agregar</Text>
        </TouchableOpacity>
    );
};
