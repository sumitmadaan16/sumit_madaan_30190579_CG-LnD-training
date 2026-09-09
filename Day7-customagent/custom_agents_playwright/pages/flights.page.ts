import { expect, Locator, Page } from '@playwright/test';

type PassengerData = { adults?: number; children?: number; infants?: number };
type SearchData = {
  tripType?: 'one-way' | 'round-trip';
  departure?: string;
  arrival?: string;
  departureDate?: string;
  returnDate?: string;
  passengers?: PassengerData;
  cabin?: string;
};

export class FlightsPage {
  readonly page: Page;
  readonly flightsTab: Locator;
  readonly departureInput: Locator;
  readonly arrivalInput: Locator;
  readonly departureDateInput: Locator;
  readonly returnDateInput: Locator;
  readonly passengersControl: Locator;
  readonly cabinControl: Locator;
  readonly searchButton: Locator;
  readonly oneWayOption: Locator;
  readonly roundTripOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightsTab = page.getByRole('link', { name: /flights/i }).or(page.getByRole('tab', { name: /flights/i })).first();
    this.departureInput = page.getByLabel(/departure|flying from|from/i).or(page.locator('input[name*="from" i]')).first();
    this.arrivalInput = page.getByLabel(/arrival|flying to|to/i).or(page.locator('input[name*="to" i]')).first();
    this.departureDateInput = page.getByLabel(/departure date|depart date/i).or(page.locator('input[name*="depart" i]')).first();
    this.returnDateInput = page.getByLabel(/return date/i).or(page.locator('input[name*="return" i]')).first();
    this.passengersControl = page.getByLabel(/passengers|travellers?|travelers?/i).or(page.getByText(/travellers?|travelers?/i)).first();
    this.cabinControl = page.getByLabel(/cabin|class/i).or(page.locator('select[name*="class" i]')).first();
    this.searchButton = page.getByRole('button', { name: /search|find flights/i }).first();
    this.oneWayOption = page.getByRole('radio', { name: /one[ -]?way/i }).or(page.getByText(/^one[ -]?way$/i)).first();
    this.roundTripOption = page.getByRole('radio', { name: /round[ -]?trip|return/i }).or(page.getByText(/^round[ -]?trip$/i)).first();
  }

  async goto(): Promise<void> {
    await this.page.goto('https://phptravels.net/', { waitUntil: 'domcontentloaded' });
  }

  async openFlightsTab(): Promise<void> {
    if (await this.flightsTab.isVisible().catch(() => false)) await this.flightsTab.click();
    await expect(this.searchButton).toBeVisible();
  }

  async verifySearchForm(): Promise<void> {
    for (const field of [this.departureInput, this.arrivalInput, this.departureDateInput, this.returnDateInput, this.passengersControl, this.cabinControl]) {
      await expect(field).toBeVisible();
      await expect(field).toBeEnabled();
    }
    await expect(this.oneWayOption).toBeVisible();
    await expect(this.roundTripOption).toBeVisible();
    await expect(this.searchButton).toBeEnabled();
  }

  private suggestions(): Locator {
    return this.page.locator('[role="listbox"] [role="option"], .autocomplete-results li, .select2-results__option:visible');
  }

  async verifyDepartureAutocomplete(query: string): Promise<void> {
    await this.departureInput.fill(query);
    await expect(this.suggestions().first()).toBeVisible({ timeout: 5_000 });
    expect(await this.suggestions().count()).toBeGreaterThanOrEqual(2);
  }

  async verifyArrivalAutocomplete(query: string): Promise<void> {
    await this.arrivalInput.fill(query);
    const options = this.suggestions();
    await expect(options.first()).toBeVisible({ timeout: 5_000 });
    await expect(options.filter({ hasText: /Los Angeles|LAX/i }).first()).toBeVisible();
  }

  async selectAirport(input: Locator, query: string, airport: string): Promise<void> {
    await input.fill(query);
    const option = this.suggestions().filter({ hasText: new RegExp(airport, 'i') }).first();
    await expect(option).toBeVisible({ timeout: 5_000 });
    await option.click();
  }

  async selectDeparture(query: string, airport: string): Promise<void> {
    await this.selectAirport(this.departureInput, query, airport);
  }

  async expectDepartureSelected(value: string): Promise<void> {
    await expect(this.departureInput).toHaveValue(new RegExp(value, 'i'));
  }

  async setTripType(type: 'one-way' | 'round-trip'): Promise<void> {
    const option = type === 'one-way' ? this.oneWayOption : this.roundTripOption;
    await option.click();
  }

  async openDepartureCalendar(): Promise<void> {
    await this.departureDateInput.click();
  }

  private calendar(): Locator {
    return this.page.locator('.datepicker:visible, .flatpickr-calendar:visible, [role="dialog"]:visible').first();
  }

  async verifyDepartureCalendarRules(): Promise<void> {
    await expect(this.calendar()).toBeVisible();
    const disabledPastDates = this.calendar().locator('.disabled, [aria-disabled="true"]');
    expect(await disabledPastDates.count()).toBeGreaterThan(0);
    await expect(this.calendar().locator('button:not([disabled]), td:not(.disabled)').first()).toBeEnabled();
  }

  private async setDate(input: Locator, date: string): Promise<void> {
    await input.click();
    if (await input.isEditable().catch(() => false)) {
      await input.fill(date);
      await input.press('Tab');
      return;
    }
    const parsed = new Date(`${date}T00:00:00`);
    const day = String(parsed.getDate());
    const dayButton = this.calendar().getByRole('button', { name: new RegExp(`^${day}$`) }).first();
    await expect(dayButton).toBeVisible();
    await dayButton.click();
  }

  async setDepartureDate(date: string): Promise<void> { await this.setDate(this.departureDateInput, date); }
  async setReturnDate(date: string): Promise<void> { await this.setDate(this.returnDateInput, date); }
  async expectDepartureDate(date: string): Promise<void> { await expect(this.departureDateInput).toHaveValue(date); }
  async expectReturnDate(date: string): Promise<void> { await expect(this.returnDateInput).toHaveValue(date); }

  async verifyReturnDateBeforeDepartureDisabled(date: string): Promise<void> {
    await this.returnDateInput.click();
    const day = String(new Date(`${date}T00:00:00`).getDate());
    const dateCell = this.calendar().getByText(new RegExp(`^${day}$`)).first();
    await expect(dateCell).toHaveAttribute('class', /disabled|unavailable|past/);
  }

  async setPassengers(passengers: PassengerData): Promise<void> {
    await this.passengersControl.click();
    await this.setPassengerCategory(/adult/i, passengers.adults ?? 1, 1);
    await this.setPassengerCategory(/child/i, passengers.children ?? 0, 0);
    await this.setPassengerCategory(/infant/i, passengers.infants ?? 0, 0);
    await this.page.keyboard.press('Escape');
  }

  private async setPassengerCategory(category: RegExp, target: number, initial: number): Promise<void> {
    const row = this.page.locator('[data-testid*="passenger"], .passenger, .dropdown-menu').filter({ hasText: category }).first();
    if (!(await row.count())) return;
    const plus = row.getByRole('button', { name: /increase|add|plus|\+/i }).last();
    const minus = row.getByRole('button', { name: /decrease|remove|minus|-/i }).first();
    for (let count = initial; count < target; count++) await plus.click();
    for (let count = initial; count > target; count--) await minus.click();
  }

  async expectPassengerSummary(p: PassengerData): Promise<void> {
    const summary = `${p.adults ?? 1}`;
    await expect(this.passengersControl).toContainText(summary);
    if (p.children) await expect(this.passengersControl).toContainText(String(p.children));
  }

  async selectCabin(cabin: string): Promise<void> {
    if (await this.cabinControl.evaluate(el => el.tagName === 'SELECT').catch(() => false)) {
      await this.cabinControl.selectOption({ label: cabin });
    } else {
      await this.cabinControl.click();
      await this.page.getByRole('option', { name: new RegExp(cabin, 'i') }).click();
    }
  }

  async fillSearchForm(data: SearchData): Promise<void> {
    if (data.tripType) await this.setTripType(data.tripType);
    if (data.departure) await this.selectAirport(this.departureInput, data.departure, data.departure);
    if (data.arrival) await this.selectAirport(this.arrivalInput, data.arrival, data.arrival);
    if (data.departureDate) await this.setDepartureDate(data.departureDate);
    if (data.returnDate && data.tripType !== 'one-way') await this.setReturnDate(data.returnDate);
    if (data.passengers) await this.setPassengers(data.passengers);
    if (data.cabin) await this.selectCabin(data.cabin);
  }

  async submitSearch(): Promise<void> { await this.searchButton.click(); }
  async search(data: SearchData): Promise<void> { await this.fillSearchForm(data); await this.submitSearch(); }

  async expectValidationError(message: string): Promise<void> {
    await expect(this.page.getByText(new RegExp(message, 'i')).first()).toBeVisible({ timeout: 5_000 });
  }

  async expectResultsWithin(timeout = 10_000): Promise<void> {
    const results = this.page.locator('[data-testid*="flight"], .flight-list, .flight-item, .search-results').first();
    await expect(results).toBeVisible({ timeout });
    await expect(this.page.getByText(/server error|stack trace|exception/i)).toHaveCount(0);
  }

  async verifyTripTypeOptions(): Promise<void> {
    await expect(this.oneWayOption).toBeVisible();
    await expect(this.roundTripOption).toBeVisible();
    await expect(this.returnDateInput).toBeVisible();
    await this.oneWayOption.click();
    await expect(this.returnDateInput).toBeHidden();
  }

  private flightCards(): Locator { return this.page.locator('[data-testid*="flight-card"], .flight-item, .flight-list > *'); }
  private continueButton(): Locator { return this.page.getByRole('button', { name: /continue/i }).first(); }

  async openFirstFlightDetails(): Promise<void> {
    const first = this.flightCards().first();
    const details = first.getByRole('button', { name: /view details|details/i }).or(first.getByRole('link', { name: /view details|details/i })).first();
    await details.click();
  }

  async verifyFlightDetailsSummary(): Promise<void> {
    for (const label of [/airline/i, /flight number/i, /departure/i, /arrival/i, /duration/i, /stops?/i, /price/i]) {
      await expect(this.page.getByText(label).first()).toBeVisible();
    }
  }

  async verifyCompleteFlightInformation(): Promise<void> {
    for (const label of [/baggage/i, /amenities/i, /seat/i, /cancellation/i, /price breakdown/i]) {
      await expect(this.page.getByText(label).first()).toBeVisible();
    }
    await expect(this.page.getByRole('button', { name: /select flight/i })).toBeVisible();
  }

  async selectFirstOutboundFlight(): Promise<void> {
    await this.flightCards().first().getByRole('button', { name: /select|choose/i }).click();
  }

  async selectFirstReturnFlight(): Promise<void> {
    const returns = this.page.locator('[data-testid*="return"], .return-flights').first();
    await returns.getByRole('button', { name: /select|choose/i }).first().click();
  }

  async expectOutboundSelectedAndReturnsVisible(): Promise<void> {
    await expect(this.flightCards().filter({ has: this.page.locator('.selected, [aria-selected="true"]') }).first()).toBeVisible();
    await expect(this.page.getByText(/return flights?/i).first()).toBeVisible();
  }

  async expectBothFlightsSelectedWithCombinedPrice(): Promise<void> {
    await expect(this.page.locator('.selected, [aria-selected="true"]')).toHaveCount(2);
    await expect(this.page.getByText(/total|combined price/i).first()).toBeVisible();
  }

  async verifyRoundTripContinueButtonLogic(): Promise<void> {
    await expect(this.continueButton()).toBeDisabled();
    await this.selectFirstOutboundFlight();
    await expect(this.continueButton()).toBeDisabled();
    await this.selectFirstReturnFlight();
    await expect(this.continueButton()).toBeEnabled();
  }

  async expectContinueEnabled(): Promise<void> { await expect(this.continueButton()).toBeEnabled(); }

  private priceValues(): Locator { return this.flightCards().locator('[data-testid*="price"], .price'); }
  private async numbersFrom(locator: Locator): Promise<number[]> {
    return (await locator.allTextContents()).map(v => Number(v.replace(/[^0-9.]/g, ''))).filter(Number.isFinite);
  }

  async sortByPrice(direction: 'ascending' | 'descending'): Promise<void> {
    await this.page.getByRole('button', { name: /sort.*price|price/i }).first().click();
    const indicator = this.page.locator('[aria-sort]').first();
    if (await indicator.count()) await expect(indicator).toHaveAttribute('aria-sort', direction);
  }

  async expectPricesSorted(direction: 'ascending' | 'descending'): Promise<void> {
    const values = await this.numbersFrom(this.priceValues());
    expect(values.length).toBeGreaterThan(1);
    const expected = [...values].sort((a, b) => direction === 'ascending' ? a - b : b - a);
    expect(values).toEqual(expected);
  }

  async sortByDepartureTime(): Promise<void> {
    await this.page.getByRole('button', { name: /sort.*departure|departure time/i }).first().click();
  }

  async expectDepartureTimesSorted(): Promise<void> {
    const texts = await this.flightCards().locator('[data-testid*="departure-time"], .departure-time').allTextContents();
    const minutes = texts.map(t => {
      const match = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (!match) return NaN;
      let hour = Number(match[1]) % 12;
      if (match[3]?.toUpperCase() === 'PM') hour += 12;
      return hour * 60 + Number(match[2]);
    }).filter(Number.isFinite);
    expect(minutes).toEqual([...minutes].sort((a, b) => a - b));
  }

  async filterByAirlines(airlines: string[]): Promise<void> {
    for (const airline of airlines) await this.page.getByRole('checkbox', { name: new RegExp(airline, 'i') }).check();
  }

  async expectOnlyAirlines(airlines: string[]): Promise<void> {
    const names = await this.flightCards().locator('[data-testid*="airline"], .airline-name').allTextContents();
    expect(names.length).toBeGreaterThan(0);
    expect(names.every(name => airlines.some(a => name.toLowerCase().includes(a.toLowerCase())))).toBeTruthy();
  }

  async filterByStops(stops: string[]): Promise<void> {
    for (const stop of stops) await this.page.getByRole('checkbox', { name: new RegExp(stop, 'i') }).check();
  }

  async expectOnlyStops(stops: string[]): Promise<void> {
    const values = await this.flightCards().locator('[data-testid*="stops"], .stops').allTextContents();
    expect(values.length).toBeGreaterThan(0);
    expect(values.every(value => stops.some(s => value.toLowerCase().includes(s.toLowerCase())))).toBeTruthy();
  }

  async filterByPriceRange(range: { min: number; max: number }): Promise<void> {
    const min = this.page.getByLabel(/minimum price|min price/i).first();
    const max = this.page.getByLabel(/maximum price|max price/i).first();
    await min.fill(String(range.min));
    await max.fill(String(range.max));
    await max.press('Enter');
  }

  async expectPricesWithin(range: { min: number; max: number }): Promise<void> {
    const prices = await this.numbersFrom(this.priceValues());
    expect(prices.length).toBeGreaterThan(0);
    expect(prices.every(price => price >= range.min && price <= range.max)).toBeTruthy();
  }

  async verifyInvalidSearchScenarios(message: string): Promise<void> {
    await this.submitSearch();
    await this.expectValidationError(message);
    await expect(this.page.getByText(/server error|stack trace|exception/i)).toHaveCount(0);
  }
}
