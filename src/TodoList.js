import React, { Component } from 'react';
import { TextInput, View, FlatList, Button, Text } from 'react-native';
import BottomModal from './BottomModal';
import FloatButton from './FloatButton';
import { postNote, getNotes } from './api';

let i = 0;

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            modalVisible: false,
            note: null,
            isFetching: false,
        };
    }

    componentDidMount() {
        this.updateNotes();
    }

    updateNotes = () => {
        getNotes().then((notes) => {
            this.setState({ notes, isFetching: false });
        });
    };

    hideModal = () => {
        this.setState({ modalVisible: false });
    };

    addNote = () => {
        postNote({ name: this.state.note }); //.then(() => this.updateNotes());
        this.setState({ modalVisible: false, note: null });
    };

    renderItem = (item) => {
        return <Text style={{ fontSize: 19 }}>{item.item.name}</Text>;
    };

    onRefresh() {
        this.setState({ isFetching: true }, () => {
            this.updateNotes();
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ padding: 20 }}
                    data={this.state.notes}
                    renderItem={(it) => this.renderItem(it)}
                    keyExtractor={(x) => x._id}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                />

                <BottomModal
                    visible={this.state.modalVisible}
                    onDismiss={() => this.hideModal()}>
                    <View
                        style={{
                            paddingVertical: 10,
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}>
                        <TextInput
                            value={this.state.note}
                            onChangeText={(text) =>
                                this.setState({ note: text })
                            }
                            placeholder="Nota..."
                            style={{
                                borderBottomColor: '#a8a8a8',
                                borderBottomWidth: 1,
                                marginBottom: 30,
                            }}
                        />
                        <Button
                            title="guardar"
                            onPress={() => this.addNote()}
                        />
                    </View>
                </BottomModal>

                <FloatButton
                    onPress={() => this.setState({ modalVisible: true })}
                />
            </View>
        );
    }
}

export default TodoList;
