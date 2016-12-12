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
        if(path.node.expression.right || !isUpperCase(name)) return;

        // asssign
        path.replaceWith(t.assignmentExpression(
                   "=",
                   t.identifier(`var ${name}`),
                   t.identifier(`'${name}'`)
                 )
               );
      }
    }
  };
}
