import { connect } from 'react-redux';
import { createEvent, deleteEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = ({ event }) => ({
  event
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  deleteEvent: event => dispatch(deleteEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);