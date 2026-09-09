# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flights.spec.ts >> TC_FLT_001.01 - Search Form Loads
- Location: tests\flights.spec.ts:39:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /flights/i }).or(getByRole('tab', { name: /flights/i })).first()
    - locator resolved to <button role="tab" type="button" @click="activeTab = 'flights'" class="py-4 px-2 md:px-3 lg:px-4 flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 border-b-2 -mb-px flex-shrink-0" :class="activeTab === 'flights'↵                        ? 'bg-primary/10 text-primary border-primary'↵                        : 'bg-transparent text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-100/50'">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p class="text-sm text-slate-700 leading-relaxed">…</p> from <div id="demoWarningModal" class="modal-overlay flex">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p class="text-sm text-slate-700 leading-relaxed">…</p> from <div id="demoWarningModal" class="modal-overlay flex">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="demoWarningModal" class="modal-overlay flex">…</div> intercepts pointer events
  10 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="text-sm text-slate-700 leading-relaxed">…</p> from <div id="demoWarningModal" class="modal-overlay flex">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="text-sm text-slate-700 leading-relaxed">…</p> from <div id="demoWarningModal" class="modal-overlay flex">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div id="demoWarningModal" class="modal-overlay flex">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div id="demoWarningModal" class="modal-overlay flex">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p class="text-sm text-slate-700 leading-relaxed">…</p> from <div id="demoWarningModal" class="modal-overlay flex">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: https://phptravels.net/
          - img "PHPTARVELS" [ref=e7]
        - navigation [ref=e8]:
          - button "Services expand_more" [ref=e10] [cursor=pointer]:
            - generic [ref=e16]: Services
            - generic [ref=e17]: expand_more
          - button "Company expand_more" [ref=e19] [cursor=pointer]:
            - generic [ref=e23]: Company
            - generic [ref=e24]: expand_more
      - generic [ref=e26]:
        - generic [ref=e28]:
          - button "USD" [ref=e29] [cursor=pointer]
          - button "English flag en" [ref=e38] [cursor=pointer]:
            - img "English flag" [ref=e39]
            - generic [ref=e40]: en
        - link "login Login" [ref=e42] [cursor=pointer]:
          - /url: https://phptravels.net/login
          - generic [ref=e43]: login
          - generic [ref=e44]: Login
        - button "person_add Signup expand_more" [ref=e46] [cursor=pointer]:
          - generic [ref=e47]: person_add
          - generic [ref=e48]: Signup
          - generic [ref=e49]: expand_more
  - generic [ref=e50]:
    - img "Hero" [ref=e53]
    - generic [ref=e54]:
      - generic [ref=e55]:
        - heading "Travel the way you love!" [level=1] [ref=e56]
        - paragraph [ref=e57]: Let's help you plan your next journey the one that will leave a lifetime of memories.
      - generic [ref=e58]:
        - tablist [ref=e59]:
          - tab "hotel Stays" [ref=e60] [cursor=pointer]:
            - generic [ref=e61]: hotel
            - generic [ref=e62]: Stays
          - tab "directions_bus bus" [ref=e63] [cursor=pointer]:
            - generic [ref=e64]: directions_bus
            - generic [ref=e65]: bus
          - tab "directions_car Cars" [ref=e66] [cursor=pointer]:
            - generic [ref=e67]: directions_car
            - generic [ref=e68]: Cars
          - tab "sim_card eSIM" [ref=e69] [cursor=pointer]:
            - generic [ref=e70]: sim_card
            - generic [ref=e71]: eSIM
          - tab "directions_boat ferries" [ref=e72] [cursor=pointer]:
            - generic [ref=e73]: directions_boat
            - generic [ref=e74]: ferries
          - tab "flight_takeoff Flights" [ref=e75] [cursor=pointer]:
            - generic [ref=e76]: flight_takeoff
            - generic [ref=e77]: Flights
          - tab "train rail" [ref=e78] [cursor=pointer]:
            - generic [ref=e79]: train
            - generic [ref=e80]: rail
          - tab "explore Tours" [ref=e81] [cursor=pointer]:
            - generic [ref=e82]: explore
            - generic [ref=e83]: Tours
          - tab "mosque Umrah" [ref=e84] [cursor=pointer]:
            - generic [ref=e85]: mosque
            - generic [ref=e86]: Umrah
          - tab "card_membership Visa" [ref=e87] [cursor=pointer]:
            - generic [ref=e88]: card_membership
            - generic [ref=e89]: Visa
          - tab "auto_awesome AI Trip Planner" [ref=e90] [cursor=pointer]:
            - generic [ref=e91]: auto_awesome
            - generic [ref=e92]: AI Trip Planner
        - generic [ref=e93]:
          - tabpanel [ref=e94]:
            - generic [ref=e99]:
              - generic [ref=e101] [cursor=pointer]:
                - generic [ref=e105]:
                  - generic [ref=e106]: Destination or Hotel Name
                  - generic [ref=e107]: Search By City
                - generic [ref=e108]: expand_more
              - generic [ref=e109]:
                - generic [ref=e111] [cursor=pointer]:
                  - generic: Check-in
                  - textbox "Check-in Date" [ref=e112]: Sep 09, 2026
                - generic [ref=e117] [cursor=pointer]:
                  - generic: Check-out
                  - textbox "Check-out Date" [ref=e118]: Sep 10, 2026
              - generic [ref=e121] [cursor=pointer]:
                - generic [ref=e124]:
                  - generic [ref=e125]: Guests & Rooms
                  - generic [ref=e126]: 2 Guests, 1 Room
                - generic [ref=e127]: expand_more
              - generic [ref=e130] [cursor=pointer]:
                - generic [ref=e131]: flag
                - generic [ref=e132]:
                  - generic [ref=e133]: Nationality
                  - generic [ref=e134]: Select Nationality
                - generic [ref=e135]: expand_more
              - button "Search Hotels" [ref=e137] [cursor=pointer]
          - text: Describe the trip you need… (e.g. Round trip Dubai to Paris in October for 2 adults, beach resort stay)
  - generic [ref=e140]:
    - generic [ref=e143]:
      - generic [ref=e144]:
        - generic [ref=e145]:
          - heading "sim_card Featured eSIMs" [level=2] [ref=e146]:
            - generic [ref=e147]: sim_card
            - text: Featured eSIMs
          - paragraph [ref=e148]: Featured countries. Open each country to view all available packages.
        - generic [ref=e149]:
          - button "Scroll featured eSIM left" [disabled]:
            - generic: chevron_left
          - button "Scroll featured eSIM right" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: chevron_right
      - generic [ref=e153]:
        - link "Country AM AM Armenia eSIM Armenia" [ref=e154] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/am/all/
          - generic [ref=e155]:
            - generic [ref=e156]: Country
            - generic [ref=e157]: AM
          - generic [ref=e158]:
            - img "AM" [ref=e160]
            - generic [ref=e161]:
              - heading "Armenia eSIM" [level=3] [ref=e162]
              - paragraph [ref=e163]: Armenia
        - link "Country AR AR Argentina eSIM Argentina" [ref=e164] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/ar/all/
          - generic [ref=e165]:
            - generic [ref=e166]: Country
            - generic [ref=e167]: AR
          - generic [ref=e168]:
            - img "AR" [ref=e170]
            - generic [ref=e171]:
              - heading "Argentina eSIM" [level=3] [ref=e172]
              - paragraph [ref=e173]: Argentina
        - link "Country AQ AQ Antarctica eSIM Antarctica" [ref=e174] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/aq/all/
          - generic [ref=e175]:
            - generic [ref=e176]: Country
            - generic [ref=e177]: AQ
          - generic [ref=e178]:
            - img "AQ" [ref=e180]
            - generic [ref=e181]:
              - heading "Antarctica eSIM" [level=3] [ref=e182]
              - paragraph [ref=e183]: Antarctica
        - link "Country AI AI Anguilla eSIM Anguilla" [ref=e184] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/ai/all/
          - generic [ref=e185]:
            - generic [ref=e186]: Country
            - generic [ref=e187]: AI
          - generic [ref=e188]:
            - img "AI" [ref=e190]
            - generic [ref=e191]:
              - heading "Anguilla eSIM" [level=3] [ref=e192]
              - paragraph [ref=e193]: Anguilla
        - link "Country AO AO Angola eSIM Angola" [ref=e194] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/ao/all/
          - generic [ref=e195]:
            - generic [ref=e196]: Country
            - generic [ref=e197]: AO
          - generic [ref=e198]:
            - img "AO" [ref=e200]
            - generic [ref=e201]:
              - heading "Angola eSIM" [level=3] [ref=e202]
              - paragraph [ref=e203]: Angola
        - link "Country AD AD Andorra eSIM Andorra" [ref=e204] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/ad/all/
          - generic [ref=e205]:
            - generic [ref=e206]: Country
            - generic [ref=e207]: AD
          - generic [ref=e208]:
            - img "AD" [ref=e210]
            - generic [ref=e211]:
              - heading "Andorra eSIM" [level=3] [ref=e212]
              - paragraph [ref=e213]: Andorra
        - link "Country AS AS American Samoa eSIM American Samoa" [ref=e214] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/as/all/
          - generic [ref=e215]:
            - generic [ref=e216]: Country
            - generic [ref=e217]: AS
          - generic [ref=e218]:
            - img "AS" [ref=e220]
            - generic [ref=e221]:
              - heading "American Samoa eSIM" [level=3] [ref=e222]
              - paragraph [ref=e223]: American Samoa
        - link "Country DZ DZ Algeria eSIM Algeria" [ref=e224] [cursor=pointer]:
          - /url: https://phptravels.net/esim/40/dz/all/
          - generic [ref=e225]:
            - generic [ref=e226]: Country
            - generic [ref=e227]: DZ
          - generic [ref=e228]:
            - img "DZ" [ref=e230]
            - generic [ref=e231]:
              - heading "Algeria eSIM" [level=3] [ref=e232]
              - paragraph [ref=e233]: Algeria
    - generic [ref=e238]:
      - generic [ref=e239]:
        - heading "hotel Featured Properties" [level=2] [ref=e240]:
          - generic [ref=e241]: hotel
          - text: Featured Properties
        - generic [ref=e242]:
          - generic [ref=e243]:
            - generic [ref=e244]: verified
            - generic [ref=e245]: We price match
          - generic [ref=e246]:
            - generic [ref=e247]: task_alt
            - generic [ref=e248]: Hotel Booking Guarantee
          - generic [ref=e249]:
            - generic [ref=e250]: workspace_premium
            - generic [ref=e251]: Hotel Stay Guarantee
        - generic [ref=e253]:
          - button "Dubai" [ref=e254] [cursor=pointer]
          - button "New York" [ref=e255] [cursor=pointer]
          - button "Barcelona" [ref=e256] [cursor=pointer]
          - button "Tokyo" [ref=e257] [cursor=pointer]
          - button "Maldives" [ref=e258] [cursor=pointer]
          - button "Gan Island" [ref=e259] [cursor=pointer]
      - generic [ref=e260]:
        - generic [ref=e261]:
          - generic [ref=e262]:
            - generic [ref=e264]:
              - generic [ref=e265]: 15% OFF
              - generic [ref=e266]:
                - generic [ref=e267]: location_on
                - generic [ref=e268]: Dubai
            - img "Burj Al Arab" [ref=e269]
          - generic [ref=e270]:
            - heading "Burj Al Arab" [level=3] [ref=e271]
            - paragraph [ref=e272]:
              - generic [ref=e273]: home
              - generic [ref=e274]: Jumeirah Beach Road
            - generic [ref=e275]:
              - generic [ref=e277]:
                - text: From
                - generic [ref=e278]: USD 1,545.00
              - generic [ref=e279]: "2.0"
          - link [ref=e284] [cursor=pointer]:
            - /url: https://phptravels.net/stay/burj-al-arab/200/hotels/_/09-09-2026/10-09-2026/NULL/1/2-0
        - generic [ref=e285]:
          - generic [ref=e286]:
            - generic [ref=e288]:
              - generic [ref=e289]: 15% OFF
              - generic [ref=e290]:
                - generic [ref=e291]: location_on
                - generic [ref=e292]: Dubai
            - img "Atlantis The Palm" [ref=e293]
          - generic [ref=e294]:
            - heading "Atlantis The Palm" [level=3] [ref=e295]
            - paragraph [ref=e296]:
              - generic [ref=e297]: home
              - generic [ref=e298]: Palm Jumeirah
            - generic [ref=e299]:
              - generic [ref=e301]:
                - text: From
                - generic [ref=e302]: USD 463.50
              - generic [ref=e303]: "5.0"
          - link [ref=e308] [cursor=pointer]:
            - /url: https://phptravels.net/stay/atlantis-the-palm/201/hotels/_/09-09-2026/10-09-2026/NULL/1/2-0
        - generic [ref=e309]:
          - generic [ref=e310]:
            - generic [ref=e312]:
              - generic [ref=e313]: 10% OFF
              - generic [ref=e314]:
                - generic [ref=e315]: location_on
                - generic [ref=e316]: Dubai
            - img "Address Downtown Dubai" [ref=e317]
          - generic [ref=e318]:
            - heading "Address Downtown Dubai" [level=3] [ref=e319]
            - paragraph [ref=e320]:
              - generic [ref=e321]: home
              - generic [ref=e322]: Sheikh Mohammed Bin Rashed Boulevard, P.O Box 111969
            - generic [ref=e323]:
              - generic [ref=e325]:
                - text: From
                - generic [ref=e326]: USD 432.60
              - generic [ref=e327]: "5.0"
          - link [ref=e332] [cursor=pointer]:
            - /url: https://phptravels.net/stay/address-downtown-dubai/202/hotels/_/09-09-2026/10-09-2026/NULL/1/2-0
        - generic [ref=e333]:
          - generic [ref=e334]:
            - generic [ref=e336]:
              - generic [ref=e337]: 10% OFF
              - generic [ref=e338]:
                - generic [ref=e339]: location_on
                - generic [ref=e340]: Dubai
            - img "JW Marriott Marquis Dubai" [ref=e341]
          - generic [ref=e342]:
            - heading "JW Marriott Marquis Dubai" [level=3] [ref=e343]
            - paragraph [ref=e344]:
              - generic [ref=e345]: home
              - generic [ref=e346]: Sheikh Zayed Road, Business Bay
            - generic [ref=e347]:
              - generic [ref=e349]:
                - text: From
                - generic [ref=e350]: USD 360.50
              - generic [ref=e351]: "5.0"
          - link [ref=e356] [cursor=pointer]:
            - /url: https://phptravels.net/stay/jw-marriott-marquis-dubai/203/hotels/_/09-09-2026/10-09-2026/NULL/1/2-0
    - generic [ref=e413]:
      - img "Mobile Apps" [ref=e415]
      - generic [ref=e417]:
        - heading "Travel on the go with our app" [level=1] [ref=e418]
        - paragraph [ref=e419]: Book from your phone anytime, anywhere.
        - generic [ref=e420]:
          - link "Download on the App Store" [ref=e421] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.phptravels.android
            - generic [ref=e424]:
              - generic [ref=e425]: Download on the
              - generic [ref=e426]: App Store
          - link "Get it on Google Play" [ref=e427] [cursor=pointer]:
            - /url: https://apps.apple.com/us/app/phptravels/id6776969102
            - generic [ref=e430]:
              - generic [ref=e431]: Get it on
              - generic [ref=e432]: Google Play
  - contentinfo [ref=e433]:
    - generic [ref=e435]:
      - generic [ref=e436]:
        - generic [ref=e437]:
          - link [ref=e439] [cursor=pointer]:
            - /url: https://phptravels.net/
            - img "PHPTARVELS" [ref=e440]
          - paragraph [ref=e441]: Your trusted travel partner for unforgettable journeys. Discover the world with our comprehensive booking services.
        - generic [ref=e442]:
          - generic [ref=e443]:
            - generic [ref=e444]: headset_mic
            - generic [ref=e446]:
              - paragraph [ref=e447]: 24/7 Support
              - paragraph [ref=e448]: Always here to help
          - generic [ref=e449]:
            - link "Email Support" [ref=e450] [cursor=pointer]:
              - /url: mailto:email@agency.com
              - generic [ref=e451]: mail
            - link "WhatsApp Support" [ref=e452] [cursor=pointer]:
              - /url: https://wa.me/123456789
      - generic [ref=e456]:
        - generic [ref=e457]:
          - heading "Company" [level=4] [ref=e458]
          - list [ref=e459]:
            - listitem [ref=e460]:
              - link "Contact us" [ref=e461] [cursor=pointer]:
                - /url: https://phptravels.net/page/contact-us
            - listitem [ref=e462]:
              - link "About us" [ref=e463] [cursor=pointer]:
                - /url: https://phptravels.net/page/about-us
            - listitem [ref=e464]:
              - link "Cookies Policy" [ref=e465] [cursor=pointer]:
                - /url: https://phptravels.net/page/cookies-policy
            - listitem [ref=e466]:
              - link "Privacy Policy" [ref=e467] [cursor=pointer]:
                - /url: https://phptravels.net/page/privacy-policy
            - listitem [ref=e468]:
              - link "Become a Supplier" [ref=e469] [cursor=pointer]:
                - /url: https://phptravels.net/page/become-a-supplier
            - listitem [ref=e470]:
              - link "Terms of Use" [ref=e471] [cursor=pointer]:
                - /url: https://phptravels.net/page/terms-of-use
        - generic [ref=e472]:
          - heading "Support" [level=4] [ref=e473]
          - list [ref=e474]:
            - listitem [ref=e475]:
              - link "Affiliate Program" [ref=e476] [cursor=pointer]:
                - /url: https://phptravels.net/page/affiliate-program
            - listitem [ref=e477]:
              - link "Investors" [ref=e478] [cursor=pointer]:
                - /url: https://phptravels.net/page/investors
            - listitem [ref=e479]:
              - link "Careers and Jobs" [ref=e480] [cursor=pointer]:
                - /url: https://phptravels.net/page/careers-and-jobs
            - listitem [ref=e481]:
              - link "How to Book" [ref=e482] [cursor=pointer]:
                - /url: https://phptravels.net/page/how-to-book
            - listitem [ref=e483]:
              - link "File a Claim" [ref=e484] [cursor=pointer]:
                - /url: https://phptravels.net/page/file-a-claim
            - listitem [ref=e485]:
              - link "Refund Policy" [ref=e486] [cursor=pointer]:
                - /url: https://phptravels.net/page/refund-policy
        - generic [ref=e487]:
          - heading "Explore" [level=4] [ref=e488]
          - list [ref=e489]:
            - listitem [ref=e490]:
              - link "Best Travel Deals" [ref=e491] [cursor=pointer]:
                - /url: https://phptravels.net/page/best-travel-deals
            - listitem [ref=e492]:
              - link "Travel Documents" [ref=e493] [cursor=pointer]:
                - /url: https://phptravels.net/page/travel-documents
            - listitem [ref=e494]:
              - link "Travel Insurance" [ref=e495] [cursor=pointer]:
                - /url: https://phptravels.net/page/travel-insurance
      - generic [ref=e496]:
        - heading "Get In Touch" [level=4] [ref=e497]
        - generic [ref=e498]:
          - generic [ref=e499]:
            - generic [ref=e500]: location_on
            - paragraph [ref=e501]: 71 St, Suite 900 San Francisco, United States
          - generic [ref=e502]:
            - generic [ref=e503]: call
            - link "+123456789" [ref=e504] [cursor=pointer]:
              - /url: tel:+123456789
          - generic [ref=e505]:
            - generic [ref=e506]: mail
            - link "email@agency.com" [ref=e507] [cursor=pointer]:
              - /url: mailto:email@agency.com
          - generic [ref=e509]:
            - link "Facebook" [ref=e510] [cursor=pointer]:
              - /url: https://facebook.com/phptravels
            - link "Twitter" [ref=e513] [cursor=pointer]:
              - /url: https://twitter.com/phptravels
            - link "Instagram" [ref=e516] [cursor=pointer]:
              - /url: https://instagram.com/phptravels
            - link "YouTube" [ref=e519] [cursor=pointer]:
              - /url: https://youtube.com/@phptravels
            - link "LinkedIn" [ref=e522] [cursor=pointer]:
              - /url: https://linkedin.com/company/phptravels
    - generic [ref=e527]:
      - generic [ref=e528]:
        - paragraph [ref=e529]: © 2026 PHPTARVELS. All rights reserved.
        - paragraph [ref=e530]:
          - text: Powered by
          - link "PHPTRAVELS" [ref=e531] [cursor=pointer]:
            - /url: https://phptravels.com
      - generic [ref=e532]:
        - link "Privacy Policy" [ref=e533] [cursor=pointer]:
          - /url: https://phptravels.net/page/privacy-policy
        - generic [ref=e534]:
          - generic [ref=e535]: •
          - link "Terms of Use" [ref=e536] [cursor=pointer]:
            - /url: https://phptravels.net/page/terms-of-use
        - generic [ref=e537]:
          - generic [ref=e538]: •
          - link "Cookies Policy" [ref=e539] [cursor=pointer]:
            - /url: https://phptravels.net/page/cookies-policy
        - generic [ref=e540]:
          - generic [ref=e541]: •
          - link "Refund Policy" [ref=e542] [cursor=pointer]:
            - /url: https://phptravels.net/page/refund-policy
      - generic [ref=e543]:
        - generic [ref=e544]:
          - generic [ref=e545]: verified_user
          - generic [ref=e546]: SSL Secure
        - link "verified IATA" [ref=e547] [cursor=pointer]:
          - /url: https://iata.co
          - generic [ref=e548]: verified
          - generic [ref=e549]: IATA
        - generic [ref=e550]:
          - generic [ref=e551]: credit_card
          - generic [ref=e552]: PCI DSS
  - generic [ref=e554]:
    - generic [ref=e556]:
      - generic [ref=e557]: ⚠️
      - generic [ref=e558]:
        - 'heading "Important Notice: Demo Environment" [level=2] [ref=e559]'
        - paragraph [ref=e560]: Please read this information carefully before using the system
    - generic [ref=e561]:
      - generic [ref=e562]:
        - generic [ref=e563]: currency_exchange
        - generic [ref=e564]:
          - heading "Pricing May Not Reflect Real Rates" [level=3] [ref=e565]
          - paragraph [ref=e566]: Prices displayed in this demo environment are simulated and may differ significantly from real-world rates. Live rates require valid supplier API credentials to be configured in your account settings.
      - generic [ref=e567]:
        - generic [ref=e568]: vpn_key
        - generic [ref=e569]:
          - heading "Configure Your Own API Credentials" [level=3] [ref=e570]
          - paragraph [ref=e571]:
            - text: To access real supplier data and accurate pricing, you must add your own API keys through
            - strong [ref=e572]: Admin Settings → Modules
            - text: . This will enable live data integration and replace all demo content with real-time information.
      - generic [ref=e573]:
        - generic [ref=e574]: credit_card
        - generic [ref=e575]:
          - heading "Testing Environment Only - NO Real Payments" [level=3] [ref=e576]
          - paragraph [ref=e577]: This is a testing platform for development purposes. Do not use real payment methods or credit card information. All payment gateway integrations are configured in sandbox/testing mode exclusively.
      - generic [ref=e578]:
        - generic [ref=e579]: storage
        - generic [ref=e580]:
          - heading "Demo Data May Be Reset Periodically" [level=3] [ref=e581]
          - paragraph [ref=e582]: Demo environment data, including bookings, reservations, and settings, may be reset periodically for maintenance. Do not rely on this system for storing critical business information or live customer data.
      - generic [ref=e583]:
        - generic [ref=e584]: help
        - generic [ref=e585]:
          - heading "Need Help or Ready for Production?" [level=3] [ref=e586]
          - paragraph [ref=e587]:
            - text: For comprehensive documentation, technical support, API integration guides, and assistance with moving to production, visit
            - link "phptravels.com" [ref=e588] [cursor=pointer]:
              - /url: https://phptravels.com
    - generic [ref=e589]:
      - link "Learn More" [ref=e590] [cursor=pointer]:
        - /url: https://phptravels.com/pricing
      - button "I Understand & Continue" [ref=e591] [cursor=pointer]
```

# Test source

```ts
  1   | import { expect, Locator, Page } from '@playwright/test';
  2   | 
  3   | type PassengerData = { adults?: number; children?: number; infants?: number };
  4   | type SearchData = {
  5   |   tripType?: 'one-way' | 'round-trip';
  6   |   departure?: string;
  7   |   arrival?: string;
  8   |   departureDate?: string;
  9   |   returnDate?: string;
  10  |   passengers?: PassengerData;
  11  |   cabin?: string;
  12  | };
  13  | 
  14  | export class FlightsPage {
  15  |   readonly page: Page;
  16  |   readonly flightsTab: Locator;
  17  |   readonly departureInput: Locator;
  18  |   readonly arrivalInput: Locator;
  19  |   readonly departureDateInput: Locator;
  20  |   readonly returnDateInput: Locator;
  21  |   readonly passengersControl: Locator;
  22  |   readonly cabinControl: Locator;
  23  |   readonly searchButton: Locator;
  24  |   readonly oneWayOption: Locator;
  25  |   readonly roundTripOption: Locator;
  26  | 
  27  |   constructor(page: Page) {
  28  |     this.page = page;
  29  |     this.flightsTab = page.getByRole('link', { name: /flights/i }).or(page.getByRole('tab', { name: /flights/i })).first();
  30  |     this.departureInput = page.getByLabel(/departure|flying from|from/i).or(page.locator('input[name*="from" i]')).first();
  31  |     this.arrivalInput = page.getByLabel(/arrival|flying to|to/i).or(page.locator('input[name*="to" i]')).first();
  32  |     this.departureDateInput = page.getByLabel(/departure date|depart date/i).or(page.locator('input[name*="depart" i]')).first();
  33  |     this.returnDateInput = page.getByLabel(/return date/i).or(page.locator('input[name*="return" i]')).first();
  34  |     this.passengersControl = page.getByLabel(/passengers|travellers?|travelers?/i).or(page.getByText(/travellers?|travelers?/i)).first();
  35  |     this.cabinControl = page.getByLabel(/cabin|class/i).or(page.locator('select[name*="class" i]')).first();
  36  |     this.searchButton = page.getByRole('button', { name: /search|find flights/i }).first();
  37  |     this.oneWayOption = page.getByRole('radio', { name: /one[ -]?way/i }).or(page.getByText(/^one[ -]?way$/i)).first();
  38  |     this.roundTripOption = page.getByRole('radio', { name: /round[ -]?trip|return/i }).or(page.getByText(/^round[ -]?trip$/i)).first();
  39  |   }
  40  | 
  41  |   async goto(): Promise<void> {
  42  |     await this.page.goto('https://phptravels.net/', { waitUntil: 'domcontentloaded' });
  43  |   }
  44  | 
  45  |   async openFlightsTab(): Promise<void> {
> 46  |     if (await this.flightsTab.isVisible().catch(() => false)) await this.flightsTab.click();
      |                                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  47  |     await expect(this.searchButton).toBeVisible();
  48  |   }
  49  | 
  50  |   async verifySearchForm(): Promise<void> {
  51  |     for (const field of [this.departureInput, this.arrivalInput, this.departureDateInput, this.returnDateInput, this.passengersControl, this.cabinControl]) {
  52  |       await expect(field).toBeVisible();
  53  |       await expect(field).toBeEnabled();
  54  |     }
  55  |     await expect(this.oneWayOption).toBeVisible();
  56  |     await expect(this.roundTripOption).toBeVisible();
  57  |     await expect(this.searchButton).toBeEnabled();
  58  |   }
  59  | 
  60  |   private suggestions(): Locator {
  61  |     return this.page.locator('[role="listbox"] [role="option"], .autocomplete-results li, .select2-results__option:visible');
  62  |   }
  63  | 
  64  |   async verifyDepartureAutocomplete(query: string): Promise<void> {
  65  |     await this.departureInput.fill(query);
  66  |     await expect(this.suggestions().first()).toBeVisible({ timeout: 5_000 });
  67  |     expect(await this.suggestions().count()).toBeGreaterThanOrEqual(2);
  68  |   }
  69  | 
  70  |   async verifyArrivalAutocomplete(query: string): Promise<void> {
  71  |     await this.arrivalInput.fill(query);
  72  |     const options = this.suggestions();
  73  |     await expect(options.first()).toBeVisible({ timeout: 5_000 });
  74  |     await expect(options.filter({ hasText: /Los Angeles|LAX/i }).first()).toBeVisible();
  75  |   }
  76  | 
  77  |   async selectAirport(input: Locator, query: string, airport: string): Promise<void> {
  78  |     await input.fill(query);
  79  |     const option = this.suggestions().filter({ hasText: new RegExp(airport, 'i') }).first();
  80  |     await expect(option).toBeVisible({ timeout: 5_000 });
  81  |     await option.click();
  82  |   }
  83  | 
  84  |   async selectDeparture(query: string, airport: string): Promise<void> {
  85  |     await this.selectAirport(this.departureInput, query, airport);
  86  |   }
  87  | 
  88  |   async expectDepartureSelected(value: string): Promise<void> {
  89  |     await expect(this.departureInput).toHaveValue(new RegExp(value, 'i'));
  90  |   }
  91  | 
  92  |   async setTripType(type: 'one-way' | 'round-trip'): Promise<void> {
  93  |     const option = type === 'one-way' ? this.oneWayOption : this.roundTripOption;
  94  |     await option.click();
  95  |   }
  96  | 
  97  |   async openDepartureCalendar(): Promise<void> {
  98  |     await this.departureDateInput.click();
  99  |   }
  100 | 
  101 |   private calendar(): Locator {
  102 |     return this.page.locator('.datepicker:visible, .flatpickr-calendar:visible, [role="dialog"]:visible').first();
  103 |   }
  104 | 
  105 |   async verifyDepartureCalendarRules(): Promise<void> {
  106 |     await expect(this.calendar()).toBeVisible();
  107 |     const disabledPastDates = this.calendar().locator('.disabled, [aria-disabled="true"]');
  108 |     expect(await disabledPastDates.count()).toBeGreaterThan(0);
  109 |     await expect(this.calendar().locator('button:not([disabled]), td:not(.disabled)').first()).toBeEnabled();
  110 |   }
  111 | 
  112 |   private async setDate(input: Locator, date: string): Promise<void> {
  113 |     await input.click();
  114 |     if (await input.isEditable().catch(() => false)) {
  115 |       await input.fill(date);
  116 |       await input.press('Tab');
  117 |       return;
  118 |     }
  119 |     const parsed = new Date(`${date}T00:00:00`);
  120 |     const day = String(parsed.getDate());
  121 |     const dayButton = this.calendar().getByRole('button', { name: new RegExp(`^${day}$`) }).first();
  122 |     await expect(dayButton).toBeVisible();
  123 |     await dayButton.click();
  124 |   }
  125 | 
  126 |   async setDepartureDate(date: string): Promise<void> { await this.setDate(this.departureDateInput, date); }
  127 |   async setReturnDate(date: string): Promise<void> { await this.setDate(this.returnDateInput, date); }
  128 |   async expectDepartureDate(date: string): Promise<void> { await expect(this.departureDateInput).toHaveValue(date); }
  129 |   async expectReturnDate(date: string): Promise<void> { await expect(this.returnDateInput).toHaveValue(date); }
  130 | 
  131 |   async verifyReturnDateBeforeDepartureDisabled(date: string): Promise<void> {
  132 |     await this.returnDateInput.click();
  133 |     const day = String(new Date(`${date}T00:00:00`).getDate());
  134 |     const dateCell = this.calendar().getByText(new RegExp(`^${day}$`)).first();
  135 |     await expect(dateCell).toHaveAttribute('class', /disabled|unavailable|past/);
  136 |   }
  137 | 
  138 |   async setPassengers(passengers: PassengerData): Promise<void> {
  139 |     await this.passengersControl.click();
  140 |     await this.setPassengerCategory(/adult/i, passengers.adults ?? 1, 1);
  141 |     await this.setPassengerCategory(/child/i, passengers.children ?? 0, 0);
  142 |     await this.setPassengerCategory(/infant/i, passengers.infants ?? 0, 0);
  143 |     await this.page.keyboard.press('Escape');
  144 |   }
  145 | 
  146 |   private async setPassengerCategory(category: RegExp, target: number, initial: number): Promise<void> {
```