const { useLocation } = require("react-router-dom")

module.exports = function useQuery() {
    return new URLSearchParams(useLocation().search)
}