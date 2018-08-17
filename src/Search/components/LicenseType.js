import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";

const LicenseType = ({ licenses }) => {
  const renderLicenseTypes = () => {
    return licenses.map(licenseType => {
      return (
        <option value={licenseType.keyword} key={licenseType.keyword}>
          {licenseType.license}
        </option>
      );
    });
  };
  return (
    <Field name="license" component="select">
      <option value="" />
      {renderLicenseTypes()}
    </Field>
  );
};

LicenseType.propTypes = {
  licenses: PropTypes.array
};
export default LicenseType;
