# Getting an ordinal direction from degrees

These files help to explain how to convert a degee heading to an ordinal direction without using a series of if/then statements. This uses the new EcmaScript 2015 .find() function -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find -- which is supported in all modern browsers except IE. If you need to support older browsers you can use Babel polyfills to get the same result.

The js file includes basic tests to verify the functionality works. I included code to ensure the tested value was >= 0 and < 360. I ensured a degree that matches the lt value is a match, but one that matches the gt value is not.  The direction array can be adjusted to include more precise ordinals (NE, NNE, etc.).
