// spec.js
describe('The Reverser', function() {
  it('should reverse the input', function() {
    browser.get('file:///Users/ddonohoe/github/FlashTab/index.html');
    element(by.id('hellos')).sendKeys("Drew");
    element(by.id('gobutton')).click();
    expect(element(by.id('PageOut')).getText()).
        toEqual('Drew reversed is werd, and is 4 letters long.');;
  });
});
