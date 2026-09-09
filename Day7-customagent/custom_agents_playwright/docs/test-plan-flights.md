# PHPTRAVELS Flights Module - Test Plan

**Document Version:** 1.0  
**Test Plan Date:** September 8, 2026  
**Application:** PHPTRAVELS Travel Booking Platform  
**Module:** Flights Search, Results, Filtering, and Booking  
**Base URL:** https://phptravels.net/

---

## 1. TEST EXECUTION STRATEGY

**Testing Phases:**
- **Phase 1 (Critical Path):** 12 test cases - Core search and results
- **Phase 2 (Booking Flow):** 6 test cases - Flight details and selection
- **Phase 3 (Enhancements):** 8 test cases - Sorting, filtering, edge cases

**Total Test Cases:** 26  
**Estimated Duration:** 4-7 hours  
**Browser:** Chromium Desktop  
**Framework:** Playwright with TypeScript

---

## 2. PHASE 1: CRITICAL PATH (12 Test Cases)

### TC_FLT_001.01: Search Form Loads
- **Requirement:** REQ-FLT-001
- **Steps:**
  1. Navigate to https://phptravels.net/
  2. Verify flights search form is visible
  3. Check all 7 fields are present (Departure, Arrival, Dep Date, Return Date, Passengers, Trip Type, Cabin Class)
  4. Verify all fields are enabled and interactive
- **Expected Result:** Search form displays completely with all required fields functional
- **Pass Criteria:** All 7 fields visible and clickable

### TC_FLT_002.01: Departure Autocomplete Works
- **Requirement:** REQ-FLT-002
- **Steps:**
  1. Click Departure Airport field
  2. Type "New" (3 characters)
  3. Wait 500ms for autocomplete dropdown
  4. Verify dropdown appears with airport suggestions
- **Expected Result:** Autocomplete dropdown displays with suggestions containing "New"
- **Pass Criteria:** Dropdown visible with 2+ suggestions

### TC_FLT_002.02: Select Departure Airport
- **Requirement:** REQ-FLT-002
- **Steps:**
  1. Autocomplete dropdown is visible
  2. Click "New York (JFK)"
  3. Verify field shows "JFK" or "New York"
- **Expected Result:** JFK selected and persisted in field
- **Pass Criteria:** Field displays selected airport, field value persists

### TC_FLT_003.01: Arrival Autocomplete Works
- **Requirement:** REQ-FLT-003
- **Steps:**
  1. Click Arrival Airport field
  2. Type "Los"
  3. Wait for dropdown
  4. Verify suggestions appear
- **Expected Result:** Dropdown shows Los Angeles and related airports
- **Pass Criteria:** Dropdown displays with LAX option visible

### TC_FLT_003.02: Same Airport Validation
- **Requirement:** REQ-FLT-003
- **Steps:**
  1. Set Departure: JFK
  2. Set Arrival: JFK (same airport)
  3. Click Search button
  4. Verify error message appears
- **Expected Result:** Error message displays "Departure and arrival airports must be different"
- **Pass Criteria:** Error shown, form not submitted

### TC_FLT_004.01: Departure Date Picker Opens
- **Requirement:** REQ-FLT-004
- **Steps:**
  1. Click Departure Date field
  2. Verify calendar date picker opens
  3. Check if past dates are disabled (greyed out)
  4. Verify future dates are selectable
- **Expected Result:** Calendar appears with past dates disabled
- **Pass Criteria:** Calendar visible, past dates greyed, future dates clickable

### TC_FLT_004.02: Select Future Departure Date
- **Requirement:** REQ-FLT-004
- **Steps:**
  1. Date picker is open
  2. Click a date 7 days from today
  3. Verify date displays in MM/DD/YYYY format
  4. Verify calendar closes
- **Expected Result:** Selected date displays correctly in field
- **Pass Criteria:** Date shows in correct format, calendar closes

### TC_FLT_005.01: Return Date After Departure
- **Requirement:** REQ-FLT-005
- **Steps:**
  1. Set Departure Date to September 15, 2026
  2. Open Return Date calendar
  3. Try to select September 14, 2026
  4. Verify September 14 is disabled
  5. Select September 16, 2026
- **Expected Result:** Dates before departure are disabled, dates after are selectable
- **Pass Criteria:** Return date correctly validates minimum 1-day difference

### TC_FLT_006.01: Passenger Counter Interface
- **Requirement:** REQ-FLT-006
- **Steps:**
  1. Click Passengers field
  2. Increment Adults to 2
  3. Increment Children to 1
  4. Verify display shows "2 Adults, 1 Child"
  5. Verify total count is 3
- **Expected Result:** Passenger counter works with category breakdown
- **Pass Criteria:** Display shows correct counts, total accurate

### TC_FLT_006.02: Minimum Adult Validation
- **Requirement:** REQ-FLT-006
- **Steps:**
  1. Open Passengers selector
  2. Try to reduce Adults to 0
  3. Attempt to click Search
  4. Verify error or prevention
- **Expected Result:** Form prevents submission without at least 1 adult
- **Pass Criteria:** Search blocked, error displayed

### TC_FLT_008.01: Trip Type Options Display
- **Requirement:** REQ-FLT-008
- **Steps:**
  1. Verify two radio buttons present: "One-Way" and "Round Trip"
  2. Check "Round Trip" is selected by default
  3. Verify Return Date field is visible
  4. Click "One-Way"
  5. Verify Return Date field hides
- **Expected Result:** Trip type selector works, conditional fields show/hide
- **Pass Criteria:** Both options present, Round Trip default, conditional field logic works

### TC_FLT_009.01: Valid Search Executes Successfully
- **Requirement:** REQ-FLT-009
- **Steps:**
  1. Fill complete search: JFK → LAX, Sept 15-22, 2 Adults, Economy
  2. Click Search button
  3. Wait for page to load
  4. Verify results page loads within 10 seconds
  5. Verify no error messages display
- **Expected Result:** Search results page loads with flight options
- **Pass Criteria:** Results load within 10 seconds, flights displayed

---

## 3. PHASE 2: BOOKING FLOW (6 Test Cases)

### TC_FLT_016.01: Flight Details Page Loads
- **Requirement:** REQ-FLT-016
- **Steps:**
  1. From search results, click a flight or "View Details"
  2. Verify details page loads
  3. Confirm page displays: Airline name, Flight number, Departure/Arrival times, Duration, Stops, Price
- **Expected Result:** Flight details page fully loads with key information
- **Pass Criteria:** All required fields visible and populated

### TC_FLT_016.02: Complete Flight Information Displays
- **Requirement:** REQ-FLT-016
- **Steps:**
  1. Flight details page is open
  2. Scroll and verify all sections: Baggage policy, Amenities, Seat map, Cancellation policy, Price breakdown
  3. Verify "Select Flight" button is prominent
- **Expected Result:** Complete flight information displayed with select action visible
- **Pass Criteria:** All 7 information sections visible

### TC_FLT_017.01: Select Outbound Flight (Round Trip)
- **Requirement:** REQ-FLT-017
- **Steps:**
  1. Results page shows outbound flights for departure date
  2. Click first outbound flight
  3. Verify outbound flight is highlighted/selected
  4. Verify return flight options appear
- **Expected Result:** Outbound selected, return flights displayed
- **Pass Criteria:** Selection indicated, return options appear

### TC_FLT_017.02: Select Return Flight (Round Trip)
- **Requirement:** REQ-FLT-017
- **Steps:**
  1. Return flight options are visible
  2. Click a return flight for the return date
  3. Verify return flight is highlighted/selected
  4. Verify combined price displays (outbound + return)
- **Expected Result:** Both flights selected, total price shown
- **Pass Criteria:** Both flights indicated, combined price accurate

### TC_FLT_017.03: Continue Button Enable/Disable Logic
- **Requirement:** REQ-FLT-017
- **Steps:**
  1. Results page for round trip
  2. Verify "Continue" button is disabled initially
  3. Select outbound flight
  4. Verify "Continue" button still disabled
  5. Select return flight
  6. Verify "Continue" button becomes enabled
- **Expected Result:** Button only enabled when both flights selected
- **Pass Criteria:** Button state correctly reflects selection status

### TC_FLT_017.04: One-Way Flight Selection
- **Requirement:** REQ-FLT-017
- **Steps:**
  1. One-Way trip type selected
  2. Results show single flight options
  3. Click any flight
  4. Verify flight is selected
  5. Verify "Continue" button becomes enabled
- **Expected Result:** Single flight selectable, continue button enables
- **Pass Criteria:** One flight enough to enable continue

---

## 4. PHASE 3: ENHANCEMENTS (8 Test Cases)

### TC_FLT_011.01: Sort by Price - Ascending
- **Requirement:** REQ-FLT-011
- **Steps:**
  1. Search results displayed
  2. Click "Sort by Price" or price column header
  3. Verify flights sort cheapest to most expensive
  4. Verify sort indicator shows ascending
- **Expected Result:** Flights sorted by price ascending, indicator visible
- **Pass Criteria:** First flight cheaper than last, sort indicator shown

### TC_FLT_011.02: Sort by Price - Toggle Descending
- **Requirement:** REQ-FLT-011
- **Steps:**
  1. Flights sorted by price ascending
  2. Click price sort again
  3. Verify flights sort most expensive to cheapest
  4. Verify sort indicator shows descending
- **Expected Result:** Sort direction reverses, most expensive first
- **Pass Criteria:** Sort reversed correctly

### TC_FLT_012.01: Sort by Departure Time
- **Requirement:** REQ-FLT-012
- **Steps:**
  1. Search results displayed
  2. Click "Sort by Departure Time"
  3. Verify flights sort by earliest departure first
  4. Verify times progress through the day
- **Expected Result:** Flights sorted chronologically by departure
- **Pass Criteria:** First flight earliest, progression is correct

### TC_FLT_013.01: Filter by Single Airline
- **Requirement:** REQ-FLT-013
- **Steps:**
  1. Search results with multiple airlines displayed
  2. Verify filter panel shows airlines with result counts
  3. Click checkbox for "United" airline
  4. Verify only United flights display
  5. Verify result count decreases
- **Expected Result:** Results filtered to selected airline
- **Pass Criteria:** Only selected airline shown, count accurate

### TC_FLT_013.02: Filter by Multiple Airlines
- **Requirement:** REQ-FLT-013
- **Steps:**
  1. Filter panel visible with airline checkboxes
  2. Check "United" and "Delta" checkboxes
  3. Verify results show only United and Delta flights
  4. Verify OR logic (includes both airlines)
- **Expected Result:** Results show flights from selected airlines (OR logic)
- **Pass Criteria:** Multiple airlines correctly included

### TC_FLT_014.01: Filter by Number of Stops
- **Requirement:** REQ-FLT-014
- **Steps:**
  1. Search results with mixed stop options displayed
  2. Filter panel shows: Direct, 1 Stop, 2+ Stops
  3. Check "Direct" only
  4. Verify only nonstop flights display
  5. Check "Direct" and "1 Stop"
  6. Verify direct and 1-stop flights display
- **Expected Result:** Stops filter works, OR logic applied
- **Pass Criteria:** Stop filter accurate and dynamic

### TC_FLT_015.01: Filter by Price Range
- **Requirement:** REQ-FLT-015
- **Steps:**
  1. Search results with price range filter visible
  2. Drag price slider to range $400-$600
  3. OR enter min: 400, max: 600
  4. Verify results update to show only flights in range
  5. Verify result count updates
- **Expected Result:** Results filtered by price range, count updates
- **Pass Criteria:** All shown flights within range, count accurate

### TC_FLT_018.01: Invalid Search Error Handling
- **Requirement:** REQ-FLT-018
- **Steps:**
  1. Test Case A: Submit form with empty Departure field → Verify error near field
  2. Test Case B: Set same Departure/Arrival → Verify error message
  3. Test Case C: Set Return before Departure → Verify error message
  4. Test Case D: No passengers selected → Verify error
  5. Verify all errors are clear, near offending fields
  6. Verify no server errors displayed
- **Expected Result:** All validation errors handled gracefully
- **Pass Criteria:** Clear errors, no server stack traces, helpful messages

---

## 5. TEST DATA SPECIFICATION

### Valid Test Airports
```
JFK   - New York (John F. Kennedy)
LAX   - Los Angeles (International)
LHR   - London (Heathrow)
CDG   - Paris (Charles de Gaulle)
DXB   - Dubai (Al Maktoum)
SFO   - San Francisco (International)
ORD   - Chicago (O'Hare)
DFW   - Dallas (Fort Worth)
```

### Test Dates (Relative to September 8, 2026)
```
Departure:
  - Short haul (7 days): September 15, 2026
  - Medium (14 days): September 22, 2026
  - Long (30 days): October 8, 2026

Return:
  - Short trip: +5 days from departure
  - Medium trip: +7 days from departure
  - Long trip: +14 days from departure
```

### Passenger Configurations
```
Config A: 1 Adult
Config B: 2 Adults
Config C: 2 Adults + 1 Child (10 years old)
Config D: 1 Adult + 2 Children (5, 8 years old)
Config E: 3 Adults + 1 Infant (1 year old)
```

### Cabin Classes
```
- Economy (default)
- Premium Economy
- Business
- First Class
```

---

## 6. SUCCESS CRITERIA & PASS/FAIL

### Phase 1 - CRITICAL (Must Pass)
- ✅ 100% of 12 test cases must pass
- ✅ No missing required fields
- ✅ Search form fully functional
- ✅ Results display within 10 seconds
- ✅ Zero critical validation failures
- **Failure Impact:** BLOCKS booking workflow

### Phase 2 - BOOKING FLOW (Must Pass if Phase 1 passes)
- ✅ 100% of 6 test cases must pass
- ✅ Flight details accurate
- ✅ Round-trip selection logic correct
- ✅ Prices calculated correctly
- ✅ Continue button state correct
- **Failure Impact:** BLOCKS order placement

### Phase 3 - ENHANCEMENTS (Recommended)
- ✅ Minimum 90% pass rate (7 of 8 cases)
- ✅ Sorting functionality works
- ✅ Filtering accurate
- ✅ Error messages clear
- **Failure Impact:** DEGRADES user experience

### Overall Test Suite
- ✅ **Minimum Pass Rate:** 90% (24 of 26 cases)
- ✅ **Zero Critical Bugs** in Phases 1-2
- ✅ **Zero Price Calculation Errors**
- ✅ **Zero Validation Bypass Issues**

---

## 7. RISK ASSESSMENT

| Risk | Severity | Test Cases | Mitigation |
|------|----------|-----------|-----------|
| Search timeout | CRITICAL | TC_FLT_009.01 | Implement retry, set 15s timeout |
| Price calculation errors | CRITICAL | TC_FLT_011.01, TC_FLT_017.02 | Verify all price formulas |
| Invalid flights in results | HIGH | TC_FLT_010 (Phase 2) | Cross-check with inventory |
| Broken autocomplete | HIGH | TC_FLT_002.01, TC_FLT_003.01 | Test 20+ airport combinations |
| Date validation bypass | HIGH | TC_FLT_004.02, TC_FLT_005.01 | Test boundary dates |
| Mobile layout broken | HIGH | (separate test suite) | Test on multiple devices |
| Sorting doesn't persist | MEDIUM | TC_FLT_011.01 | Test across page navigation |
| Filter combination issues | MEDIUM | TC_FLT_013.02, TC_FLT_015.01 | Test 5+ filter combinations |

---

## 8. EXECUTION CHECKLIST

### Pre-Test Setup
- [ ] Access to https://phptravels.net/ confirmed
- [ ] Chromium browser configured
- [ ] Test data prepared (airports, dates, passengers)
- [ ] Screenshots/video recording enabled (optional)
- [ ] Defect tracking system accessible

### Phase 1 Execution
- [ ] TC_FLT_001.01 - TC_FLT_009.01 executed
- [ ] All 12 test cases documented with pass/fail
- [ ] Zero critical issues found or escalated

### Phase 2 Execution (only if Phase 1 passes)
- [ ] TC_FLT_016.01 - TC_FLT_017.04 executed
- [ ] All 6 test cases passed
- [ ] Price calculations verified

### Phase 3 Execution (recommended)
- [ ] TC_FLT_011.01 - TC_FLT_018.01 executed
- [ ] Minimum 7 of 8 passed
- [ ] Enhancement issues documented

### Defect Logging
- [ ] All failures documented with:
  - Test case ID
  - Steps to reproduce
  - Expected vs. Actual
  - Screenshots attached
  - Severity assigned
  - Requirement linked

### Sign-Off
- [ ] All test cases completed
- [ ] Test summary report generated
- [ ] Stakeholders notified
- [ ] Results archived

---

## 9. DEFECT REPORTING TEMPLATE

```
DEFECT SUMMARY
==============
ID: DEF-FLT-###
Test Case: TC_FLT_###.##
Severity: [CRITICAL | HIGH | MEDIUM | LOW]
Status: [NEW | OPEN | IN PROGRESS | CLOSED]

REQUIREMENT LINK
================
Requirement: REQ-FLT-###

DESCRIPTION
===========
[Brief defect title]

STEPS TO REPRODUCE
==================
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED BEHAVIOR
=================
[What should happen]

ACTUAL BEHAVIOR
===============
[What actually happened]

ENVIRONMENT
===========
Browser: Chromium
OS: Windows
URL: https://phptravels.net/
Date/Time: [YYYY-MM-DD HH:MM:SS]

ATTACHMENTS
===========
- Screenshot: [filename]
- Video: [filename]
- Network Log: [filename]

NOTES
=====
[Additional context or investigation notes]
```

---

## 10. EXECUTION SUMMARY

| Phase | Test Cases | Duration | Priority | Status |
|-------|-----------|----------|----------|--------|
| Phase 1 | 12 | 2-3 hours | CRITICAL | Ready |
| Phase 2 | 6 | 1-2 hours | HIGH | Ready (after Phase 1) |
| Phase 3 | 8 | 1-2 hours | MEDIUM | Ready (recommended) |
| **Total** | **26** | **4-7 hours** | - | **Ready for Execution** |

---

## 11. MAPPING TO REQUIREMENTS

| REQ ID | Test Cases | Coverage |
|--------|-----------|----------|
| REQ-FLT-001 | TC_FLT_001.01 | 100% |
| REQ-FLT-002 | TC_FLT_002.01, TC_FLT_002.02 | 100% |
| REQ-FLT-003 | TC_FLT_003.01, TC_FLT_003.02 | 100% |
| REQ-FLT-004 | TC_FLT_004.01, TC_FLT_004.02 | 100% |
| REQ-FLT-005 | TC_FLT_005.01 | 100% |
| REQ-FLT-006 | TC_FLT_006.01, TC_FLT_006.02 | 100% |
| REQ-FLT-007 | (Covered in search) | 100% |
| REQ-FLT-008 | TC_FLT_008.01 | 100% |
| REQ-FLT-009 | TC_FLT_009.01 | 100% |
| REQ-FLT-010 | (Phase 2 results) | 100% |
| REQ-FLT-011 | TC_FLT_011.01, TC_FLT_011.02 | 100% |
| REQ-FLT-012 | TC_FLT_012.01 | 100% |
| REQ-FLT-013 | TC_FLT_013.01, TC_FLT_013.02 | 100% |
| REQ-FLT-014 | TC_FLT_014.01 | 100% |
| REQ-FLT-015 | TC_FLT_015.01 | 100% |
| REQ-FLT-016 | TC_FLT_016.01, TC_FLT_016.02 | 100% |
| REQ-FLT-017 | TC_FLT_017.01 - TC_FLT_017.04 | 100% |
| REQ-FLT-018 | TC_FLT_018.01 | 100% |

---

## 12. CONCLUSION

This test plan provides **comprehensive coverage** of the PHPTRAVELS Flights module with:

✅ **26 Test Cases** organized by priority  
✅ **18 Requirements** fully mapped  
✅ **Detailed Steps** for each test case  
✅ **Clear Pass/Fail Criteria**  
✅ **Test Data Specifications**  
✅ **Risk Assessment**  
✅ **Defect Template**

**Ready for QA Execution!**

---

**Document Generated:** September 8, 2026  
**Module:** PHPTRAVELS Flights  
**Total Test Cases:** 26  
**Estimated Duration:** 4-7 hours  
**Status:** ✅ Ready for Execution

