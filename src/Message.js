import React from 'react'
export default class Message extends React.Component{
    render (){
        return <h1>Message : {this.props.message}</h1>
    }
}