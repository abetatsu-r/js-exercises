import { createIssue } from './issueHandler';
import { Polly } from '@pollyjs/core';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FsPersister from '@pollyjs/persister-fs';
import { afterEach, beforeEach, describe, expect, jest } from '@jest/globals';

Polly.register(NodeHttpAdapter);
Polly.register(FsPersister);

describe('createIssue', () => {
  let polly;
  let spyConsoleLog;
  let spyConsoleError;

  const title = 'title';
  const body = 'body';
  const repo = 'js-exercises';
  const owner = 'abetatsu-r';
  const token = process.env.GITHUB_TOKEN;

  beforeEach(() => {
    polly = new Polly('createIssue', {
      adapters: ['node-http'],
      persister: 'fs',
      recordIfMissing: true,
      matchRequestsBy: {
        url: true,
        headers: true,
        order: true,
      },
    });

    spyConsoleLog = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {});
    spyConsoleError = jest
      .spyOn(global.console, 'error')
      .mockImplementation(() => {});
  });

  afterEach(async () => {
    await polly.stop();
    jest.restoreAllMocks();
  });

  test('正常系: verboseなし', async () => {
    await createIssue(title, body, repo, owner, token, false);
    expect(spyConsoleLog).toHaveBeenCalledWith('success create issue!!');
  });

  test('正常系: verboseあり', async () => {
    await createIssue(title, body, repo, owner, token, true);
    expect(spyConsoleLog).toHaveBeenCalledWith('success create issue!!');
    expect(spyConsoleLog).toHaveBeenCalledTimes(5);
  });

  test('異常系: fetchが失敗した場合', async () => {
    const error = new Error('error');
    global.fetch = jest.fn().mockRejectedValue(error);
    await createIssue(title, body, repo, owner, 'invalid_token', false);
    expect(spyConsoleError).toHaveBeenCalledWith(
      'Error creating issue:',
      error
    );
  });
});
