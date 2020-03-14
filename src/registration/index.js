import React, {Component} from 'react';
import TextIF from '../elements/textInputField/index';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateData = (value) => {
     this.setState({value: value})
  }

  handleSubmit(e) {
    alert('Отправленное имя: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className = "gegistration" >
        <form onSubmit={this.handleSubmit}>
         <label>
           Имя:
         <TextIF classN={"test"} updateData={this.updateData}/>
         </label>
         <input type="submit" value="Отправить" />
       </form>
     </div>
   )
  }
}

export default Registration;
