import React, { useEffect, useRef, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = ({ alert, error, message }) => {
  const errorUpdateRef = useRef(false);

  useEffect(() => {
    if (errorUpdateRef.current) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`E-mail: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addLead) {
        alert.success(message.addLead);
      }
    } else errorUpdateRef.current = true;
  }, [error, message]);

  const propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  return <Fragment />;
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
