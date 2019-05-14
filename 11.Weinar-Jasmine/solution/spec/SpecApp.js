describe("cardsArray", function() {
  //1. Test siute: "cardsArray is defined and is not empty"
  it("cardsArray is defined and is not empty", function() {
    expect(cardsArray).toBeDefined();
    expect(cardsArray.length).not.toEqual(0);
  });
  //2. Test siute: "each element cardsArray has the name, imgUrl, price, longDescription, shortDescription, rating and id"
  it("each element cardsArray has the name, imgUrl, price, longDescription, shortDescription, rating and id", function() {
    cardsArray.forEach(card => {
      expect(card.name).toBeDefined();
      expect(card.imgUrl).toBeDefined();
      expect(card.price).toBeDefined();
      expect(card.longDescription).toBeDefined();
      expect(card.shortDescription).toBeDefined();
      expect(card.rating).toBeDefined();
      expect(card.id).toBeDefined();
    });
  });
});

describe("cart", function() {
  //3. Test suite: "cart section is hidden by default"
  it("cart section is hidden by default", function() {
    expect(cartSection.className).not.toMatch(/visible/);
  });
  //4. Test suite: "clicking cartButton toggles cart visibility"
  it("clicking cartButton toggles cart visibility", function() {
    //first click
    cartButton.click();
    expect(cartSection.className).toMatch(/visible/);

    //second click
    cartButton.click();
    expect(cartSection.className).not.toMatch(/visible/);
  });
});

//5. Test suite: "check asynchronous function"
describe("asychronous", function() {
  beforeEach(function(done) {
    simulateAsyncOp(done);
  });

  it("should be able to tell if the async call has completed", function(done) {
    expect(completed).toBe(true);
    done();
  });
});
