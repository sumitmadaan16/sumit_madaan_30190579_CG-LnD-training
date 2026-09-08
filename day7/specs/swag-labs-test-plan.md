# Swag Labs Playwright Test Plan

## Application Overview

Structured Playwright automation test plan for the Swag Labs web application at https://www.saucedemo.com/. Each scenario assumes an independent fresh browser context unless its preconditions explicitly require an authenticated or populated cart state. Credentials used in the plan are SauceDemo's documented test users: standard_user, locked_out_user, and secret_sauce.

## Test Scenarios

### 1. Login Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. LGN-001 Valid standard user login

**File:** `tests/login/LGN-001-valid-login.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser context.
    - expect: The login page is displayed with Username, Password, and Login controls.
  2. Enter username standard_user and password secret_sauce, then activate Login.
    - expect: The user is authenticated successfully.
    - expect: The Inventory page is displayed.
    - expect: The page title or logo identifies Swag Labs.

#### 1.2. LGN-002 Invalid username

**File:** `tests/login/LGN-002-invalid-username.spec.ts`

**Steps:**
  1. Open the login page in a fresh context.
    - expect: The login form is visible.
  2. Enter an unknown username such as invalid_user and password secret_sauce, then submit.
    - expect: Login is rejected.
    - expect: An error message is shown near the form identifying invalid credentials.
    - expect: The user remains on the login page.

#### 1.3. LGN-003 Invalid password

**File:** `tests/login/LGN-003-invalid-password.spec.ts`

**Steps:**
  1. Enter standard_user and an incorrect password such as wrong_password, then submit.
    - expect: Login is rejected.
    - expect: The invalid-credentials error is displayed.
    - expect: The Inventory page is not opened.

#### 1.4. LGN-004 Locked out user

**File:** `tests/login/LGN-004-locked-user.spec.ts`

**Steps:**
  1. Enter locked_out_user and secret_sauce, then submit.
    - expect: Login is rejected.
    - expect: A locked-out-user error message is displayed.
    - expect: The user remains unauthenticated.

#### 1.5. LGN-005 Empty username and password

**File:** `tests/login/LGN-005-empty-fields.spec.ts`

**Steps:**
  1. Open the login page and submit without entering either field.
    - expect: Submission is blocked.
    - expect: A required-username validation message is displayed.
    - expect: No authenticated page is shown.

#### 1.6. LGN-006 Empty username with password

**File:** `tests/login/LGN-006-empty-username.spec.ts`

**Steps:**
  1. Enter only secret_sauce in Password and submit.
    - expect: Submission is blocked.
    - expect: The required-username message is displayed.

#### 1.7. LGN-007 Username with empty password

**File:** `tests/login/LGN-007-empty-password.spec.ts`

**Steps:**
  1. Enter standard_user in Username and submit with Password empty.
    - expect: Submission is blocked.
    - expect: The required-password message is displayed.

#### 1.8. LGN-008 Whitespace-only credentials

**File:** `tests/login/LGN-008-whitespace-fields.spec.ts`

**Steps:**
  1. Enter whitespace-only values in Username and Password and submit.
    - expect: The credentials are rejected as empty or invalid.
    - expect: A clear validation/error message is shown.
    - expect: The user is not authenticated.

#### 1.9. LGN-009 Credential boundary lengths and special characters

**File:** `tests/login/LGN-009-boundary-credentials.spec.ts`

**Steps:**
  1. Submit usernames and passwords at boundary values: empty string, one character, very long strings, and strings containing spaces or special characters.
    - expect: The page remains stable and responsive.
    - expect: No malformed navigation or script error occurs.
    - expect: Each invalid attempt produces an appropriate validation or invalid-credentials message.

#### 1.10. LGN-010 Password masking and error dismissal

**File:** `tests/login/LGN-010-password-ui.spec.ts`

**Steps:**
  1. Type a password into the Password field and inspect its input type and visible value.
    - expect: Password characters are masked.
    - expect: The field accepts input without exposing the raw value in the UI.
  2. Trigger a login error and activate the error close control if present.
    - expect: The error message is removed or dismissed.
    - expect: The form remains usable for another attempt.

#### 1.11. LGN-011 Login form keyboard submission

**File:** `tests/login/LGN-011-keyboard-submit.spec.ts`

**Steps:**
  1. Fill valid credentials and submit using the keyboard Enter key from the Password field.
    - expect: The same successful login behavior occurs as clicking Login.
  2. Return to a fresh login page, submit an empty form with Enter.
    - expect: The same required-field validation appears as mouse submission.

#### 1.12. LGN-012 Login controls and labels

**File:** `tests/login/LGN-012-accessibility-labels.spec.ts`

**Steps:**
  1. Inspect the login form using Playwright role and accessible-name locators.
    - expect: Username and Password fields have usable accessible names.
    - expect: The Login control is discoverable as a button.
    - expect: No required login control is visually or programmatically unlabeled.

### 2. Inventory Products Page

**Seed:** `tests/seed.spec.ts`

#### 2.1. INV-001 Product listing display

**File:** `tests/inventory/INV-001-product-list.spec.ts`

**Steps:**
  1. Log in as standard_user.
    - expect: The Inventory page loads.
    - expect: A product grid/list is visible.
    - expect: Each listed product has a name, price, description or product card content, image, and add/remove action as applicable.

#### 2.2. INV-002 Product count and unique cards

**File:** `tests/inventory/INV-002-product-count.spec.ts`

**Steps:**
  1. Log in and count product cards and their names.
    - expect: The expected SauceDemo catalog is rendered.
    - expect: Each product appears once with a unique product name.
    - expect: No duplicate or empty product cards are present.

#### 2.3. INV-003 Product details navigation

**File:** `tests/inventory/INV-003-product-details.spec.ts`

**Steps:**
  1. Select a product name or image from the inventory list.
    - expect: The product detail page opens for the selected product.
    - expect: The detail page contains the same product name, price, description, and image as the source card.
  2. Activate Back to products.
    - expect: The Inventory page returns with the catalog visible.

#### 2.4. INV-004 Sort name A to Z

**File:** `tests/inventory/INV-004-sort-name-az.spec.ts`

**Steps:**
  1. Select Name (A to Z) in the sort control.
    - expect: Products are ordered lexicographically from the first product name to the last.
    - expect: The selected sort option remains displayed.

#### 2.5. INV-005 Sort name Z to A

**File:** `tests/inventory/INV-005-sort-name-za.spec.ts`

**Steps:**
  1. Select Name (Z to A).
    - expect: Product names are in descending lexicographic order.
    - expect: The resulting order is the reverse of Name A to Z.

#### 2.6. INV-006 Sort price low to high

**File:** `tests/inventory/INV-006-sort-price-low-high.spec.ts`

**Steps:**
  1. Select Price (low to high).
    - expect: Numeric product prices are in ascending order.
    - expect: Prices are parsed numerically rather than alphabetically.

#### 2.7. INV-007 Sort price high to low

**File:** `tests/inventory/INV-007-sort-price-high-low.spec.ts`

**Steps:**
  1. Select Price (high to low).
    - expect: Numeric product prices are in descending order.
    - expect: The highest-priced product appears first.

#### 2.8. INV-008 Product image and description validation

**File:** `tests/inventory/INV-008-image-description.spec.ts`

**Steps:**
  1. Inspect every inventory product image and description.
    - expect: Each image has a non-empty source and loads successfully.
    - expect: Each image has meaningful alt text or an equivalent accessible label.
    - expect: Each description is present, readable, and associated with the correct product.

#### 2.9. INV-009 Inventory layout and controls

**File:** `tests/inventory/INV-009-inventory-controls.spec.ts`

**Steps:**
  1. Inspect the inventory header, sort control, cart link, menu button, product cards, and add-to-cart controls.
    - expect: All primary controls are visible and usable at normal desktop width.
    - expect: Sort control exposes exactly the four requested options.
    - expect: Buttons have distinct accessible names.

### 3. Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 3.1. CRT-001 Add one item

**File:** `tests/cart/CRT-001-add-single.spec.ts`

**Steps:**
  1. Log in and add one known product to the cart.
    - expect: The product action changes to Remove or equivalent selected state.
    - expect: The cart badge shows 1.
    - expect: The cart icon/link remains available.
  2. Open the cart.
    - expect: The cart contains exactly the selected product with matching name and price.

#### 3.2. CRT-002 Add multiple distinct items

**File:** `tests/cart/CRT-002-add-multiple.spec.ts`

**Steps:**
  1. Add three different products from the Inventory page.
    - expect: The cart badge shows 3.
    - expect: Each selected product is represented once in the cart.

#### 3.3. CRT-003 Remove item from cart

**File:** `tests/cart/CRT-003-remove-item.spec.ts`

**Steps:**
  1. Add two products and open the cart.
    - expect: Both products are listed.
  2. Remove one product.
    - expect: The removed product disappears.
    - expect: The remaining product stays listed.
    - expect: The badge decrements to 1 or is absent when the cart becomes empty.

#### 3.4. CRT-004 Cart badge count accuracy

**File:** `tests/cart/CRT-004-badge-count.spec.ts`

**Steps:**
  1. Add products one at a time, then remove them one at a time from inventory or cart.
    - expect: The badge count matches the number of selected distinct products after every action.
    - expect: The badge is absent or empty when no products are selected.

#### 3.5. CRT-005 Cart persistence across inventory navigation

**File:** `tests/cart/CRT-005-persistence-navigation.spec.ts`

**Steps:**
  1. Add a product, navigate to its detail page, return to products, and change the sort order.
    - expect: The selected product remains selected.
    - expect: The cart badge remains accurate after each navigation action.

#### 3.6. CRT-006 Cart item details and quantity

**File:** `tests/cart/CRT-006-item-details.spec.ts`

**Steps:**
  1. Add a product and open the cart.
    - expect: The cart displays the correct product name, image, description where applicable, price, and quantity.
    - expect: The default quantity is 1.
  2. Attempt to add the same product again from its inventory card.
    - expect: The application does not create an unintended duplicate line item or incorrect badge count.

#### 3.7. CRT-007 Empty cart behavior

**File:** `tests/cart/CRT-007-empty-cart.spec.ts`

**Steps:**
  1. Open the cart without adding any product.
    - expect: An empty-cart state is displayed.
    - expect: Checkout is unavailable or blocked until required items exist.
    - expect: Continue Shopping or equivalent navigation is available.

#### 3.8. CRT-008 Continue shopping and checkout navigation

**File:** `tests/cart/CRT-008-cart-navigation.spec.ts`

**Steps:**
  1. Add one product, open the cart, and select Continue Shopping.
    - expect: The Inventory page opens and the cart content remains intact.
  2. Open the cart again and select Checkout.
    - expect: The checkout information page opens with the selected cart item retained.

### 4. Checkout Flow

**Seed:** `tests/seed.spec.ts`

#### 4.1. CHK-001 Checkout information required fields

**File:** `tests/checkout/CHK-001-required-fields.spec.ts`

**Steps:**
  1. Log in, add an item, open the cart, and select Checkout.
    - expect: The checkout information form is displayed with First Name, Last Name, Postal Code, and Continue controls.
  2. Submit with all fields empty.
    - expect: Checkout does not advance.
    - expect: A required-field error identifies the missing first field.

#### 4.2. CHK-002 Missing first name

**File:** `tests/checkout/CHK-002-missing-first-name.spec.ts`

**Steps:**
  1. Fill Last Name and Postal Code but leave First Name empty, then continue.
    - expect: The form remains on the information page.
    - expect: A first-name validation message is shown.

#### 4.3. CHK-003 Missing last name

**File:** `tests/checkout/CHK-003-missing-last-name.spec.ts`

**Steps:**
  1. Fill First Name and Postal Code but leave Last Name empty, then continue.
    - expect: The form remains on the information page.
    - expect: A last-name validation message is shown.

#### 4.4. CHK-004 Missing postal code

**File:** `tests/checkout/CHK-004-missing-postal-code.spec.ts`

**Steps:**
  1. Fill both names but leave Postal Code empty, then continue.
    - expect: The form remains on the information page.
    - expect: A postal-code validation message is shown.

#### 4.5. CHK-005 Boundary and malformed checkout values

**File:** `tests/checkout/CHK-005-boundary-values.spec.ts`

**Steps:**
  1. Try empty, one-character, whitespace-only, very long, numeric, alphabetic, and special-character values for each checkout field.
    - expect: The form handles values without layout breakage or unhandled errors.
    - expect: Invalid or missing values are rejected according to application validation rules.
    - expect: Valid boundary values proceed when accepted by the application.

#### 4.6. CHK-006 Valid checkout information

**File:** `tests/checkout/CHK-006-valid-information.spec.ts`

**Steps:**
  1. Fill First Name Ada, Last Name Lovelace, and Postal Code 12345, then continue.
    - expect: The checkout overview page opens.
    - expect: The selected product, price, quantity, subtotal, tax, and total are visible.

#### 4.7. CHK-007 Cancel checkout from information page

**File:** `tests/checkout/CHK-007-cancel-information.spec.ts`

**Steps:**
  1. Enter checkout information and activate Cancel.
    - expect: The user returns to the cart or prior shopping page according to the application flow.
    - expect: No order is submitted.
    - expect: The cart contents remain available.

#### 4.8. CHK-008 Cancel checkout from overview

**File:** `tests/checkout/CHK-008-cancel-overview.spec.ts`

**Steps:**
  1. Reach checkout overview with valid information, then activate Cancel.
    - expect: The user returns to the Inventory page or defined cancellation destination.
    - expect: No completion confirmation is shown.
    - expect: The session remains usable.

#### 4.9. CHK-009 Successful order completion

**File:** `tests/checkout/CHK-009-successful-order.spec.ts`

**Steps:**
  1. Add one product, complete valid checkout information, review the overview, and select Finish.
    - expect: The order completes successfully.
    - expect: A confirmation page and success message are displayed.
    - expect: The confirmation includes a meaningful completion title or order message.

#### 4.10. CHK-010 Completion page navigation

**File:** `tests/checkout/CHK-010-completion-navigation.spec.ts`

**Steps:**
  1. Complete a successful order and activate Back Home.
    - expect: The Inventory page is displayed.
    - expect: The completed order is not still presented as an active checkout.

#### 4.11. CHK-011 Checkout with stale or empty cart

**File:** `tests/checkout/CHK-011-empty-cart-checkout.spec.ts`

**Steps:**
  1. Open checkout through direct UI navigation with an empty cart, or remove all items before attempting Checkout.
    - expect: The application blocks checkout or handles the empty state without crashing.
    - expect: No order can be finished without a product.

#### 4.12. CHK-012 Checkout total calculation

**File:** `tests/checkout/CHK-012-total-calculation.spec.ts`

**Steps:**
  1. Add multiple products, proceed to overview, and read item prices, subtotal, tax, and total.
    - expect: The subtotal equals the sum of item prices.
    - expect: The tax is calculated according to the displayed application rule.
    - expect: The total equals subtotal plus tax within the app's currency precision.

### 5. Navigation and Menu

**Seed:** `tests/seed.spec.ts`

#### 5.1. NAV-001 Open and close menu

**File:** `tests/navigation/NAV-001-menu-toggle.spec.ts`

**Steps:**
  1. Log in and activate the menu button.
    - expect: The side menu opens.
    - expect: Menu entries for All Items, About, Logout, and Reset App State are visible.
  2. Activate the menu close control.
    - expect: The menu closes and no longer obscures the main content.

#### 5.2. NAV-002 All Items navigation

**File:** `tests/navigation/NAV-002-all-items.spec.ts`

**Steps:**
  1. From a product detail page or cart, open the menu and choose All Items.
    - expect: The Inventory page is displayed.
    - expect: The product catalog and cart state are available.

#### 5.3. NAV-003 About navigation

**File:** `tests/navigation/NAV-003-about.spec.ts`

**Steps:**
  1. Open the menu and select About.
    - expect: The Sauce Labs About page opens in the expected route or navigation target.
    - expect: The destination is not a blank or error page.

#### 5.4. NAV-004 Logout

**File:** `tests/navigation/NAV-004-logout.spec.ts`

**Steps:**
  1. Log in, open the menu, and select Logout.
    - expect: The user is returned to the login page.
    - expect: Authenticated inventory content is no longer accessible in the active UI.

#### 5.5. NAV-005 Reset App State

**File:** `tests/navigation/NAV-005-reset-state.spec.ts`

**Steps:**
  1. Add products, open the menu, and select Reset App State.
    - expect: Selected products are cleared.
    - expect: The cart badge is removed or reset.
    - expect: Product action buttons return to their initial Add to cart state.

#### 5.6. NAV-006 Menu keyboard and accessibility behavior

**File:** `tests/navigation/NAV-006-menu-accessibility.spec.ts`

**Steps:**
  1. Open the menu using the available button and inspect menu item roles and names.
    - expect: The menu button has an accessible name and state.
    - expect: All required menu actions are keyboard reachable and have unique names.
  2. Close the menu with its close control or Escape if supported.
    - expect: Focus and visibility return to the main page without a stuck overlay.

### 6. UI and Usability

**Seed:** `tests/seed.spec.ts`

#### 6.1. UI-001 Responsive inventory layout

**File:** `tests/ui/UI-001-responsive-inventory.spec.ts`

**Steps:**
  1. Log in and measure the page at desktop, tablet, and mobile viewport sizes.
    - expect: The header, sort control, product cards, and cart remain usable at each viewport.
    - expect: No horizontal overflow or overlapping controls is present.

#### 6.2. UI-002 Responsive checkout layout

**File:** `tests/ui/UI-002-responsive-checkout.spec.ts`

**Steps:**
  1. Reach checkout information and overview at desktop, tablet, and mobile widths.
    - expect: All form labels, inputs, buttons, order summary, and totals remain visible and usable.
    - expect: Text does not overlap or become clipped.

#### 6.3. UI-003 Button visibility and state

**File:** `tests/ui/UI-003-button-states.spec.ts`

**Steps:**
  1. Inspect Login, Add to cart, Remove, Cart, Checkout, Continue, Cancel, Finish, menu, and close controls through the main flows.
    - expect: Required buttons are visible in their relevant states.
    - expect: Buttons show a clear state change after activation.
    - expect: Disabled or unavailable actions cannot be accidentally submitted.

#### 6.4. UI-004 Labels, messages, and currency formatting

**File:** `tests/ui/UI-004-content-format.spec.ts`

**Steps:**
  1. Inspect field labels, validation errors, product prices, subtotal, tax, total, and completion messages.
    - expect: Text is readable and associated with the correct control or value.
    - expect: Prices use consistent currency formatting.
    - expect: Messages are specific enough to explain the current state or error.

#### 6.5. UI-005 Broken image validation

**File:** `tests/ui/UI-005-broken-images.spec.ts`

**Steps:**
  1. Collect all image elements on login, inventory, product detail, cart, and completion-related pages and verify their load state.
    - expect: No image reports a failed network load.
    - expect: Images have nonzero rendered dimensions when they are expected to be visible.
    - expect: No broken-image placeholder is shown.

#### 6.6. UI-006 Focus and keyboard usability

**File:** `tests/ui/UI-006-keyboard-focus.spec.ts`

**Steps:**
  1. Navigate the login, inventory, cart, and checkout workflows using Tab, Shift+Tab, Enter, and Escape where supported.
    - expect: Focus moves through interactive controls in a logical order.
    - expect: Visible focus indication is present.
    - expect: Keyboard users can complete or cancel the primary flow.

### 7. Cross-Functional and End-to-End

**Seed:** `tests/seed.spec.ts`

#### 7.1. E2E-001 Complete single-item purchase

**File:** `tests/e2e/E2E-001-single-purchase.spec.ts`

**Steps:**
  1. Log in as standard_user.
    - expect: Inventory loads successfully.
  2. Add a product, verify the badge, open Cart, and select Checkout.
    - expect: The selected product follows the user through cart and checkout.
  3. Enter valid customer information, review the order, and finish.
    - expect: The order completes and the confirmation page is displayed.

#### 7.2. E2E-002 Complete multi-item purchase

**File:** `tests/e2e/E2E-002-multi-purchase.spec.ts`

**Steps:**
  1. Log in, add at least three different products, and open the cart.
    - expect: All selected products and the correct badge count are present.
  2. Complete checkout with valid information.
    - expect: The overview contains every selected product and correct aggregate totals.
    - expect: The order finishes successfully.

#### 7.3. E2E-003 Cart behavior after logout and new login

**File:** `tests/e2e/E2E-003-cart-after-logout.spec.ts`

**Steps:**
  1. Log in as standard_user, add a product, log out, and log in again as standard_user.
    - expect: The second login succeeds.
    - expect: Cart behavior matches the application's documented/session storage behavior: the plan should assert whether the cart is cleared or retained, and flag a mismatch if behavior is inconsistent between runs.

#### 7.4. E2E-004 Session handling after refresh

**File:** `tests/e2e/E2E-004-refresh-session.spec.ts`

**Steps:**
  1. Log in, add a product, refresh the Inventory page, then open the cart.
    - expect: The session remains valid or redirects consistently according to the application contract.
    - expect: Cart state is retained or cleared consistently with the app's session behavior.

#### 7.5. E2E-005 Unauthenticated protected-page handling

**File:** `tests/e2e/E2E-005-protected-navigation.spec.ts`

**Steps:**
  1. Open a fresh context and attempt to navigate directly to inventory, cart, or checkout routes without logging in.
    - expect: The application redirects to login or otherwise prevents protected content access.
    - expect: No authenticated product or order data is exposed.

#### 7.6. E2E-006 Reset state during an active shopping session

**File:** `tests/e2e/E2E-006-reset-state-flow.spec.ts`

**Steps:**
  1. Log in, add multiple items, navigate between inventory and cart, then use Reset App State.
    - expect: The cart and selected product state are cleared everywhere.
    - expect: The user can continue shopping and add a new item afterward without stale state.

#### 7.7. E2E-007 Logout during checkout

**File:** `tests/e2e/E2E-007-logout-checkout.spec.ts`

**Steps:**
  1. Log in, add an item, enter checkout information, then open the menu and log out if the UI permits it.
    - expect: The session ends safely.
    - expect: Returning to the app requires login.
    - expect: No partially submitted order is shown as completed.

#### 7.8. E2E-008 Error recovery and retry

**File:** `tests/e2e/E2E-008-retry-recovery.spec.ts`

**Steps:**
  1. Trigger login and checkout validation errors, correct the inputs, and retry each action.
    - expect: Errors do not permanently disable the form.
    - expect: Corrected login proceeds to inventory.
    - expect: Corrected checkout proceeds to overview and can complete.
