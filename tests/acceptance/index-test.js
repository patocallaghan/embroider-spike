import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import page from 'embroider-spike/tests/pages/users';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function (assert) {
    await page.visit();

    assert.equal(currentURL(), '/');
  });
});
