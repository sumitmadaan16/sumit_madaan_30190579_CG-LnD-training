# Playwright Agents Training Project

This project contains Playwright end-to-end automation for the SauceDemo Swag Labs application. It covers login validation, inventory and sorting, cart workflows, checkout, navigation, accessibility-oriented locators, fixtures, data-driven testing, Allure reporting, and Jira integration utilities.

## MCP Servers

The project is configured for these MCP servers in `.vscode/mcp.json`:

- `playwright-test`: Playwright test execution and browser automation.
- `excel`: Excel workbook access for test-data workflows.
- `jira`: Jira integration through the Atlassian MCP service.
- `github`: GitHub repository operations through the GitHub MCP server.

The GitHub server reads `GITHUB_PERSONAL_ACCESS_TOKEN` from the environment. Do not commit the token itself.

## Useful Commands

```bash
npm install
npm run test:chromium
npm run test:ddt
npm run test:chromium:allure
```