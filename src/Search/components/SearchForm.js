import React from "react";
import { Field, reduxForm } from "redux-form";
import LicenseType from "./LicenseType";
import LicenseTypeData from '../../static/LicenseTypeData';
import "../styles.css";

const validate = values => {
  const errors = {};

  let regExp1 = new RegExp(/^(=|>|<|>=|<|<=|<>)\d+$/g);
  let regExp2 = new RegExp(/^(\d+|\*)..(\d+|\*)$/g);

  errors.stars =
    values.stars && (!regExp1.test(values.stars) && !regExp2.test(values.stars))
      ? "Stars syntax is invalid"
      : undefined;

  return errors;
};

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

export default reduxForm({ form: "search", validate })(SearchForm);
