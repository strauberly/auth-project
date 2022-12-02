# auth-project

## A simple React application implementing authentication for Supabase backend and displaying different content once authenticated.

-- 2 Dec 2022 --

- Secured profile route based on if user is logged in through our auth context.

- User auth token now persists in local storage so page can be refreshed and login persists, token is cleared on logout.

- User auth token now expires after about 10 min. Combination of helper function for determining time and amount of remaining time and passing an expirationTime value to our auth context.

- Timeout now auto clears if user logs out manually.

- This update concludes this course section study. Thank you for checking out what I have been working on. Cheers!

---

-- 1 Dec 2022 --

- Login has been implemented with user feedback and has desired response. Ie. We will get our access token.

- Functionality implemented that if auth is successful different site wide elements are rendered through through the usage of our auth context.

- User can now update their password through use of supabase.auth.updateUser().

- User can now logout, however we still need to implement page protection after token is reset to null

---

-- 30 Nov 2022 --

- Back from holiday break :
  - Application now provides alert if there is an error in creating a successful user to access our supabase backend through alert window. Next will begin development of user area upon successful login.

---

-- 22 Nov 2022 --

- Application creates a newly authenticated user in Supabase backend. There are options for validating length of password and requiring user to validate held in Supabase. Also created supabase client through separate component instead of .env properties this time.

---

---
