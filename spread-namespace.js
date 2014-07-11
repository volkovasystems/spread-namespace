/*:
	@module-configuration:
		{
			"packageName": "spread-namespace",
			"fileName": "spread-namespace.js",
			"moduleName": "spreadNamespace",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/spread-namespace.git",
			"testCase": "spread-namespace-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation
*/
var spreadNamespace = function spreadNamespace( namespace ){
	/*:
		@meta-configuration:
			{
				"namespace:required": "string"
			}
		@end-meta-configuration
	*/

	if( NAMESPACE_PATTERN.test( namespace ) ){
		return namespace.replace( NAMESPACE_TERM_PATTERN,
			function onReplaced( match, divideCharacter ){
                if( divideCharacter && divideCharacter != " " ){
                    return match.replace( divideCharacter, " " );
                }else{
                    return match;
                }
			} );
	}else{
		var error = new Error( "invalid namespace format" );
		console.error( error );
		throw error;
	}
};

const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]+[-_ ])*[a-zA-Z][a-zA-Z0-9]+$/;
const NAMESPACE_TERM_PATTERN = /^[a-zA-Z]|([-_ ])[a-zA-Z]/g;

( module || { } ).exports = spreadNamespace;