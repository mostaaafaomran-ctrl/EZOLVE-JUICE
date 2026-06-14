const { test, expect } = require('@playwright/test');

test('Verify marketplace', async ({ page }) => {
  await page.goto('http://localhost:8000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/home_final.png', fullPage: true });

  await page.click('text=تصفح المنتجات');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/shop_final.png', fullPage: true });

  await page.click('text=تفاصيل');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/detail_final.png', fullPage: true });

  await page.goto('http://localhost:8000/#add-item');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/add_item_final.png', fullPage: true });
});
