/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
describe('Example', () => {
  beforeEach(async (done) => {
    await device.reloadReactNative();
    done();
  });

  it('should have welcome screen', async (done) => {
    await expect(element(by.id('welcome'))).toBeVisible();
    done();
  });

  it('Should count to 1 if pressed once', async(done) =>{
    await expect(element(by.id('runningState'))).toHaveText('0');
    await element(by.id('startButton')).tap();
    await expect(element(by.id('runningState'))).toHaveText('1');
    done();
  });

  it('Should count to 4 if pressed 4 times', async(done) =>{
    await expect(element(by.id('runningState'))).toHaveText('0');
    await element(by.id('startButton')).multiTap(4);
    await expect(element(by.id('runningState'))).toHaveText('4');
    done();
  });

  it('Should write into TextInput', async(done) =>{
    await element(by.id('input')).typeText('Hello World!');
    await element(by.id('input')).clearText();
    await element(by.id('input')).typeText('Bye!');
  });

  // it('should show hello screen after tap', async (done) => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  //   done();
  // });

  // it('should show world screen after tap', async (done) => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  //   done();
  // });
});
