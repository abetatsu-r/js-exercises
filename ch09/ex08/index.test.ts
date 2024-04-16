import { AlarmClock, State, Action } from "./index.ts";

class TestAlarmClock {
  private alarmClock: AlarmClock;

  constructor(state: State) {
    const alarmClock: AlarmClock = new AlarmClock();
    switch (state) {
      case "alarmSet":
        alarmClock.setAlarm();
        break;
      case "alarmSounding":
        alarmClock.setAlarm();
        alarmClock.reachedToAlarmTime();
        break;
      case "snoozing":
        alarmClock.setAlarm();
        alarmClock.reachedToAlarmTime();
        alarmClock.snooze();
        break;
    }
    this.alarmClock = alarmClock;
  }

  get currentState() {
    return this.alarmClock.currentState;
  }
  setAlarm() {
    return this.alarmClock.setAlarm();
  }
  cancelAlarm() {
    return this.alarmClock.cancelAlarm();
  }
  reachedToAlarmTime() {
    return this.alarmClock.reachedToAlarmTime();
  }
  snooze() {
    return this.alarmClock.snooze();
  }
  elapseSnoozeTime() {
    return this.alarmClock.elapseSnoozeTime();
  }
}

describe("状態遷移テスト", () => {
  test("通常 -> アラームセット中", () => {
    const c = new TestAlarmClock("normal");
    expect(c.setAlarm()).toBe("none");
    expect(c.currentState).toBe("alarmSet");
  });

  test("アラームセット中 -> 通常: アラーム解除", () => {
    const c = new TestAlarmClock("alarmSet");
    expect(c.cancelAlarm()).toBe("none");
    expect(c.currentState).toBe("normal");
  });

  test("アラームセット中 --> アラーム鳴動中: アラーム設定時刻到達", () => {
    const c = new TestAlarmClock("alarmSet");
    expect(c.reachedToAlarmTime()).toBe("soundAlarm");
    expect(c.currentState).toBe("alarmSounding");
  });

  test("アラーム鳴動中 --> 通常: アラーム解除", () => {
    const c = new TestAlarmClock("alarmSounding");
    expect(c.cancelAlarm()).toBe("stopAlarm");
    expect(c.currentState).toBe("normal");
  });

  test("アラーム鳴動中 --> スヌーズ中: スヌーズ", () => {
    const c = new TestAlarmClock("alarmSounding");
    expect(c.snooze()).toBe("stopAlarm");
    expect(c.currentState).toBe("snoozing");
  });

  test("スヌーズ中 --> アラーム鳴動中: スヌーズ設定時間経過", () => {
    const c = new TestAlarmClock("snoozing");
    expect(c.elapseSnoozeTime()).toBe("soundAlarm");
    expect(c.currentState).toBe("alarmSounding");
  });

  test("スヌーズ中 --> 通常: アラーム解除", () => {
    const c = new TestAlarmClock("snoozing");
    expect(c.cancelAlarm()).toBe("none");
    expect(c.currentState).toBe("normal");
  });
});
