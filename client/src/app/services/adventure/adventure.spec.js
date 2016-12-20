/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'adventure service', function() {

	beforeEach( module( 'bookingadventure.services' ) );

	var adventure;
	beforeEach( inject( function( _adventure_ ) {
		adventure = _adventure_;
	}));

	describe( 'getPopularList method', function() {

		it( 'should return an array of adventure objects', inject( function() {
			var response = adventure.getPopularList();
			// expect to be not null or undefined
			expect( response ).toBeTruthy();
			// expect to be an array
			expect( response ).toBeArray();
			// expect to have at least one element
			expect( response.length ).toBeGreaterThan(0);
			// expect to have an object elementbe
			expect( response ).toBeArrayOfObjects();
		}));

	});

	describe( 'getDealsList method', function() {

		it( 'should return an array of adventure objects', inject( function() {
			var response = adventure.getDealsList();
			// expect to be not null or undefined
			expect( response ).toBeTruthy();
			// expect to be an array
			expect( response ).toBeArray();
			// expect to have at least one element
			expect( response.length ).toBeGreaterThan(0);
			// expect to have an object elementbe
			expect( response ).toBeArrayOfObjects();
		}));

	});

	describe( 'getList method', function() {

		it( 'should return an array of adventure objects', inject( function() {
			adventure.getList().then(function(res) {
				var response = res;

				// expect to be not null or undefined
				expect( response ).toBeTruthy();
				// expect to be an array
				expect( response ).toBeArray();
				// expect to have at least one element
				expect( response.length ).toBeGreaterThan(0);
				// expect to have an object elementbe
				expect( response ).toBeArrayOfObjects();
			});
		}));

	});
});

