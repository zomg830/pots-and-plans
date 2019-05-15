import React from 'react';
import '../index.css';
import Title from './Title';
import GoogleAuth from './GoogleAuth';
import ChangeBusinessName from './ChangeBusinessName';

// function CreateRestaurantView(){
class CreateRestaurantView extends React.Component {
    //user has the option to change the business name
    state={
        userTitle: "Burger Bytes🍔"
    }

    // handleNameChange = (e) => {
    //     if(this.value) {
    //     this.setState({ userTitle: e.target.value });
    //     }
    //     else {
    //         this.setState({ userTitle: "Burger Bytes🍔"})
    //     }
    // }

    handleNameChange = (e) => {
        this.setState({ userTitle: e.target.value }); 
    }

    render() {
        return(
            <div className="container">
                <Title changeTitle={this.state.userTitle}/>
                <p>Placeholder for Create Restaurant components</p>
                {/* define handleNameChange function  */}
                <ChangeBusinessName  handleNameChange={this.handleNameChange}/>
                <GoogleAuth />
            </div>
        )
    }
};
export default CreateRestaurantView;