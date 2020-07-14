import React from 'react';

export default class WillUnmount extends React.Component {
    componentWillUnmount() {
        //this.timer&&clearTimeout(this.timer);
        console.log('componentWillUnmount');
        console.log(123);
    }

    
    render() {
        console.log(123);
        
        return (
            <div>

            </div>
        );
    }
}
