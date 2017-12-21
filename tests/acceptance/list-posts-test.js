import { test } from 'qunit';
import moduleForAcceptance from 'ember-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list posts');

test('should show rentals as the home page', function (assert) {
    visit('/');
    andThen(function () {
        assert.equal(currentURL(), '/posts', 'should redirect automatically');
    });
});
test('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
        assert.equal(currentURL(), '/about', 'should navigate to about');
    });
});

test('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
        assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});