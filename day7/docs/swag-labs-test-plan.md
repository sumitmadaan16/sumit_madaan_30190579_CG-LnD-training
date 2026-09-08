# Swag Labs Test Plan

## Application Overview

Shareable Playwright test plan for https://www.saucedemo.com/. Scenarios are designed for independent automation runs using fresh browser contexts unless their preconditions specify an authenticated session or populated cart.

## Test Scenarios

### 1. Login Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. LGN-001 Valid login

**File:** `tests/login/LGN-001-valid-login.spec.ts`

**Steps:**
  1. Open the login page, enter standard_user and secret_sauce, and select Login.
    - expect: The Inventory page opens and identifies Swag Labs.

#### 1.2. LGN-002 Invalid username

**File:** `tests/login/LGN-002-invalid-username.spec.ts`

**Steps:**
  1. Submit invalid_user with secret_sauce.
    - expect: Login is rejected and an invalid-credentials error is displayed.

#### 1.3. LGN-003 Invalid password

**File:** `tests/login/LGN-003-invalid-password.spec.ts`

**Steps:**
  1. Submit standard_user with an incorrect password.
    - expect: Login is rejected and an error is displayed.

#### 1.4. LGN-004 Locked-out user

**File:** `tests/login/LGN-004-locked-user.spec.ts`

**Steps:**
  1. Submit locked_out_user with secret_sauce.
    - expect: Login is rejected with a locked-out-user message.

#### 1.5. LGN-005 Empty credentials

**File:** `tests/login/LGN-005-empty-fields.spec.ts`

**Steps:**
  1. Submit the empty login form.
    - expect: Submission is blocked and required-field validation is displayed.

#### 1.6. LGN-006 Missing username

**File:** `tests/login/LGN-006-empty-username.spec.ts`

**Steps:**
  1. Enter only the password and submit.
    - expect: Username validation is displayed and login does not proceed.

#### 1.7. LGN-007 Missing password

**File:** `tests/login/LGN-007-empty-password.spec.ts`

**Steps:**
  1. Enter only the username and submit.
    - expect: Password validation is displayed and login does not proceed.

#### 1.8. LGN-008 Whitespace credentials

**File:** `tests/login/LGN-008-whitespace-fields.spec.ts`

**Steps:**
  1. Submit whitespace-only username and password values.
    - expect: Values are rejected without navigation or an unhandled error.

#### 1.9. LGN-009 Credential boundaries

**File:** `tests/login/LGN-009-boundary-credentials.spec.ts`

**Steps:**
  1. Try one-character, very long, special-character, and whitespace values.
    - expect: The form remains stable and invalid attempts produce validation or credential errors.

#### 1.10. LGN-010 Password masking and error dismissal

**File:** `tests/login/LGN-010-password-ui.spec.ts`

**Steps:**
  1. Inspect password masking, trigger an error, and dismiss it.
    - expect: Password text is masked and the form remains usable after error dismissal.

#### 1.11. LGN-011 Keyboard login

**File:** `tests/login/LGN-011-keyboard-submit.spec.ts`

**Steps:**
  1. Submit valid and invalid forms using Enter.
    - expect: Keyboard submission matches mouse submission behavior.

#### 1.12. LGN-012 Login accessibility labels

**File:** `tests/login/LGN-012-accessibility-labels.spec.ts`

**Steps:**
  1. Inspect login controls using accessible roles and names.
    - expect: Username, Password, and Login have usable accessible names.

### 2. Inventory Products

**Seed:** `tests/seed.spec.ts`

#### 2.1. INV-001 Product display

**File:** `tests/inventory/INV-001-product-list.spec.ts`

**Steps:**
  1. Log in and inspect the product catalog.
    - expect: Product cards show names, prices, descriptions, images, and actions.

#### 2.2. INV-002 Product count and uniqueness

**File:** `tests/inventory/INV-002-product-count.spec.ts`

**Steps:**
  1. Count product cards and names.
    - expect: The expected catalog is present without duplicate or empty cards.

#### 2.3. INV-003 Product details

**File:** `tests/inventory/INV-003-product-details.spec.ts`

**Steps:**
  1. Open a product detail and return to products.
    - expect: Detail values match the source card and navigation works.

#### 2.4. INV-004 Name A-Z sorting

**File:** `tests/inventory/INV-004-sort-name-az.spec.ts`

**Steps:**
  1. Select Name (A to Z).
    - expect: Names are in ascending lexicographic order.

#### 2.5. INV-005 Name Z-A sorting

**File:** `tests/inventory/INV-005-sort-name-za.spec.ts`

**Steps:**
  1. Select Name (Z to A).
    - expect: Names are in descending lexicographic order.

#### 2.6. INV-006 Price low-high sorting

**File:** `tests/inventory/INV-006-sort-price-low-high.spec.ts`

**Steps:**
  1. Select Price (low to high).
    - expect: Prices are numerically ascending.

#### 2.7. INV-007 Price high-low sorting

**File:** `tests/inventory/INV-007-sort-price-high-low.spec.ts`

**Steps:**
  1. Select Price (high to low).
    - expect: Prices are numerically descending.

#### 2.8. INV-008 Image and description validation

**File:** `tests/inventory/INV-008-image-description.spec.ts`

**Steps:**
  1. Inspect every image, alt label, and description.
    - expect: Images load successfully and descriptions match their products.

#### 2.9. INV-009 Inventory controls

**File:** `tests/inventory/INV-009-inventory-controls.spec.ts`

**Steps:**
  1. Inspect header, sort, cart, menu, and product actions.
    - expect: All controls are visible, labeled, and usable.

### 3. Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 3.1. CRT-001 Add one item

**File:** `tests/cart/CRT-001-add-single.spec.ts`

**Steps:**
  1. Add one product and open the cart.
    - expect: The badge shows 1 and the matching product is listed.

#### 3.2. CRT-002 Add multiple items

**File:** `tests/cart/CRT-002-add-multiple.spec.ts`

**Steps:**
  1. Add three distinct products.
    - expect: The badge shows 3 and each product appears once.

#### 3.3. CRT-003 Remove an item

**File:** `tests/cart/CRT-003-remove-item.spec.ts`

**Steps:**
  1. Add two products and remove one in the cart.
    - expect: Only the remaining product is listed and the badge decrements.

#### 3.4. CRT-004 Badge accuracy

**File:** `tests/cart/CRT-004-badge-count.spec.ts`

**Steps:**
  1. Add and remove products individually.
    - expect: The badge always matches selected product count and clears when empty.

#### 3.5. CRT-005 Navigation persistence

**File:** `tests/cart/CRT-005-persistence-navigation.spec.ts`

**Steps:**
  1. Add a product, navigate through detail and sorting, and return to cart.
    - expect: The product remains selected and the badge remains accurate.

#### 3.6. CRT-006 Cart item details

**File:** `tests/cart/CRT-006-item-details.spec.ts`

**Steps:**
  1. Inspect product name, image, price, quantity, and duplicate-add behavior.
    - expect: Cart details are correct and duplicate actions do not corrupt state.

#### 3.7. CRT-007 Empty cart

**File:** `tests/cart/CRT-007-empty-cart.spec.ts`

**Steps:**
  1. Open the cart without adding products.
    - expect: An empty state appears and checkout is blocked or unavailable.

#### 3.8. CRT-008 Cart navigation

**File:** `tests/cart/CRT-008-cart-navigation.spec.ts`

**Steps:**
  1. Use Continue Shopping and Checkout from a populated cart.
    - expect: Both destinations open with cart state preserved.

### 4. Checkout Flow

**Seed:** `tests/seed.spec.ts`

#### 4.1. CHK-001 Required checkout fields

**File:** `tests/checkout/CHK-001-required-fields.spec.ts`

**Steps:**
  1. Reach checkout and submit empty information fields.
    - expect: Checkout remains on the form and required validation appears.

#### 4.2. CHK-002 Missing first name

**File:** `tests/checkout/CHK-002-missing-first-name.spec.ts`

**Steps:**
  1. Fill last name and postal code only.
    - expect: First-name validation is displayed.

#### 4.3. CHK-003 Missing last name

**File:** `tests/checkout/CHK-003-missing-last-name.spec.ts`

**Steps:**
  1. Fill first name and postal code only.
    - expect: Last-name validation is displayed.

#### 4.4. CHK-004 Missing postal code

**File:** `tests/checkout/CHK-004-missing-postal-code.spec.ts`

**Steps:**
  1. Fill names but leave postal code empty.
    - expect: Postal-code validation is displayed.

#### 4.5. CHK-005 Checkout boundary values

**File:** `tests/checkout/CHK-005-boundary-values.spec.ts`

**Steps:**
  1. Try empty, whitespace, one-character, long, numeric, and special values.
    - expect: Invalid values are handled without layout breakage or crashes.

#### 4.6. CHK-006 Valid information

**File:** `tests/checkout/CHK-006-valid-information.spec.ts`

**Steps:**
  1. Enter Ada, Lovelace, and 12345 and continue.
    - expect: The overview shows products, prices, tax, and total.

#### 4.7. CHK-007 Cancel information

**File:** `tests/checkout/CHK-007-cancel-information.spec.ts`

**Steps:**
  1. Cancel from the information form.
    - expect: The user returns to the prior shopping destination without ordering.

#### 4.8. CHK-008 Cancel overview

**File:** `tests/checkout/CHK-008-cancel-overview.spec.ts`

**Steps:**
  1. Cancel from checkout overview.
    - expect: The order is not completed and the session remains usable.

#### 4.9. CHK-009 Successful checkout

**File:** `tests/checkout/CHK-009-successful-order.spec.ts`

**Steps:**
  1. Complete valid checkout and select Finish.
    - expect: A success confirmation page and completion message appear.

#### 4.10. CHK-010 Back Home

**File:** `tests/checkout/CHK-010-completion-navigation.spec.ts`

**Steps:**
  1. Select Back Home from the completion page.
    - expect: Inventory opens and no active checkout remains.

#### 4.11. CHK-011 Empty-cart checkout

**File:** `tests/checkout/CHK-011-empty-cart-checkout.spec.ts`

**Steps:**
  1. Attempt checkout with no products.
    - expect: Checkout is blocked or handled as an empty state without crashing.

#### 4.12. CHK-012 Total calculation

**File:** `tests/checkout/CHK-012-total-calculation.spec.ts`

**Steps:**
  1. Review multiple product prices, subtotal, tax, and total.
    - expect: Displayed totals follow the application's calculation and precision rules.

### 5. Navigation and Menu

**Seed:** `tests/seed.spec.ts`

#### 5.1. NAV-001 Open and close menu

**File:** `tests/navigation/NAV-001-menu-toggle.spec.ts`

**Steps:**
  1. Open and close the side menu.
    - expect: The menu exposes required actions and closes cleanly.

#### 5.2. NAV-002 All Items

**File:** `tests/navigation/NAV-002-all-items.spec.ts`

**Steps:**
  1. Choose All Items from a detail or cart view.
    - expect: Inventory opens with shopping state available.

#### 5.3. NAV-003 About

**File:** `tests/navigation/NAV-003-about.spec.ts`

**Steps:**
  1. Choose About from the menu.
    - expect: The Sauce Labs About destination opens successfully.

#### 5.4. NAV-004 Logout

**File:** `tests/navigation/NAV-004-logout.spec.ts`

**Steps:**
  1. Choose Logout from the authenticated menu.
    - expect: The login page returns and authenticated content is unavailable.

#### 5.5. NAV-005 Reset App State

**File:** `tests/navigation/NAV-005-reset-state.spec.ts`

**Steps:**
  1. Add products and choose Reset App State.
    - expect: Cart and selected-product state are cleared.

#### 5.6. NAV-006 Menu accessibility

**File:** `tests/navigation/NAV-006-menu-accessibility.spec.ts`

**Steps:**
  1. Inspect menu roles, names, keyboard reachability, and close behavior.
    - expect: Menu controls are accessible and do not trap the user.

### 6. UI and Usability

**Seed:** `tests/seed.spec.ts`

#### 6.1. UI-001 Responsive inventory

**File:** `tests/ui/UI-001-responsive-inventory.spec.ts`

**Steps:**
  1. Check inventory at desktop, tablet, and mobile viewports.
    - expect: Content remains usable without overflow or overlap.

#### 6.2. UI-002 Responsive checkout

**File:** `tests/ui/UI-002-responsive-checkout.spec.ts`

**Steps:**
  1. Check checkout form and overview at multiple viewport widths.
    - expect: Labels, inputs, totals, and buttons remain visible and usable.

#### 6.3. UI-003 Button visibility and state

**File:** `tests/ui/UI-003-button-states.spec.ts`

**Steps:**
  1. Inspect primary buttons through login, shopping, cart, and checkout flows.
    - expect: Buttons are visible, labeled, and reflect state changes.

#### 6.4. UI-004 Labels and messages

**File:** `tests/ui/UI-004-content-format.spec.ts`

**Steps:**
  1. Inspect field labels, errors, prices, totals, and completion messages.
    - expect: Text is readable, associated correctly, and consistently formatted.

#### 6.5. UI-005 Broken images

**File:** `tests/ui/UI-005-broken-images.spec.ts`

**Steps:**
  1. Verify image load state and rendered dimensions across pages.
    - expect: No expected image is broken or rendered as a missing placeholder.

#### 6.6. UI-006 Keyboard focus

**File:** `tests/ui/UI-006-keyboard-focus.spec.ts`

**Steps:**
  1. Navigate primary workflows using keyboard controls.
    - expect: Focus order is logical, focus is visible, and key actions work.

### 7. Cross-Functional and End-to-End

**Seed:** `tests/seed.spec.ts`

#### 7.1. E2E-001 Single-item purchase

**File:** `tests/e2e/E2E-001-single-purchase.spec.ts`

**Steps:**
  1. Log in, add one product, checkout with valid information, and finish.
    - expect: The complete purchase flow ends at order confirmation.

#### 7.2. E2E-002 Multi-item purchase

**File:** `tests/e2e/E2E-002-multi-purchase.spec.ts`

**Steps:**
  1. Add three products and complete checkout.
    - expect: All products and aggregate totals are correct through confirmation.

#### 7.3. E2E-003 Cart after logout/login

**File:** `tests/e2e/E2E-003-cart-after-logout.spec.ts`

**Steps:**
  1. Add a product, log out, and log in again.
    - expect: Cart retention or clearing matches the defined session contract consistently.

#### 7.4. E2E-004 Refresh session

**File:** `tests/e2e/E2E-004-refresh-session.spec.ts`

**Steps:**
  1. Refresh after login and adding a product, then open the cart.
    - expect: Authentication and cart state behave consistently after refresh.

#### 7.5. E2E-005 Protected navigation

**File:** `tests/e2e/E2E-005-protected-navigation.spec.ts`

**Steps:**
  1. Open protected routes in a fresh unauthenticated context.
    - expect: The app redirects to login or blocks protected content.

#### 7.6. E2E-006 Reset during shopping

**File:** `tests/e2e/E2E-006-reset-state-flow.spec.ts`

**Steps:**
  1. Shop across inventory and cart, then reset application state.
    - expect: All selected state clears and shopping can resume cleanly.

#### 7.7. E2E-007 Logout during checkout

**File:** `tests/e2e/E2E-007-logout-checkout.spec.ts`

**Steps:**
  1. Begin checkout and log out if the menu is available.
    - expect: The session ends without falsely completing an order.

#### 7.8. E2E-008 Error recovery

**File:** `tests/e2e/E2E-008-retry-recovery.spec.ts`

**Steps:**
  1. Trigger login and checkout errors, correct inputs, and retry.
    - expect: Errors are recoverable and corrected flows complete successfully.
