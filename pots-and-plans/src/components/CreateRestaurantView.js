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

    //capture the user's input value & change userTitle state
    handleNameChange = (e) => {
        var validateInputName = e.target.value;
         // for security purposes only alphanumeric characters and spaces must be accepted
        var regular = /^[\w ]+$/;
        if(e.target.value && !regular.test(validateInputName)) {
            alert("Business name contains invalid characters!");
            return false;
        }
        else if(e.target.value) {
        this.setState({ userTitle: e.target.value }); 
        return true;
        }
        else {
            this.setState({ userTitle: "Burger Bytes🍔"});
        }
    };

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