import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | addon/ember-wormhole', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Addons::EmberWormhole />`);

    assert.equal(this.element.textContent.trim(), '');

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
