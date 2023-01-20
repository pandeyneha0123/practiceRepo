//  Reshape the Matrix
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat //Checks if a reshape is possible.
    let elements = []
    let reshapedMat = []
	
    for (let row of mat) elements.push(...row)

    for (let i = 0; i < elements.length; i += c) {
        reshapedMat.push(elements.slice(i, i + c))
    }

    return reshapedMat
};