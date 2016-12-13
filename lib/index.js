'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isUpperCase = function isUpperCase(str) {
  return str === str.toUpperCase();
}; /*
   * Re-writes expression statements with no right hand assignment which are all caps as constants
   */


exports.default = function (_ref) {
  var t = _ref.types;


  return {
    visitor: {
      ExpressionStatement: function ExpressionStatement(path, state) {
        var name = path.node.expression.name;

        // return if already assigned value or not uppsercase
        if (path.node.expression.right || !name || !isUpperCase(name)) return;

        // variables ending with __ are exported
        var shouldExport = name.substring(name.length - 2, name.length) === '__';
        var varName = shouldExport ? name.substring(0, name.length - 2) : name;
        var exported = shouldExport ? ' = exports.' + varName : '';

        // asssign
        path.replaceWith(t.assignmentExpression("=", t.identifier('var ' + varName + exported), t.identifier('\'' + varName + '\'')));
      }
    }
  };
};