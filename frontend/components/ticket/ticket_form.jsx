import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-modal';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: parseInt(e.currentTarget.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("state", this.state);
    let ticket = Object.assign({}, this.state);
    ticket.event_id = this.props.event.id;

    this.props.createTicket(ticket)
    .then(() => {
      this.props.closeModal();
      }
    );
  }

  // componentWillMount() {
  //   this.props.requestTicket(this.props.match.params.eventId);
  //   console.log(this.props);
  // }



  render() {
    console.log('ticketform', this.props);
    const { quantity } = this.state;
    const { event } = this.props;

    return (
      <div className="ticket-box">
        <Modal className="modal-ticket-form"
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          contentLabel="Example Modal"
        >

          <form className="ticket-form" onSubmit={this.handleSubmit}>
            <h4>Register for Event</h4>
            <br />
            <label className="ticket-title">{event.title}</label>
            <label>{event.ticket_price}</label>

            <select className="ticket-quantity-selector" onChange={this.handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>

            <footer className="ticket-footer">
              <label>QTY: { quantity }</label>
              <br/>
              <label>TOTAL: ${ parseInt(event.ticket_price) * quantity }</label>
              <button className="tickets-button" onClick={this.handleSubmit}>CHECKOUT</button>

            </footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(TicketForm);
