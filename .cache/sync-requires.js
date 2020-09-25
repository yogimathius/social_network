const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/src/pages/404.tsx"))),
  "component---src-pages-dashboard-tsx": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/src/pages/dashboard.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/src/pages/index.tsx"))),
  "component---src-pages-login-logout-jsx": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/src/pages/login-logout.jsx"))),
  "component---src-pages-messages-jsx": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/src/pages/messages.jsx"))),
  "component---src-pages-user-profile-tsx": hot(preferDefault(require("/Users/matthewgibson/lighthouse/final-project/social-network/src/pages/user-profile.tsx")))
}

