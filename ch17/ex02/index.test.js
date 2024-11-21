import { createIssue, getIssues } from './issueHandler.js';
import { afterEach, beforeEach, describe, expect, jest } from '@jest/globals';

const title = 'title';
const body = 'body';
const repo = 'repo';
const owner = 'owner';
const token = 'token';

describe('createIssue', () => {
  let spyConsoleError;
  let spyConsoleLog;
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    spyConsoleError && spyConsoleError.mockRestore();
    spyConsoleLog && spyConsoleLog.mockRestore();
  });

  const expectedUrl = `https://api.github.com/repos/owner/repo/issues`;

  test('正常系: verboseなし', async () => {
    spyConsoleLog = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {});

    const response = {};
    global.fetch = jest.fn().mockResolvedValue(response);
    await createIssue(title, body, repo, owner, token, false);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'POST',
      body: JSON.stringify({ title, body, repo }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer token`,
      },
    });
    expect(spyConsoleLog).toHaveBeenCalledWith('success create issue!!');
  });

  test('正常系: verboseあり', async () => {
    spyConsoleLog = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {});

    const response = {};
    global.fetch = jest.fn().mockResolvedValue(response);
    await createIssue(title, body, repo, owner, token, true);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'POST',
      body: JSON.stringify({ title, body, repo }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer token`,
      },
    });
    expect(spyConsoleLog).toHaveBeenCalledWith('success create issue!!');
    expect(spyConsoleLog).toHaveBeenCalledTimes(5);
  });

  test('異常系: fetchが失敗した場合', async () => {
    spyConsoleError = jest
      .spyOn(global.console, 'error')
      .mockImplementation(() => {});

    const error = new Error('error');
    global.fetch = jest.fn().mockRejectedValue(error);
    await createIssue(title, body, repo, owner, token, false);
    expect(spyConsoleError).toHaveBeenCalledWith(
      'Error creating issue:',
      error
    );
  });
});

describe('getIssues', () => {
  let spyConsoleError;
  let spyConsoleLog;

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const expectedUrl = `https://api.github.com/repos/owner/repo/issues`;

  test('正常系: verboseなし', async () => {
    spyConsoleLog = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {});

    const response = {
      json: () => {
        return [
          {
            title: 'title1',
            body: 'body1',
            state: 'open',
            number: 99,
            owner: 'owner',
          },
        ];
      },
    };
    global.fetch = jest.fn().mockResolvedValue(response);
    await getIssues(owner, repo, token, false);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer token`,
      },
    });
    expect(spyConsoleLog).toHaveBeenCalledWith({
      title: 'title1',
      body: 'body1',
      state: 'open',
      number: 99,
    });
  });

  test('正常系: verboseあり', async () => {
    spyConsoleLog = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {});

    const response = {
      json: () => {
        return [
          {
            title: 'title1',
            body: 'body1',
            state: 'open',
            number: 99,
            owner: 'owner',
          },
        ];
      },
    };
    global.fetch = jest.fn().mockResolvedValue(response);
    await getIssues(owner, repo, token, true);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer token`,
      },
    });
    expect(spyConsoleLog).toHaveBeenCalledWith({
      title: 'title1',
      body: 'body1',
      state: 'open',
      number: 99,
    });
    expect(spyConsoleLog).toHaveBeenCalledTimes(5);
  });

  test('異常系: fetchが失敗した場合', async () => {
    spyConsoleError = jest
      .spyOn(global.console, 'error')
      .mockImplementation(() => {});

    const error = new Error('error');
    global.fetch = jest.fn().mockRejectedValue(error);
    await getIssues(owner, repo, token, false);
    expect(spyConsoleError).toHaveBeenCalledWith(
      'Error getting issues:',
      error
    );
  });
});
