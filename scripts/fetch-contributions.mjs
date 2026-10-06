// Fetches the public GitHub contribution calendar and writes it to
// public/contributions.json, where the home page's Activity section reads it.
//
// Runs in the deploy workflow before the build. It never fails the build: if
// the request does not work, no file is written and the section stays hidden.
//
// Local use:  GITHUB_TOKEN=<any token> node scripts/fetch-contributions.mjs

import { mkdir, writeFile } from 'node:fs/promises';

const login = process.env.GH_LOGIN || 'coolisuz';
const token = process.env.GITHUB_TOKEN;
const outFile = new URL('../public/contributions.json', import.meta.url);

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const query = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              weekday
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

async function main() {
  if (!token) {
    console.warn('fetch-contributions: GITHUB_TOKEN is not set, skipping.');
    return;
  }

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'portfolio-contributions',
    },
    body: JSON.stringify({ query, variables: { login } }),
  });

  if (!response.ok) {
    throw new Error(`GitHub answered ${response.status} ${response.statusText}`);
  }

  const body = await response.json();
  const calendar = body?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error(`No calendar in the response: ${JSON.stringify(body?.errors ?? body)}`);
  }

  const data = {
    login,
    total: calendar.totalContributions,
    generatedAt: new Date().toISOString(),
    weeks: calendar.weeks.map((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        weekday: day.weekday,
        count: day.contributionCount,
        level: LEVELS[day.contributionLevel] ?? 0,
      }))
    ),
  };

  await mkdir(new URL('../public/', import.meta.url), { recursive: true });
  await writeFile(outFile, JSON.stringify(data));
  console.log(
    `fetch-contributions: ${data.total} contributions over ${data.weeks.length} weeks for @${login}.`
  );
}

main().catch((error) => {
  console.warn(`fetch-contributions: skipped (${error.message}).`);
});
