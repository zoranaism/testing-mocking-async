// with mocking we replace real with dummy info
// jest.mock("./http");

// instead of mocking the response, we can mock whole .get functionality
// no need for special specifications, jest will recoglize it from __mock__ folder

const { loadTitle } = require("./util");

test("should print an uppercase text", () => {
  // by this way we are hitting out API separately for the testing
  // and out API might have limited or charge per hit
  loadTitle().then((title) => {
    expect(title).toBe("DELECTUS AUT AUTEM");
  });
});

// we do the same for the code that access the file system
// we can also mock global packages like axios
