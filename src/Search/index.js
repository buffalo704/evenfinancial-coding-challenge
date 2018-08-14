import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import queryString from "query-string";
import Results from "./components/Results";
import Message from "./components/Message";
import Pagination from "./components/Pagination";
import SearchForm from "./components/SearchForm";
import * as actions from "../actions";

class Search extends Component {
  componentDidMount() {
    if (this.props.location.search) {
      this.loadDataFromURL(this.props.location.search);
    }
  }

  loadDataFromURL(searchUrl) {
    const parsed = queryString.parse(searchUrl);

    const page = parseInt(parsed.page) || 1;
    const pageLimit = parseInt(parsed.per_page) || 30;

    const formObj = {};
    const queries = parsed.q.split(" ");
    queries.map(query => {
      let searchTerms = query.split(":");
      if (searchTerms.length === 2) {
        formObj[searchTerms[0]] = searchTerms[1];
      } else {
        formObj["text"] = searchTerms[0];
      }
    });

    this.props.LOAD_DATA(formObj);
    this.props.SEARCH_REPO(formObj, page, pageLimit);
  }

  onPageChanged = data => {
    const { currentPage, pageLimit } = data;

    this.props.SEARCH_REPO(
      {
        text: this.props.formData.search.values.text,
        stars: this.props.formData.search.values.stars,
        license: this.props.formData.search.values.license,
        fork: this.props.formData.search.values.fork
      },
      currentPage,
      pageLimit
    );
  };

  onSubmit = formProps => {
    this.props.SEARCH_REPO(formProps, 1);
  };

  render() {
    const { handleSubmit, submitting, pristine, invalid, app } = this.props;
    const items = this.props.app.repository
      ? this.props.app.repository.items
      : [];
    const propsTotalRecords = this.props.app.repository
      ? this.props.app.repository.total_count
      : 0;
    const totalRecords = Math.min(propsTotalRecords, 1000); // github returns only first 1000 search results;
    const formValues = this.props.formData;
    return (
      <section className="main hbox space-between">
        <aside />
        <article>
          {app.isLoading && <div className="loading">Loading&#8230;</div>}

          <SearchForm
            initialValues={this.props.initialValues}
            handleSubmit={handleSubmit}
            onSubmit={this.onSubmit}
            submitting={submitting}
            invalid={invalid}
            pristine={pristine}
          />
          <Message items={items} formValues={formValues} />
          <Results items={items} />
          <Pagination
            totalRecords={totalRecords}
            pageLimit={30}
            pageNeighbors={2}
            onPageChanged={this.onPageChanged}
          />
        </article>
        <aside />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app,
    formData: state.form,
    initialValues: state.app.data
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "search" })
)(Search);
