/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'product service', function() {

	beforeEach( module( 'bookingadventure.services' ) );

	var product;
	beforeEach( inject( function( _product_ ) {
		product = _product_;
	}));

	describe( 'findById method', function() {

		it( 'should return a valid product object', inject( function() {
			var response = product.findById(1);
			// expect to be not null or undefined
			expect( response ).toBeTruthy();
			// expect to be an object
			expect( response ).toBeObject();
			// expect to have at least one instance member
			expect( response ).toBeNonEmptyObject();
			// expect to have same id passed as parameter
			expect( response.id ).toEqual(1);
		}));

	});
});

