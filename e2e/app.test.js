describe('Weather app', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display a list of cities', async () => {
    await expect(element(by.id('list'))).toBeVisible();
  });

  it('should navigate to the details page when pressing one of the list items', async () => {
    const firstElement = element(by.id('listItem-0'));
    await expect(firstElement).toBeVisible();
    await element(by.id('listItem-1')).tap();
    await expect(firstElement).not.toBeVisible();
  });

  it('should navigate back to the main page when pressing Weather button or back button', async () => {
    const firstElement = element(by.id('listItem-0'));

    await expect(firstElement).toBeVisible();
    await element(by.id('listItem-1')).tap();

    await expect(firstElement).not.toBeVisible();

    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.text('Weather')).tap();
    }

    await expect(firstElement).toBeVisible();
  });

  it('should show city name, icon, weather conditions and temperature for each city both on main and details page', async () => {
    await expect(element(by.id('listItem-0-name'))).toBeVisible();
    await expect(element(by.id('listItem-0-temperature'))).toBeVisible();
    await expect(element(by.id('listItem-0-conditions'))).toBeVisible();
    await expect(element(by.id('listItem-0-icon'))).toBeVisible();

    await element(by.id('listItem-0')).tap();

    await expect(element(by.id('details-name'))).toBeVisible();
    await expect(element(by.id('details-temperature'))).toBeVisible();
    await expect(element(by.id('details-conditions'))).toBeVisible();
    await expect(element(by.id('details-icon'))).toBeVisible();
  });

  it('should show extra weather data on the details page', async () => {
    await expect(element(by.text('Pressure:'))).not.toBeVisible();
    await expect(element(by.text('Humidity:'))).not.toBeVisible();
    await expect(element(by.text('Wind Speed:'))).not.toBeVisible();
    await expect(element(by.text('Cloud Cover:'))).not.toBeVisible();

    await element(by.id('listItem-0')).tap();

    await expect(element(by.text('Pressure:'))).toBeVisible();
    await expect(element(by.text('Humidity:'))).toBeVisible();
    await expect(element(by.text('Wind Speed:'))).toBeVisible();
    await expect(element(by.text('Cloud Cover:'))).toBeVisible();
  });
});
