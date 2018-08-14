import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

export class Pagination extends Component {
  loadData({ totalRecords = null, pageLimit = 30, pageNeighbors = 0 }) {
    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
    this.pageNeighbors =
      typeof pageNeighbors === "number"
        ? Math.max(0, Math.min(pageNeighbors, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.LEFT_PAGE = "LEFT";
    this.RIGHT_PAGE = "RIGHT";
      this.DECREMENT_PAGE = "DECREMENT";
      this.INCREMENT_PAGE = "INCREMENT";
  }

  range = (from, to, step = 1) => {
    let i = from;
    const arr = [];

    while (i <= to) {
      arr.push(i);
      i += step;
    }

    return arr;
  };

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.props.app.paginationInfo.currentPage;
    const pageNeighbors = this.pageNeighbors;

    const totalNumbers = this.pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

      let pages = this.range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      // handle: (1) < {5 6} [7] {8 9} (10)
      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = this.range(startPage - spillOffset, startPage - 1);
        pages = [this.LEFT_PAGE, ...extraPages, ...pages];

        // handle: (1) {2 3} [4] {5 6} > (10)
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = this.range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, this.RIGHT_PAGE];

        // handle: (1) < {4 5} [6] {7 8} > (10)
      } else {
        pages = [this.LEFT_PAGE, ...pages, this.RIGHT_PAGE];
      }

      return [
            this.DECREMENT_PAGE,
            1,
            ...pages,
            totalPages,
            this.INCREMENT_PAGE
        ];
    }

    return this.range(1, totalPages);
  };

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };

      onPageChanged(paginationData);
  };

  handleClick = page => evt => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.props.app.paginationInfo.currentPage - this.pageNeighbors * 2 - 1);
  };

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.props.app.paginationInfo.currentPage + this.pageNeighbors * 2 + 1);
  };

    handleDecrementLeft = evt => {
        evt.preventDefault();
        this.gotoPage(--this.props.app.paginationInfo.currentPage);
    };

    handleIncrementRight = evt => {
        evt.preventDefault();
        this.gotoPage(++this.props.app.paginationInfo.currentPage);
    };
  render() {
    this.loadData(this.props);
    if (!this.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.props.app.paginationInfo;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <nav>
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === this.LEFT_PAGE) {
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">...</span>
                    </a>
                  </li>
                );
              }

              if (page === this.RIGHT_PAGE) {
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">...</span>
                    </a>
                  </li>
                );
              }

                if (page === this.DECREMENT_PAGE) {
                    return (
                        <li key={index} className="page-item">
                            <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                                onClick={this.handleDecrementLeft}
                            >
                                <span aria-hidden="true">&lt;</span>
                            </a>
                        </li>
                    );
                }

                if (page === this.INCREMENT_PAGE) {
                    return (
                        <li key={index} className="page-item">
                            <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                                onClick={this.handleIncrementRight}
                            >
                                <span aria-hidden="true">&gt;</span>
                            </a>
                        </li>
                    );
                }

              return (
                <li
                  key={index}
                  className={`page-item ${currentPage === page ? "active" : ""}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={this.handleClick(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
    totalRecords: PropTypes.number,
    pageLimit: PropTypes.number,
    pageNeighbors: PropTypes.number,
    onPageChanged: PropTypes.func
};

const mapStateToProps = state => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps, actions)(Pagination);
//export default Pagination;
