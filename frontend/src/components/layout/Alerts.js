import React, { useEffect, useRef, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = ({ alert, error }) => {
  const errorUpdateRef = useRef(false);

  useEffect(() => {
    if (errorUpdateRef.current) {
      alert.error("There is an error");
    } else errorUpdateRef.current = true;
  }, [error]);

  const propTypes = {
    error: PropTypes.object.isRequired,
  };

  return <Fragment />;
};

const mapStateToProps = (state) => ({
  error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
