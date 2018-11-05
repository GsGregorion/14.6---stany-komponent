var Counter = React.createClass({ 
    getInitialState: function() {
        return {
            counter: 0,
            counter2: 0
        };
    },
    getDefaultProps: function() {
        console.log('getDefaultProps done')
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps done')
    },
    componentWillMount: function() {
        console.log('componentWillMount done')
    },
    componentDidMount: function() {
        console.log('componentDidMount done')
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    increment2: function() {
        this.setState({
            counter2: this.state.counter2 + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1,
        });
    },
    decrement2: function() {
        this.setState({
            counter2: this.state.counter2 - 1,
            shouldComponentUpdate: false
        });
    },
    remove: function() {
        counter.remove();
    },
    componentWillUpdate: function() {
        console.log('componentWillUpdate done')
    },
    componentDidUpdate: function() {
        console.log('componentDidUpdate done')
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount done')
    },
    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('div', {}, 
                    React.createElement('button', {onClick: this.increment}, 'Add 1'),
                    React.createElement('button', {onClick: this.decrement}, 'Extract 1')
                ),
                React.createElement('div', {}, 
                    React.createElement('h3', {className: 'result'}, 'Wartość licznika wynosi: ' + this.state.counter)
                ),
                React.createElement('div', {}, 
                    React.createElement('button', {onClick: this.increment2}, 'Add 1'),
                    React.createElement('button', {onClick: this.decrement2, className: 'fourth-button'}, 'Extract 1')
                ),
                React.createElement('div', {}, 
                    React.createElement('h3', {className: 'result'}, 'Wartość licznika wynosi: ' + this.state.counter2)
                )
            )
        )
    }
});

var counter = React.createElement(Counter);
ReactDOM.render(counter, document.getElementById('app'));

var counterB = React.createElement(Counter)
ReactDOM.render(counter, document.getElementById('app2'));

var RemoveButton = React.createClass({
    remove: function() {
        document.getElementById('app').remove();
        document.getElementById('app2').remove();
        console.log('Removing done!');
    },
    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('button', {onClick: this.remove, id: 'remove'}, 'Usuń mnie!')
            )
        )
    },
});

var removeButton = React.createElement(RemoveButton);
ReactDOM.render(removeButton, document.getElementById('remove'));