import React from 'react';
import Login from '../Login/Login';

const PermissionCheck = App =>
  class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            permission: false
        };
    }
    //////////////////////////////////////////////////////////
    componentDidMount() {
      if (localStorage.getItem('user') === 'md') {
          this.setState({ permission: true });
      } else if (localStorage.getItem('password') === 'mypassword')  {
        this.setState({ permission: true });
      } else {
          this.setState({ permission: false });
      }    
    }
    //////////////////////////////////////////////////////////
    render(){
      if(this.state.permission) return <App />;
        return <Login />;
      }
  };

export default PermissionCheck;