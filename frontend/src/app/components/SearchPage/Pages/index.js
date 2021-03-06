import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/* components */
import Alert from 'app.dump/Alert';
import Pagination from 'app.dump/Pagination';
import Spinner from 'app.dump/Spinner';
import Page from 'app.dump/Pages/SearchPage';
/* ac */
import { changePage } from 'app.ac/searchPage';
/* utilities */
import { paginationFilter } from 'app.helpers/array';

class SearchPagePages extends Component {
  static propTypes = {
    getAllResults: PropTypes.bool.isRequired,
    pagesLength: PropTypes.number.isRequired,
    pagesPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
    noResultMessage: PropTypes.string.isRequired,
    filteredPages: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string
    })).isRequired
  };

  render() {
    const { filteredPages, pagesPage, pagesLength, changePage, getAllResults, noResultMessage } = this.props;

    const pageList = filteredPages.map(page => <Page key={page.id} {...page} />);

    const pageCount = pagesLength / 6;

    const content = (
      <div>
        {pageList}
        <Pagination pagesNumber={pageCount}
                    initialPage={0}
                    itemsOnPage={6}
                    itemsNumber={pagesLength}
                    currPage={pagesPage}
                    onPageChange={(e) => { changePage(e.selected, 'pagesPage'); }}/>
      </div>
    );

    const plug = getAllResults
      ? <Alert type="info" text={noResultMessage} />
      : <Spinner />;

    return pagesLength ? content : plug;
  }
}

export default connect((state) => {
  const { pages, pagesPage, getAllResults, noResultMessage } = state.searchPage;

  const filteredPages = paginationFilter(pages, pagesPage, 6);
  const pagesLength = pages.length;

  return { filteredPages, pagesPage, pagesLength, getAllResults, noResultMessage };
}, {
  changePage
})(SearchPagePages);
