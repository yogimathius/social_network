const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/boss/lighthouse/social_network/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/boss/lighthouse/social_network/src/pages/404.tsx"))),
  "component---src-pages-dashboard-tsx": hot(preferDefault(require("/Users/boss/lighthouse/social_network/src/pages/dashboard.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/boss/lighthouse/social_network/src/pages/index.tsx"))),
  "component---src-pages-profile-components-editor-tsx": hot(preferDefault(require("/Users/boss/lighthouse/social_network/src/pages/profile-components/editor.tsx"))),
  "component---src-pages-profile-components-recent-post-tsx": hot(preferDefault(require("/Users/boss/lighthouse/social_network/src/pages/profile-components/recent-post.tsx"))),
  "component---src-pages-user-profile-tsx": hot(preferDefault(require("/Users/boss/lighthouse/social_network/src/pages/user-profile.tsx")))
}

