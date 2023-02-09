describe('Weather app', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display a list of cities, navigate to the details page when pressing one of the list items and navigate back to the main page when pressing Weather button or back button', async () => {
    await expect(element(by.id('list'))).toBeVisible();

    const firstElement = element(by.id('listItem-0'));

    await expect(firstElement).toBeVisible();

    await firstElement.tap();

    await expect(firstElement).not.toBeVisible();
    await expect(element(by.text('Pressure:'))).toBeVisible();
    await expect(element(by.text('Humidity:'))).toBeVisible();

    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.text('Weather')).tap();
    }

    await expect(firstElement).toBeVisible();
  });
});
