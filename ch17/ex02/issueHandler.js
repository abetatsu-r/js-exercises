export async function createIssue(title, body, repo, owner, token, verbose) {
  // title, body, repoが指定されていない場合はエラー
  if (!title || !body || !repo) {
    console.error('title, body, repo is required');
    return;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  if (verbose) {
    console.log(`Making request to: ${url}`);
    console.log('Headers:', {
      Authorization: `Bearer ${token}`,
    });
  }
  const data = {
    title,
    body,
    repo,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (verbose) {
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
    }

    console.log('success create issue!!');
  } catch (error) {
    console.error('Error creating issue:', error);
  }
}

// issueの一覧取得
export async function getIssues(owner, repo, token, verbose) {
  // repoが指定されていない場合はエラー
  if (!repo) {
    console.error('repo is required');
    return;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  if (verbose) {
    console.log(`Making request to: ${url}`);
    console.log('Headers:', {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (verbose) {
      console.log('Response status:', response.status);
      console.log('Response data:', response.data); // 二回json()が読めないし、ふむ;
    }

    const issues = await response.json();

    // 出力するのは、issue_number, title, body, stateのみとする
    issues.forEach((json) => {
      console.log({
        number: json.number,
        title: json.title,
        state: json.state,
        body: json.body,
      });
    });
  } catch (error) {
    console.error('Error getting issues:', error);
  }
}
