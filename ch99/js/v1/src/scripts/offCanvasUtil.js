import Env from "../model/env.js";

const envForm = document.getElementById("env-form"); // 環境設定フォーム

const envInputStartTime = document.getElementById("env-input-start-time");
const envInputEndTime = document.getElementById("env-input-end-time");
const envInputSleepInTime = document.getElementById("env-input-sleep-in-time");
const envInputAwakeTime = document.getElementById("env-input-awake-time");

const envAddTapTimingButton = document.getElementById("add-tap-timing-btn");

const envToggleGoodCampTicket = document.getElementById("goodCampToggle");

const envShowRegisterFormButton = document.getElementById(
  "env-show-register-form-btn"
);
const envCancelRegisterButton = document.getElementById("env-cancel-register");
const envRegisterNameInput = document.getElementById("env-register-name");

const offCanvasMenu = document.getElementById("envSettings");
const envToggleButton = document.getElementById("env-toggle-button");

document.addEventListener("DOMContentLoaded", () => {
  // オフキャンバスメニューの開閉
  function toggleMenu() {
    offCanvasMenu.classList.toggle("open");
    if (envToggleButton.textContent === "×") {
      envToggleButton.textContent = "設定";
    } else {
      envToggleButton.textContent = "×";
    }
    console.log("toggleMenu");
  }

  envToggleButton.addEventListener("click", toggleMenu);
});

envForm.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // デフォルトのフォーム送信を防止
  }
});

/**
 * タップタイミング設定欄の追加
 */
envAddTapTimingButton.addEventListener("click", () => {
  // 現在の設定欄の数を取得
  const tapTimingCount = document.querySelectorAll(
    ".env-settings-tap-timing"
  ).length;

  // タップタイミング設定欄の追加
  const newTapTiming = document.createElement("div");
  newTapTiming.classList.add("env-settings-tap-timing");
  newTapTiming.innerHTML = `
    <input
                type="time"
                class="env-item-time-input"
                id="env-tap-timing-${tapTimingCount + 1}"
                name="env-tap-timing-${tapTimingCount + 1}"
                value="08:00"
              />
              <label>
                <input type="radio" name="count-efe-${
                  tapTimingCount + 1
                }" value="0" checked/> 0
              </label>
              <label>
                <input type="radio" name="count-efe-${
                  tapTimingCount + 1
                }" value="1" /> 1
              </label>
              <label>
                <input type="radio" name="count-efe-${
                  tapTimingCount + 1
                }" value="2" /> 2
              </label>
  `;
  // envAddTapTimingButtonの前に追加
  envAddTapTimingButton.after(newTapTiming);
});

// 登録時に名前入力欄を出現させる
envShowRegisterFormButton.addEventListener("click", () => {
  // env-register-modeクラスの要素のdisplay:noneを削除
  const elements = document.querySelectorAll(".env-register-mode");
  console.log(elements);
  elements.forEach((element) => {
    element.style.display = "";
  });

  // env-show-register-form-btnのdisplay:noneを追加
  envShowRegisterFormButton.style.display = "none";
});

// 登録をキャンセルする場合に再度登録欄を出現させる
envCancelRegisterButton.addEventListener("click", () => {
  // env-register-modeクラスの要素のdisplay:noneを追加
  const elements = document.querySelectorAll(".env-register-mode");
  elements.forEach((element) => {
    element.style.display = "none";
  });

  // env-show-register-form-btnのdisplay:noneを削除
  envShowRegisterFormButton.style.display = "";
});

// form送信時の操作
envForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const env = createEnv();
  const name = envRegisterNameInput.value;
  sessionStorage.setItem("env-" + name, JSON.stringify(env));
});

/**
 * envフォームの情報からEnvクラスを生成する
 * (:TODO) 24h以降の入力を受け付けていないので、基本的にはstartTimeから24時間以内の値という前提
 */
export function createEnv() {
  // 稼働時間
  const startTime = convertStartTimeToSeconds(envInputStartTime.value);
  const endTime =
    convertTimeToSeconds(envInputEndTime.value, startTime) || 86400;

  // 稼働時間(秒数)を計算
  // 睡眠時間
  const sleepInTime = convertTimeToSeconds(
    envInputSleepInTime.value,
    startTime
  );
  const awakeTime =
    convertTimeToSeconds(envInputAwakeTime.value, startTime) || 86400;

  // いいキャンプチケットの有無
  const hasGoodCampTicket = envToggleGoodCampTicket.checked;

  // 編成したお手伝いボーナス数
  const teamHelpingBonusCount = Number(
    document.querySelector('input[name="count-team-helping-bonus"]:checked')
      .value
  );

  // タップタイミングの取得
  const tapTimings = Array.from(
    document.querySelectorAll(".env-settings-tap-timing")
  ).map((elem) => {
    const time = elem.querySelector(".env-item-time-input").value;
    const count = Number(
      elem.querySelector('input[name^="count-efe"]:checked').value
    );
    return { time: convertTimeToSeconds(time, startTime), count: count };
  });

  return new Env(
    envRegisterNameInput.value,
    startTime,
    endTime,
    sleepInTime,
    awakeTime,
    tapTimings.map((elem) => elem.time),
    tapTimings.map((elem) => elem.count), // tapTimingsに対応する回数のみ保存させる
    hasGoodCampTicket,
    teamHelpingBonusCount
  );
}

/**
 * "HH:mm"形式の時刻文字列を秒数に変換する
 */
function convertStartTimeToSeconds(time) {
  const [hour, minute] = time.split(":");
  return hour * 3600 + minute * 60;
}

/**
 * "HH:mm"形式の時刻文字列を秒数に変換する
 * ただし、startよりも値が小さい場合は24hを足す
 */
function convertTimeToSeconds(time, start) {
  const [hour, minute] = time.split(":");
  return hour * 3600 + minute * 60 >= start
    ? hour * 3600 + minute * 60 - start
    : hour * 3600 + minute * 60 + 86400 - start;
}
