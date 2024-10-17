const args = process.argv.slice(3);
let title = "";
let body = "";
let repo = "";
let issue = "";
let verbose = false;

const owner = process.env.GITHUB_OWNER;
const token = process.env.GITHUB_TOKEN;

// 一般的かはわからないが、作成(--create or -c)、close(--close or -x)、一覧取得(--list or -l)、help(--help, -h)は
// 2つめの引数と仮定
const command = process.argv[2];

// コマンドライン引数の解析
args.forEach((arg) => {
  const [key, value] = arg.split("=");
  switch (key) {
    case "--title":
      title = value;
      break;
    case "--body":
      body = value;
      break;
    case "--repo":
      repo = value;
      break;
    case "--issue":
      issue = value;
      break;
    case "--verbose":
    case "-v":
      verbose = true;
      break;
    default:
      console.error(`Unknown option: ${key}`);
  }
});

// Issueの作成
async function createIssue() {
  // title, body, repoが指定されていない場合はエラー
  if (!title || !body || !repo) {
    console.error("title, body, repo is required");
    return;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  if (verbose) {
    console.log(`Making request to: ${url}`);
    console.log("Headers:", {
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
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (verbose) {
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);
    }

    console.log("success create issue!!");
  } catch (error) {
    console.error("Error creating issue:", error);
  }
}

// issueの一覧取得
async function getIssues() {
  // repoが指定されていない場合はエラー
  if (!repo) {
    console.error("repo is required");
    return;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
  if (verbose) {
    console.log(`Making request to: ${url}`);
    console.log("Headers:", {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
  }
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (verbose) {
      console.log("Response status:", response.status);
      console.log("Response data:", response.data); // 二回json()が読めないし、ふむ;
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
    console.error("Error getting issues:", error);
  }
}

// issueのclose
async function closeIssue() {
  // issueが指定されていない場合はエラー
  if (!issue || !repo) {
    console.error("issue is required");
    return;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issue}`;
  if (verbose) {
    console.log(`Making request to: ${url}`);
    console.log("Headers:", {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
  }
  try {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ state: "closed" }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (verbose) {
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);
    }

    console.log("success close issue number:", issue);
  } catch (error) {
    console.error("Error closing issue:", error);
  }
}

// ヘルプ表示
function showhelp() {
  console.log("Usage: node index.js [command] [options]\r\n");
  console.log("Commands:");
  console.log("  --create, -c\tCreate a new issue");
  console.log("  --list, -l\tList issues");
  console.log("  --close, -x\tClose an issue");
  console.log("\r\nOptions:");
  console.log("  --title\tIssue title");
  console.log("  --body\tIssue body");
  console.log("  --repo\tRepository name");
  console.log("  --issue\tIssue number");
  console.log("  --verbose, -v\tShow verbose output");
  console.log("\r\nEnvironment variables:");
  console.log("  GITHUB_OWNER\tGitHub owner name");
  console.log("  GITHUB_TOKEN\tGitHub personal access token");
}

switch (command) {
  case "--create":
  case "-c":
    await createIssue();
    break;
  case "--list":
  case "-l":
    await getIssues();
    break;
  case "--close":
  case "-x":
    await closeIssue();
    break;
  case "--help":
  case "-h":
    showhelp();
    break;
  default:
    console.error(`Unknown command: ${command}`);
}
