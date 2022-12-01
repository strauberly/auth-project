# auth-project

## A simple React application implementing authentication for Supabase backend and displaying different content once authenticated.

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
