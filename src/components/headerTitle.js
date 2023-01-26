import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Globals from '../memory/globals';

export class HeaderTitle extends Component {
    constructor (props) {
        super(props);

        this.state = {
           title: props.title,
           tag: props.tag,
        };


    }

    componentDidMount() {
         Globals.headerTitles.push(this);
    }



    render() {
        return (
            <Text>{this.state.title}</Text>
        );
    }
}
