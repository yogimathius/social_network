const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/404.tsx"))),
  "component---src-pages-dashboard-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/dashboard.tsx"))),
  "component---src-pages-forms-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/forms.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/index.tsx"))),
  "component---src-pages-mentor-list-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/mentor-list.tsx"))),
  "component---src-pages-student-list-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/student-list.tsx"))),
  "component---src-pages-user-profile-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/user-profile.tsx"))),
  "component---src-pages-user-rating-tsx": hot(preferDefault(require("/Users/fntcstudent/lighthouse/progress-bar/client/src/pages/user-rating.tsx")))
}

