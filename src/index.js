/*
* Re-writes expression statements with no right hand assignment which are all caps as constants
*/
import path from 'path';

const isUpperCase = (str) => str === str.toUpperCase();

export default ({ types: t}) => {

  return {
    visitor: {
      ExpressionStatement(path, state) {
        const name = path.node.expression.name;

        // return if already assigned value or not uppsercase
        if (path.node.expression.right || !name || !isUpperCase(name)) return;

        // variables ending with __ are exported
        const shouldExport = name.substring(name.length - 2, name.length) === '__';
        const varName = shouldExport ? name.substring(0, name.length - 2) : name;
        const exported = shouldExport ? ` = exports.${varName}` : '';

        // asssign
        path.replaceWith(t.assignmentExpression(
                   "=",
                   t.identifier(`var ${varName}${exported}`),
                   t.identifier(`'${varName}'`)
                 )
               );
      }
    }
  };
}
