import React ,{Component} from 'react'
import './query.css';

export default class Query extends Component {
  openForm=()=> {
    document.getElementById("myForm").style.display = "block";
  }
  closeForm=()=> {
    document.getElementById("myForm").style.display = "none";
  }
     
  render() {
    return (
        <div className="Qry">
        <button class="open-button" onclick={this.openForm} img src="Image/btn.png">Do you have a Query?</button>
  
  <div class="chat-popup" id="myForm">
    <form action="/action_page.php" class="form-container">
      <h3>Fill the following details</h3>
  
      <label for="Name"><b>Name</b></label>
      <textarea name="Name" required></textarea>
      <br/>
      <label for="Contact"><b>Phone No.</b></label>
      <textarea name="Contact" required></textarea>
      <br/>
      <label for="Email"><b>Email ID</b></label>
      <textarea name="Email" required></textarea>
      <br/>
      <label for="Query"><b>What is your query?</b></label>
      <textarea name="Query" required></textarea>
      <br/> 
        
      <button type="submit" class="btn">Send</button>
      <button type="button" class="btn cancel" onclick={this.closeForm}>Close</button>
    </form>
  </div>
  
      </div>
    )
  }
  
}
