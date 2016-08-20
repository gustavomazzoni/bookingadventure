/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'place service', function() {

	beforeEach( module( 'bookingadventure.services' ) );

	var place;
	beforeEach( inject( function( _place_ ) {
		place = _place_;
	}));

	describe( 'getPlacesList method', function() {

		it( 'should return an array of place objects', inject( function() {
			var response = place.getPlacesList();
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
});

