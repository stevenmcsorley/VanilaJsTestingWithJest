import Journal from "./journal";

beforeEach(() => {
  Journal.count = 0;
});

test("Journal is a class", () => {
  expect(typeof Journal).toBe("function");
});

test("Journal can add an entry", () => {
  const j = new Journal();
  j.addEntry("I am a test entry");
  expect(j.entries).toEqual({ 1: "I am a test entry" });
});

test("Journal can remove an entry", () => {
  const j = new Journal();
  j.addEntry("I am a test entry");
  j.removeEntry(1);
  expect(j.entries).toEqual({});
});

test("Journal can get entries", () => {
  const j = new Journal();
  j.addEntry("I am a test entry");
  j.addEntry("I am another test entry");
  expect(j.getEntries()).toEqual({
    1: "I am a test entry",
    2: "I am another test entry",
  });
});

test("Journal can count entries", () => {
  const j = new Journal();
  j.addEntry("I am a test entry");
  j.addEntry("I am another test entry");
  expect(j.countEntries()).toBe(2);
});

test("Journal can count entries adfter removing one", () => {
  const j = new Journal();
  j.addEntry("I am a test entry");
  j.addEntry("I am another test entry");
  j.removeEntry(1);
  expect(j.countEntries()).toBe(1);
});
