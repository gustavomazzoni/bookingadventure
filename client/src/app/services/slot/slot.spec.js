/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'slot service', function() {

	beforeEach( module( 'bookingadventure.services' ) );

	var slot;
	beforeEach( inject( function( _slot_ ) {
		slot = _slot_;
	}));

	describe( 'getListByIdProduct method', function() {

		it( 'should return an array of valid slot objects', inject( function() {
			var response = slot.getListByIdProduct(1);
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

