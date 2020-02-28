import React, { Component } from 'react';
import Button from './../components/UI/Button/Button';
import Auxiliary from './/../hoc/Auxiliary/Auxiliary';
import classes from './Todolist.module.css';

class Todolist extends Component {

    state = {
        userInput: '',
        list: []
    }

    deleteFromList = (listIndex) => {
        let listArray = [...this.state.list];
        listArray.splice(listIndex, 1);
        this.setState({ list: listArray })
    }

    changeUserInput = (event) => {
        event.preventDefault();
        this.setState({ userInput: event.target.value });
    }

    addToList = (event) => {
        event.preventDefault();
        if (this.state.userInput !== '') {
            let listArray = [...this.state.list, this.state.userInput];
            this.setState({
                list: listArray,
                userInput: ' '
            })
        }
    }

    render() {
        return (
            <Auxiliary>
                <input
                    value={this.state.userInput}
                    type="text"
                    onChange={this.changeUserInput} />
                <Button clicked={this.addToList}>ADD</Button>
                <ul>
                    {
                        this.state.list.map((value, index) => <li className={classes.ListItem} onClick={() => this.deleteFromList(index)} key={index}>{value}</li>)
                    }
                </ul>
            </Auxiliary>
        )
    }
}

export default Todolist;