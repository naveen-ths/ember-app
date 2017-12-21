import { moduleFor, test } from 'ember-qunit';

moduleFor('route:posts/view', 'Unit | Route | posts/view', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
