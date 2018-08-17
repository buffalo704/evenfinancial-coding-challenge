import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import LicenseType from "./LicenseType";
import LicenseTypeData from '../../static/LicenseTypeData';
import "../styles.css";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>
      <div>{label}</div>
      <div>
        <input {...input} type={type} />
        {touched &&
          ((error && <div className="error">{error}</div>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </label>
  </div>
);

export const SearchForm = ({
  handleSubmit,
  onSubmit,
  invalid,
  pristine,
  submitting
}) => {
  return (
    <div>
      <h1 className="App-title">Even Financial GitHub Repository Search</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="item">
          <Field
            name="text"
            type="text"
            component={renderField}
            label="Text"
            autoComplete="none"
          />
        </div>

        <div className="item">
          <Field
            name="stars"
            type="text"
            component={renderField}
            label="Stars"
            autoComplete="none"
          />
        </div>

        <div className="item">
          <label>
            <div>License</div>
            <div className="selectdiv">
              <LicenseType licenses={LicenseTypeData}/>
            </div>
          </label>
        </div>

        <div className="item">
          <label className="checkbox-container">
            <Field name="fork" id="fork" component="input" type="checkbox" />
            <span className="checkmark" />
            <span>Include Forked</span>
          </label>
        </div>
        <div className="bridge">
          <button type="Submit" disabled={submitting}>
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
    handleSubmit :PropTypes.func,
    onSubmit: PropTypes.func,
    invalid :PropTypes.boolean,
    pristine:PropTypes.boolean,
    submitting: PropTypes.boolean
};
export default SearchForm;
