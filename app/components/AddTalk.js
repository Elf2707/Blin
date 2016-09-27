import React, { Component } from 'react';
import { Text,
         View,
         TextInput,
         Picker,
         TouchableHighlight } from 'react-native';

const MAX_BLIN_LEN = 1000;

export default class AddBlinForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            text: '',
        };
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.category}
                    onValueChange={(category) => this.setState({ category })}>
                    {
                        this.props.categories.map((category, index) =>
                                <Picker.Item label={category.name}
                                             value={category.name}
                                             key={index} />)
                    }
                </Picker>
                <TextInput onChangeText={(text) => this.setState({ text })}
                           value={this.state.text}
                           multiline={true}
                           numberOfLines={4}
                           maxLength={MAX_BLIN_LEN} />

                <Text>{this.state.text.length} from {MAX_BLIN_LEN}</Text>
                <TouchableHighlight onPress={this.props.onAddBlin}>
                    <Text>Add Blin</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

AddBlinForm.propTypes = {
    categories: React.PropTypes.array.isRequired,
    onAddBlin: React.PropTypes.func.isRequired,
}
