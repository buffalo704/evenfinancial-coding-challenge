const INITIAL_STATE = {
    paginationInfo: {
        currentPage: null
    },
    isLoading: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEARCH_REPO_REQUEST':
            return { ...state, isLoading: true };
        case 'SEARCH_REPO_FAIL':
            return { ...state, isLoading: false };
        case 'SEARCH_REPO_SUCCESS':
            return { ...state, isLoading: false, repository : action.payload };
        case 'SET_PAGINATION_INFO':
            return { ...state, paginationInfo : action.payload };
        case 'LOAD_DATA':
            return { ...state, data: action.data };
        default:
            return state;
    }
}