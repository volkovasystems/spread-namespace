/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

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

const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]*[-_ ])*[a-zA-Z][a-zA-Z0-9]*$/;
const NAMESPACE_TERM_PATTERN = /^[a-zA-Z]|([-_ ])[a-zA-Z]/g;

module.exports = spreadNamespace;