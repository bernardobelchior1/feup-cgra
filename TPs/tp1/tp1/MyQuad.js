/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyQuad(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyQuad.prototype = Object.create(CGFobject.prototype);
MyQuad.prototype.constructor=MyQuad;

MyQuad.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0.5,	//0
            -0.5, 0.5, 0.5,		//1
            0.5, -0.5, 0.5,		//2
            0.5, 0.5, 0.5		//3
			];

	this.indices = [
			2, 1, 0,
			3, 1, 2
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
