import axios from 'axios';

const JIRA_BASE = process.env.JIRA_BASE_URL || '';
const JIRA_USER = process.env.JIRA_USER || '';
const JIRA_TOKEN = process.env.JIRA_API_TOKEN || '';
const JIRA_PROJECT = process.env.JIRA_PROJECT_KEY || '';

export async function createIssue(summary: string, description: string, issueType = 'Bug') {
  if (!JIRA_BASE || !JIRA_USER || !JIRA_TOKEN || !JIRA_PROJECT) {
    console.warn('Jira env vars missing; skipping issue creation');
    return null;
  }

  const auth = Buffer.from(`${JIRA_USER}:${JIRA_TOKEN}`).toString('base64');
  const payload = {
    fields: {
      project: { key: JIRA_PROJECT },
      summary,
      description,
      issuetype: { name: issueType }
    }
  };

  const url = `${JIRA_BASE.replace(/\/$/, '')}/rest/api/2/issue`;
  const res = await axios.post(url, payload, {
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json'
    }
  });

  return res.data;
}

export default createIssue;
