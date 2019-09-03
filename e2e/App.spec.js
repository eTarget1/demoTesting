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

  it('Should have a startButton', async(done) =>{
    await element(by.id('startButton')).tap();
    done();
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
