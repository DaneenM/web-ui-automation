# Test Plan - SauceDemo Login Tests

## Objective
Automate login functionality of https://www.saucedemo.com/ using Playwright to verify valid, invalid, and locked-out user scenarios.

## Scope
- Login page
- Inventory page (post-login)

## Test Cases

| Test ID | Title                     | Steps                                                            | Expected Result                                           |
|---------|---------------------------|------------------------------------------------------------------|-----------------------------------------------------------|
| TC01    | Login with valid user     | 1. Navigate to login page<br>2. Enter valid username and password<br>3. Click Login | User is redirected to the Inventory page (products listed) |
| TC02    | Login with invalid creds  | 1. Navigate to login page<br>2. Enter invalid username or password<br>3. Click Login | Error message displayed on the login page                 |
| TC03    | Login with locked out user| 1. Navigate to login page<br>2. Enter locked_out_user credentials<br>3. Click Login | Error message about user being locked out                 |

## Test Data
- Valid user: standard_user / secret_sauce
- Invalid user: any invalid combo (e.g. wrong_user / wrong_pass)
- Locked out user: locked_out_user / secret_sauce

## Environment
- Browser: Chromium (headless)
- Tool: Playwright Test
