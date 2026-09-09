# PHPTRAVELS Flights Module - Test Cases

**Generated:** September 8, 2026
**Base URL:** https://phptravels.net/

Notes: Priority mapping — CRITICAL → P0, HIGH → P1, MEDIUM → P2. Automation recommended: P0/P1 = Yes; P2 = No.

---

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---------|----------|---------------|-------|-----------------|----------|------------|
| TC_FLT_001.01 | Search Form Loads | Browser open; navigate to home page | 1) Go to https://phptravels.net/ 2) Observe flights search form 3) Verify presence of 7 fields (Departure, Arrival, Dep Date, Return Date, Passengers, Trip Type, Cabin Class) 4) Interact with each field | Search form visible; all 7 fields present and interactive | P0 | Yes |

| TC_FLT_002.01 | Departure Autocomplete Works | Search form loaded | 1) Click Departure field 2) Type "New" 3) Wait ~500ms for suggestions 4) Inspect dropdown | Autocomplete dropdown appears with 2+ suggestions containing "New" | P0 | Yes |

| TC_FLT_002.02 | Select Departure Airport | Autocomplete dropdown visible | 1) Click suggestion "New York (JFK)" 2) Verify field value shows "JFK" or "New York" 3) Blur field | Selected airport persisted in field; dropdown closed | P0 | Yes |

| TC_FLT_003.01 | Arrival Autocomplete Works | Search form loaded | 1) Click Arrival field 2) Type "Los" 3) Wait for suggestions 4) Verify LAX present | Dropdown displays Los Angeles suggestions; LAX visible | P0 | Yes |

| TC_FLT_003.02 | Same Airport Validation | Search form loaded | 1) Set Departure = JFK 2) Set Arrival = JFK 3) Click Search | Error shown near arrival: "Departure and arrival airports must be different"; form not submitted | P0 | Yes |

| TC_FLT_004.01 | Departure Date Picker Opens | Search form loaded | 1) Click Departure Date 2) Verify calendar opens 3) Check past dates disabled 4) Verify future dates selectable | Calendar appears; past dates greyed/disabled; future dates selectable | P0 | Yes |

| TC_FLT_004.02 | Select Future Departure Date | Date picker open | 1) Select date 7 days from today (09/15/2026) 2) Verify field shows date in MM/DD/YYYY 3) Verify calendar closes | Field displays 09/15/2026; calendar closes; value persists | P0 | Yes |

| TC_FLT_005.01 | Return Date After Departure | Departure date set to 09/15/2026 | 1) Open Return Date 2) Attempt to pick 09/14/2026 (should be disabled) 3) Pick 09/16/2026 | Dates before departure disabled; later date selectable; validation enforced | P0 | Yes |

| TC_FLT_006.01 | Passenger Counter Interface | Search form loaded | 1) Open Passengers selector 2) Increment Adults → 2 3) Increment Children → 1 4) Verify display text and total | Display shows "2 Adults, 1 Child" and total = 3 | P0 | Yes |

| TC_FLT_006.02 | Minimum Adult Validation | Passengers selector accessible | 1) Attempt to reduce Adults to 0 2) Try to submit search | System prevents Adults=0; shows error or blocks submission | P0 | Yes |

| TC_FLT_008.01 | Trip Type Options Display | Search form loaded | 1) Verify radio buttons: One-Way and Round Trip 2) Check Round Trip default 3) Verify Return Date visible 4) Select One-Way and verify Return Date hides | Both options present; Round Trip default; Return Date toggles based on selection | P0 | Yes |

| TC_FLT_009.01 | Valid Search Executes Successfully | Search form populated with valid inputs | 1) Fill: JFK→LAX, 09/15/2026–09/22/2026, 2 Adults, Economy 2) Click Search 3) Wait up to 10s for results | Results page loads within 10s; flight options shown; no errors | P0 | Yes |

| TC_FLT_016.01 | Flight Details Page Loads | Search executed; results shown | 1) Click a flight or "View Details" 2) Wait for details page | Details page shows airline, flight number, times, duration, stops, price | P1 | Yes |

| TC_FLT_016.02 | Complete Flight Information Displays | Flight details page open | 1) Scroll page 2) Verify baggage policy, amenities, seat map, cancellation policy, price breakdown, CTA | All sections visible and populated; Select/Book button present | P1 | Yes |

| TC_FLT_017.01 | Select Outbound Flight (Round Trip) | Round trip results displayed | 1) Click first outbound flight 2) Verify selection highlight 3) Verify return options appear | Outbound highlighted; return flight options displayed for return date | P1 | Yes |

| TC_FLT_017.02 | Select Return Flight (Round Trip) | Outbound selected; return options visible | 1) Click return flight 2) Verify both selected 3) Verify combined price displayed and accurate | Both flights selected; combined price = outbound + return; Continue enabled | P1 | Yes |

| TC_FLT_017.03 | Continue Button Enable/Disable Logic | Round trip results displayed | 1) Observe Continue disabled 2) Select outbound (still disabled) 3) Select return (becomes enabled) 4) Deselect to verify toggle behavior | Continue enabled only when both flights selected; toggles reflect selection | P1 | Yes |

| TC_FLT_017.04 | One-Way Flight Selection | One-way results displayed | 1) Observe Continue disabled 2) Select a flight 3) Verify Continue enables and proceeds | Single selection enables Continue; proceeding works | P1 | Yes |

| TC_FLT_011.01 | Sort by Price - Ascending | Results displayed with multiple prices | 1) Click "Sort by Price" 2) Verify ascending order and indicator | Flights sorted cheapest → expensive; indicator shows ascending | P2 | No |

| TC_FLT_011.02 | Sort by Price - Toggle Descending | Sorted ascending state | 1) Click price sort again 2) Verify descending order and indicator | Flights sorted expensive → cheapest; indicator shows descending | P2 | No |

| TC_FLT_012.01 | Sort by Departure Time | Results displayed | 1) Click "Sort by Departure Time" 2) Verify chronological ordering | Flights sorted earliest → latest departure time | P2 | No |

| TC_FLT_013.01 | Filter by Single Airline | Results include multiple airlines | 1) Open filter panel 2) Check "United" 3) Verify only United flights shown | Only flights from United displayed; result count updated | P2 | No |

| TC_FLT_013.02 | Filter by Multiple Airlines | Results include multiple airlines | 1) Check "United" and "Delta" 2) Verify results show flights from either airline (OR) | Results include United OR Delta flights; others hidden; count updated | P2 | No |

| TC_FLT_014.01 | Filter by Number of Stops | Results with different stop counts | 1) Check "Direct" 2) Verify nonstop only 3) Check "Direct" + "1 Stop" 4) Verify both types | Stop filters work; OR logic applied; counts update | P2 | No |

| TC_FLT_015.01 | Filter by Price Range | Results displayed; price filter present | 1) Set price slider or min/max to $400–$600 2) Verify results filtered accordingly | Only flights priced $400–$600 shown; counts accurate | P2 | No |

| TC_FLT_018.01 | Invalid Search Error Handling | Search form accessible | 1) A: Submit empty Departure → expect error near field 2) B: Set Departure=Arrival (JFK→JFK) → expect specific error 3) C: Return before Departure → expect validation error 4) D: No passengers → expect error | All validation errors shown near offending fields; no server errors; messages helpful | P2 | No |

---

End of test-case catalog.


