#!/usr/bin/env node
import https from "https";
import { Octokit, App } from "octokit";

const octokit = new Octokit({
});

octokit.issues
  .create({
    owner: "abetatsu-r",
    repo: "js-exercises",
    title: "New issue",
    body: "This is a new issue",
  })
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
