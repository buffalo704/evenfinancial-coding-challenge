import React from 'react';
import { Field } from "redux-form";

const LicenseType = ({ licenses }) => {
    const renderLicenseTypes = () => {
        return licenses.map(licenseType => {
            return (
                <option value={licenseType.keyword} key={licenseType.keyword}>{licenseType.license}</option>
            );
        });
    }
    return (
        <Field name='license' component='select'>
            <option value=""></option>
            {renderLicenseTypes()}
        </Field>
        );


}

export default LicenseType;