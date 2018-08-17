import React from "react";
import PropTypes from "prop-types";

const Message = props => {
    const { items, formValues } = props;

    let message = '';
    const submitted = formValues.search ? formValues.search.submitSucceeded : false;
    if (items.length === 0 && !submitted) {
        message = 'Please enter query and click SEARCH button above, results appear here.'
    } else if (items.length === 0 && submitted) {
        message = 'Your query returned no results.'
    } else if (items.length) {
        message = 'SEARCH results:'
    }

  return (
    <div>
      <hr />
      <p className="instructions">
          {message}
      </p>
    </div>
  );
};

Message.propTypes = {
    items: PropTypes.array,
    formValues: PropTypes.object
};
export default Message;