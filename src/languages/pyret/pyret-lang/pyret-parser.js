const E = require("./jglr.js");

/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */

  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "derivable": {
      "program": [
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude": [
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt"
      ],
      "block": [
        "block_I0_star",
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude_I0_opt": [
        "ε",
        "prelude_I0",
        "provide-stmt"
      ],
      "prelude_I1_opt": [
        "ε",
        "prelude_I1",
        "provide-types-stmt"
      ],
      "prelude_I2_star": [
        "ε",
        "prelude_I2",
        "import-stmt"
      ],
      "prelude_I0": [
        "provide-stmt"
      ],
      "provide-stmt": [],
      "prelude_I1": [
        "provide-types-stmt"
      ],
      "provide-types-stmt": [],
      "prelude_I2": [
        "import-stmt"
      ],
      "import-stmt": [],
      "import-source": [
        "import-special",
        "import-name"
      ],
      "comma-names": [],
      "import-special": [],
      "import-name": [],
      "import-special_I3_star": [
        "ε",
        "import-special_I3"
      ],
      "import-special_I3": [],
      "stmt": [
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "record-ann": [],
      "comma-names_I1_star": [
        "ε",
        "comma-names_I1"
      ],
      "comma-names_I1": [],
      "block_I0_star": [
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "block_I0": [
        "stmt",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "type-expr": [],
      "newtype-expr": [],
      "spy-stmt": [],
      "let-expr": [],
      "fun-expr": [],
      "data-expr": [],
      "when-expr": [],
      "var-expr": [],
      "rec-expr": [],
      "assign-expr": [],
      "check-test": [
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "check-expr": [],
      "contract-stmt": [],
      "spy-stmt_I1_opt": [
        "ε",
        "spy-stmt_I1",
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "spy-stmt_I3_opt": [
        "ε",
        "spy-stmt_I3",
        "spy-contents",
        "spy-field",
        "id-expr"
      ],
      "spy-stmt_I1": [
        "binop-expr",
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr": [
        "expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "spy-stmt_I3": [
        "spy-contents",
        "spy-field",
        "id-expr"
      ],
      "spy-contents": [
        "spy-field",
        "id-expr"
      ],
      "spy-field": [
        "id-expr"
      ],
      "spy-contents_I1_star": [
        "ε",
        "spy-contents_I1"
      ],
      "spy-contents_I1": [],
      "id-expr": [],
      "ty-params": [
        "ty-params_I0_opt",
        "ε",
        "ty-params_I0"
      ],
      "ann": [
        "name-ann",
        "record-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "toplevel-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "binding": [
        "name-binding",
        "tuple-binding"
      ],
      "name-binding": [],
      "tuple-binding": [],
      "tuple-binding_I1_star": [
        "ε",
        "tuple-binding_I1"
      ],
      "tuple-binding_I3_opt": [
        "ε",
        "tuple-binding_I3"
      ],
      "tuple-binding_I5_opt": [
        "ε",
        "tuple-binding_I5"
      ],
      "tuple-binding_I1": [],
      "tuple-binding_I3": [],
      "tuple-binding_I5": [],
      "name-binding_I0_opt": [
        "ε",
        "name-binding_I0"
      ],
      "name-binding_I2_opt": [
        "ε",
        "name-binding_I2"
      ],
      "name-binding_I0": [],
      "name-binding_I2": [],
      "multi-let-expr": [],
      "let-binding": [
        "let-expr",
        "var-expr"
      ],
      "multi-let-expr_I2_star": [
        "ε",
        "multi-let-expr_I2"
      ],
      "multi-let-expr_I3": [],
      "multi-let-expr_I2": [],
      "letrec-expr": [],
      "letrec-expr_I2_star": [
        "ε",
        "letrec-expr_I2"
      ],
      "letrec-expr_I3": [],
      "letrec-expr_I2": [],
      "type-bind": [],
      "newtype-bind": [],
      "type-let-bind": [
        "type-bind",
        "newtype-bind"
      ],
      "type-let-expr": [],
      "type-let-expr_I2_star": [
        "ε",
        "type-let-expr_I2"
      ],
      "type-let-expr_I3": [],
      "type-let-expr_I2": [],
      "contract-stmt_I2": [
        "ann",
        "noparen-arrow-ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann": [],
      "fun-header": [
        "args"
      ],
      "fun-expr_I3": [],
      "doc-string": [
        "doc-string_I0_opt",
        "ε",
        "doc-string_I0"
      ],
      "where-clause": [
        "where-clause_I0_opt",
        "ε",
        "where-clause_I0"
      ],
      "args": [],
      "return-ann": [
        "return-ann_I0_opt",
        "ε",
        "return-ann_I0"
      ],
      "ty-params_I0_opt": [
        "ε",
        "ty-params_I0"
      ],
      "ty-params_I0": [],
      "ty-params_I0_I0": [],
      "ty-params_I0_I2": [],
      "args_I0": [],
      "args_I1_opt": [
        "ε",
        "args_I1",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1_I1_star": [
        "ε",
        "args_I1_I1"
      ],
      "args_I1_I1": [],
      "return-ann_I0_opt": [
        "ε",
        "return-ann_I0"
      ],
      "return-ann_I0": [],
      "doc-string_I0_opt": [
        "ε",
        "doc-string_I0"
      ],
      "doc-string_I0": [],
      "where-clause_I0_opt": [
        "ε",
        "where-clause_I0"
      ],
      "where-clause_I0": [],
      "check-expr_I0": [],
      "check-op": [],
      "check-test_A0_I2_opt": [
        "ε",
        "check-test_A0_I2"
      ],
      "check-test_A0_I2": [],
      "check-test_A0_I2_I1": [],
      "check-op-postfix": [],
      "data-expr_I4_opt": [
        "ε",
        "data-expr_I4",
        "first-data-variant",
        "variant-constructor"
      ],
      "data-expr_I5_star": [
        "ε",
        "data-expr_I5",
        "data-variant"
      ],
      "data-sharing": [
        "data-sharing_I0_opt",
        "ε",
        "data-sharing_I0"
      ],
      "data-expr_I4": [
        "first-data-variant",
        "variant-constructor"
      ],
      "first-data-variant": [
        "variant-constructor"
      ],
      "data-expr_I5": [
        "data-variant"
      ],
      "data-variant": [],
      "variant-constructor": [],
      "variant-members": [],
      "data-with": [
        "data-with_I0_opt",
        "ε",
        "data-with_I0"
      ],
      "variant-members_I1_opt": [
        "ε",
        "variant-members_I1",
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1": [
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-member": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1_I1_star": [
        "ε",
        "variant-members_I1_I1"
      ],
      "variant-members_I1_I1": [],
      "variant-member_I0_opt": [
        "ε",
        "variant-member_I0"
      ],
      "variant-member_I0": [],
      "data-with_I0_opt": [
        "ε",
        "data-with_I0"
      ],
      "data-with_I0": [],
      "fields": [
        "field"
      ],
      "data-sharing_I0_opt": [
        "ε",
        "data-sharing_I0"
      ],
      "data-sharing_I0": [],
      "when-expr_I2": [],
      "expr": [
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr_I1_star": [
        "ε",
        "binop-expr_I1"
      ],
      "binop-expr_I1": [],
      "binop": [],
      "paren-expr": [],
      "prim-expr": [
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "lambda-expr": [],
      "method-expr": [],
      "app-expr": [],
      "obj-expr": [],
      "tuple-expr": [],
      "tuple-get": [],
      "dot-expr": [],
      "template-expr": [],
      "bracket-expr": [],
      "get-bang-expr": [],
      "update-expr": [],
      "extend-expr": [],
      "if-expr": [],
      "if-pipe-expr": [],
      "cases-expr": [],
      "for-expr": [],
      "user-block-expr": [],
      "inst-expr": [],
      "construct-expr": [],
      "table-select": [],
      "table-extend": [],
      "table-filter": [],
      "table-order": [],
      "table-extract": [],
      "table-update": [],
      "table-expr": [],
      "load-table-expr": [],
      "reactor-expr": [],
      "bad-expr": [],
      "paren-expr_I0": [],
      "num-expr": [],
      "frac-expr": [],
      "rfrac-expr": [],
      "bool-expr": [],
      "string-expr": [],
      "lambda-expr_I2": [],
      "method-expr_I2": [],
      "app-args": [],
      "opt-comma-binops": [
        "opt-comma-binops_I0_opt",
        "ε",
        "opt-comma-binops_I0",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_opt": [
        "ε",
        "opt-comma-binops_I0",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0": [
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "comma-binops": [
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "comma-binops_I1_star": [
        "ε",
        "comma-binops_I1"
      ],
      "comma-binops_I1": [],
      "trailing-opt-comma-binops": [
        "trailing-opt-comma-binops_I0",
        "ε",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "trailing-opt-comma-binops_I0": [
        "ε",
        "comma-binops",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "trailing-opt-comma-binops_I0_A0_I1_opt": [
        "ε",
        "trailing-opt-comma-binops_I0_A0_I1"
      ],
      "trailing-opt-comma-binops_I0_A0_I1": [],
      "inst-expr_I3_star": [
        "ε",
        "inst-expr_I3"
      ],
      "inst-expr_I3": [],
      "tuple-fields": [
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "tuple-fields_I1_star": [
        "ε",
        "tuple-fields_I1"
      ],
      "tuple-fields_I2_opt": [
        "ε",
        "tuple-fields_I2"
      ],
      "tuple-fields_I1": [],
      "tuple-fields_I2": [],
      "obj-fields": [
        "obj-field"
      ],
      "obj-field": [],
      "obj-fields_I1_star": [
        "ε",
        "obj-fields_I1"
      ],
      "obj-fields_I2_opt": [
        "ε",
        "obj-fields_I2"
      ],
      "obj-fields_I1": [],
      "obj-fields_I2": [],
      "key": [],
      "obj-field_A1_I2_opt": [
        "ε",
        "obj-field_A1_I2"
      ],
      "obj-field_A1_I2": [],
      "obj-field_A2_I3": [],
      "field": [],
      "fields_I1_star": [
        "ε",
        "fields_I1"
      ],
      "fields_I2_opt": [
        "ε",
        "fields_I2"
      ],
      "fields_I1": [],
      "fields_I2": [],
      "field_A1_I3": [],
      "reactor-fields": [
        "reactor-field"
      ],
      "reactor-field": [],
      "reactor-fields_I1_star": [
        "ε",
        "reactor-fields_I1"
      ],
      "reactor-fields_I2_opt": [
        "ε",
        "reactor-fields_I2"
      ],
      "reactor-fields_I1": [],
      "reactor-fields_I2": [],
      "construct-modifier": [
        "ε"
      ],
      "table-headers": [
        "table-headers_I0_opt",
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-rows": [
        "table-rows_I0_opt",
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-headers_I0_opt": [
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-headers_I0": [
        "table-header"
      ],
      "table-headers_I0_I0_star": [
        "ε",
        "table-headers_I0_I0",
        "list-table-header"
      ],
      "table-header": [],
      "table-headers_I0_I0": [
        "list-table-header"
      ],
      "list-table-header": [],
      "table-header_I1_opt": [
        "ε",
        "table-header_I1"
      ],
      "table-header_I1": [],
      "table-rows_I0_opt": [
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-rows_I0": [
        "table-row"
      ],
      "table-rows_I0_I0_star": [
        "ε",
        "table-rows_I0_I0",
        "table-row"
      ],
      "table-row": [],
      "table-rows_I0_I0": [
        "table-row"
      ],
      "table-items": [
        "table-items_I0_opt",
        "ε",
        "table-items_I0",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_opt": [
        "ε",
        "table-items_I0",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0": [
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_I0_star": [
        "ε",
        "table-items_I0_I0",
        "list-table-item"
      ],
      "table-items_I0_I0": [
        "list-table-item"
      ],
      "list-table-item": [],
      "if-expr_I2": [],
      "if-expr_I4_star": [
        "ε",
        "if-expr_I4",
        "else-if"
      ],
      "if-expr_I5_opt": [
        "ε",
        "if-expr_I5"
      ],
      "if-expr_I4": [
        "else-if"
      ],
      "else-if": [],
      "if-expr_I5": [],
      "if-pipe-expr_I1": [],
      "if-pipe-expr_I2_star": [
        "ε",
        "if-pipe-expr_I2",
        "if-pipe-branch"
      ],
      "if-pipe-expr_I3_opt": [
        "ε",
        "if-pipe-expr_I3"
      ],
      "if-pipe-expr_I2": [
        "if-pipe-branch"
      ],
      "if-pipe-branch": [],
      "if-pipe-expr_I3": [],
      "cases-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-binding_I0_opt": [
        "ε",
        "cases-binding_I0"
      ],
      "cases-binding_I0": [],
      "cases-args": [],
      "cases-args_I1_opt": [
        "ε",
        "cases-args_I1",
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1": [
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1_I1_star": [
        "ε",
        "cases-args_I1_I1"
      ],
      "cases-args_I1_I1": [],
      "cases-expr_I1": [],
      "cases-expr_I5": [],
      "cases-expr_I6_star": [
        "ε",
        "cases-expr_I6",
        "cases-branch"
      ],
      "cases-expr_I7_opt": [
        "ε",
        "cases-expr_I7"
      ],
      "cases-expr_I6": [
        "cases-branch"
      ],
      "cases-branch": [],
      "cases-expr_I7": [],
      "cases-branch_I2_opt": [
        "ε",
        "cases-branch_I2",
        "cases-args"
      ],
      "cases-branch_I2": [
        "cases-args"
      ],
      "for-bind": [],
      "for-expr_I3_opt": [
        "ε",
        "for-expr_I3",
        "for-bind"
      ],
      "for-expr_I6": [],
      "for-expr_I3": [
        "for-bind"
      ],
      "for-expr_I3_I1_star": [
        "ε",
        "for-expr_I3_I1"
      ],
      "for-expr_I3_I1": [],
      "column-order": [],
      "column-order_I1": [],
      "table-select_I2_star": [
        "ε",
        "table-select_I2"
      ],
      "table-select_I2": [],
      "table-filter_I2_opt": [
        "ε",
        "table-filter_I2"
      ],
      "table-filter_I2": [],
      "table-filter_I2_I2_star": [
        "ε",
        "table-filter_I2_I2"
      ],
      "table-filter_I2_I2": [],
      "table-order_I4_star": [
        "ε",
        "table-order_I4"
      ],
      "table-order_I4": [],
      "table-update_I2_opt": [
        "ε",
        "table-update_I2"
      ],
      "table-update_I2": [],
      "table-update_I2_I2_star": [
        "ε",
        "table-update_I2_I2"
      ],
      "table-update_I2_I2": [],
      "table-extend_I2_opt": [
        "ε",
        "table-extend_I2"
      ],
      "table-extend-fields": [
        "table-extend-field"
      ],
      "table-extend_I2": [],
      "table-extend_I2_I2_star": [
        "ε",
        "table-extend_I2_I2"
      ],
      "table-extend_I2_I2": [],
      "table-extend-fields_I0_star": [
        "ε",
        "table-extend-fields_I0",
        "list-table-extend-field"
      ],
      "table-extend-field": [],
      "table-extend-fields_I2_opt": [
        "ε",
        "table-extend-fields_I2"
      ],
      "table-extend-fields_I0": [
        "list-table-extend-field"
      ],
      "list-table-extend-field": [],
      "table-extend-fields_I2": [],
      "table-extend-field_A0_I1_opt": [
        "ε",
        "table-extend-field_A0_I1"
      ],
      "table-extend-field_A0_I1": [],
      "table-extend-field_A1_I1_opt": [
        "ε",
        "table-extend-field_A1_I1"
      ],
      "table-extend-field_A1_I1": [],
      "load-table-expr_I3_opt": [
        "ε",
        "load-table-expr_I3",
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-expr_I3": [
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-specs": [
        "load-table-spec"
      ],
      "load-table-specs_I0_star": [
        "ε",
        "load-table-specs_I0",
        "load-table-spec"
      ],
      "load-table-spec": [],
      "load-table-specs_I0": [
        "load-table-spec"
      ],
      "name-ann": [],
      "arrow-ann": [],
      "app-ann": [],
      "pred-ann": [],
      "dot-ann": [],
      "tuple-ann": [],
      "comma-ann-field": [
        "ann-field"
      ],
      "ann-field": [],
      "comma-ann-field_I1_star": [
        "ε",
        "comma-ann-field_I1"
      ],
      "comma-ann-field_I1": [],
      "trailing-opt-comma-ann-field": [
        "trailing-opt-comma-ann-field_I0",
        "ε",
        "comma-ann-field",
        "ann-field"
      ],
      "trailing-opt-comma-ann-field_I0": [
        "ε",
        "comma-ann-field",
        "ann-field"
      ],
      "trailing-opt-comma-ann-field_I0_A0_I1_opt": [
        "ε",
        "trailing-opt-comma-ann-field_I0_A0_I1"
      ],
      "trailing-opt-comma-ann-field_I0_A0_I1": [],
      "tuple-ann_I2_star": [
        "ε",
        "tuple-ann_I2"
      ],
      "tuple-ann_I3_opt": [
        "ε",
        "tuple-ann_I3"
      ],
      "tuple-ann_I2": [],
      "tuple-ann_I3": [],
      "noparen-arrow-ann_I0_opt": [
        "ε",
        "noparen-arrow-ann_I0",
        "arrow-ann-args",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann_I0": [
        "arrow-ann-args",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann-args": [
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "comma-anns": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann-args_A1_I0": [],
      "arrow-ann_I0": [],
      "arrow-ann_I1_opt": [
        "ε",
        "arrow-ann_I1",
        "arrow-ann-args",
        "ann",
        "comma-anns",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I1": [
        "arrow-ann-args",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "app-ann_I0": [
        "name-ann",
        "dot-ann"
      ],
      "comma-anns_I1_star": [
        "ε",
        "comma-anns_I1"
      ],
      "comma-anns_I1": [],
      "pred-ann_I2": [],
      "START": [
        "program",
        "ε",
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "spy-stmt",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "id-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "rfrac-expr",
        "bool-expr",
        "string-expr"
      ]
    },
    "rulesByOldId": {
      "0": {
        "name": "program",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "1": {
        "name": "prelude",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "2": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": []
      },
      "3": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "4": {
        "name": "prelude_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "5": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": []
      },
      "6": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "7": {
        "name": "prelude_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "8": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": []
      },
      "9": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "10": {
        "name": "prelude_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "11": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "12": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "13": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "14": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "15": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "16": {
        "name": "import-special",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "17": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": []
      },
      "18": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "19": {
        "name": "import-special_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "20": {
        "name": "import-name",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "22": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "23": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "25": {
        "name": "comma-names",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "26": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": []
      },
      "27": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "28": {
        "name": "comma-names_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29": {
        "name": "block",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "30": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": []
      },
      "31": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "32": {
        "name": "block_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "33": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "34": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "35": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt"
          }
        ]
      },
      "36": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "37": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "38": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "39": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "40": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "41": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "42": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "43": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "44": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "45": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "46": {
        "name": "spy-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPY"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "47": {
        "name": "spy-stmt_I1_opt",
        "position": 0,
        "symbols": []
      },
      "48": {
        "name": "spy-stmt_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1"
          }
        ]
      },
      "49": {
        "name": "spy-stmt_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "50": {
        "name": "spy-stmt_I3_opt",
        "position": 0,
        "symbols": []
      },
      "51": {
        "name": "spy-stmt_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3"
          }
        ]
      },
      "52": {
        "name": "spy-stmt_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents"
          }
        ]
      },
      "53": {
        "name": "spy-contents",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-field"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          }
        ]
      },
      "54": {
        "name": "spy-contents_I1_star",
        "position": 0,
        "symbols": []
      },
      "55": {
        "name": "spy-contents_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1"
          }
        ]
      },
      "56": {
        "name": "spy-contents_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "spy-field"
          }
        ]
      },
      "57": {
        "name": "spy-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "58": {
        "name": "spy-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "59": {
        "name": "type-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "60": {
        "name": "newtype-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "61": {
        "name": "let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "62": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "63": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "64": {
        "name": "tuple-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "65": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": []
      },
      "66": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "67": {
        "name": "tuple-binding_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "68": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": []
      },
      "69": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "70": {
        "name": "tuple-binding_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "71": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": []
      },
      "72": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "73": {
        "name": "tuple-binding_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "74": {
        "name": "name-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "75": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "76": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "77": {
        "name": "name-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "78": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": []
      },
      "79": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "80": {
        "name": "name-binding_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "81": {
        "name": "toplevel-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "82": {
        "name": "multi-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "83": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "84": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "85": {
        "name": "multi-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "86": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "87": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "88": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "89": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "90": {
        "name": "letrec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "91": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "92": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "93": {
        "name": "letrec-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "94": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "95": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "96": {
        "name": "type-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "97": {
        "name": "newtype-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "98": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "99": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "100": {
        "name": "type-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "101": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "102": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "103": {
        "name": "type-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "104": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "105": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "106": {
        "name": "contract-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "107": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "108": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "109": {
        "name": "fun-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "110": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "111": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "112": {
        "name": "fun-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "113": {
        "name": "ty-params",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "114": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": []
      },
      "115": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "116": {
        "name": "ty-params_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "117": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "118": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "119": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "120": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "121": {
        "name": "args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "122": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "123": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "124": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "125": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "126": {
        "name": "args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "127": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "128": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "129": {
        "name": "args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "130": {
        "name": "return-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "131": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "132": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "133": {
        "name": "return-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "134": {
        "name": "doc-string",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "135": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": []
      },
      "136": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "137": {
        "name": "doc-string_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "138": {
        "name": "where-clause",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "139": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": []
      },
      "140": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "141": {
        "name": "where-clause_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "142": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "143": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          }
        ]
      },
      "144": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLES"
          }
        ]
      },
      "145": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "146": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "147": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "148": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "149": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": []
      },
      "150": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "151": {
        "name": "check-test_A0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "152": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "153": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "154": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "155": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "156": {
        "name": "data-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "157": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "158": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "159": {
        "name": "data-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "160": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": []
      },
      "161": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "162": {
        "name": "data-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "163": {
        "name": "variant-constructor",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "164": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "165": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "166": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "167": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "168": {
        "name": "variant-members",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "169": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": []
      },
      "170": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "171": {
        "name": "variant-members_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "172": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "173": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "174": {
        "name": "variant-members_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "175": {
        "name": "variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "176": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": []
      },
      "177": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "178": {
        "name": "variant-member_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "179": {
        "name": "data-with",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "180": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": []
      },
      "181": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "182": {
        "name": "data-with_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "183": {
        "name": "data-sharing",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "184": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": []
      },
      "185": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "186": {
        "name": "data-sharing_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "187": {
        "name": "var-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "188": {
        "name": "rec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "189": {
        "name": "assign-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "190": {
        "name": "when-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "191": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "192": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "193": {
        "name": "binop-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "194": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "195": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "196": {
        "name": "binop-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "197": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "198": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "199": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "200": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "201": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "202": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "203": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "204": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "205": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "206": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "207": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "208": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "209": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "210": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "211": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "212": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "213": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "214": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "215": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "216": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "217": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "218": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "219": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "220": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "221": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "222": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "223": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "224": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "225": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "226": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "227": {
        "name": "check-op-postfix",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "228": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "229": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "230": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "231": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "232": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "233": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "234": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "235": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "236": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "237": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "238": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "239": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "240": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "241": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "242": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "243": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "244": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "245": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "246": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "247": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "248": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "249": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "250": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "251": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "252": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "253": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "254": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "255": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "256": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "257": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "258": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "259": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "260": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "261": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "262": {
        "name": "template-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "263": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-STRING"
          }
        ]
      },
      "264": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-BLOCK-COMMENT"
          }
        ]
      },
      "265": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-OPER"
          }
        ]
      },
      "266": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-NUMBER"
          }
        ]
      },
      "267": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNKNOWN"
          }
        ]
      },
      "268": {
        "name": "paren-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "269": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "270": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "271": {
        "name": "id-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "272": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "273": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "274": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rfrac-expr"
          }
        ]
      },
      "275": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "276": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "277": {
        "name": "num-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "278": {
        "name": "frac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "279": {
        "name": "rfrac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROUGHRATIONAL"
          }
        ]
      },
      "280": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "281": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "282": {
        "name": "string-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "283": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "284": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "285": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "286": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "287": {
        "name": "method-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "288": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "289": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "290": {
        "name": "app-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "291": {
        "name": "app-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "292": {
        "name": "opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "293": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": []
      },
      "294": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "295": {
        "name": "opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          }
        ]
      },
      "296": {
        "name": "comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "297": {
        "name": "comma-binops_I1_star",
        "position": 0,
        "symbols": []
      },
      "298": {
        "name": "comma-binops_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1"
          }
        ]
      },
      "299": {
        "name": "comma-binops_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "300": {
        "name": "trailing-opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0"
          }
        ]
      },
      "301": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "302": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "303": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1"
          }
        ]
      },
      "304": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "305": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 0,
        "symbols": []
      },
      "306": {
        "name": "inst-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "307": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": []
      },
      "308": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "309": {
        "name": "inst-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "310": {
        "name": "tuple-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "311": {
        "name": "tuple-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "312": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "313": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "314": {
        "name": "tuple-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "315": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "316": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "317": {
        "name": "tuple-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "318": {
        "name": "tuple-get",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "319": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "320": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "321": {
        "name": "obj-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "322": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "323": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "324": {
        "name": "obj-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "325": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "326": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "327": {
        "name": "obj-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "328": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "329": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "330": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": []
      },
      "331": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "332": {
        "name": "obj-field_A1_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "333": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "334": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "335": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "336": {
        "name": "fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "337": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "338": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "339": {
        "name": "fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "340": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "341": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "342": {
        "name": "fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "343": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "344": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "345": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "346": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "347": {
        "name": "key",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "348": {
        "name": "reactor-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-field"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I2_opt"
          }
        ]
      },
      "349": {
        "name": "reactor-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "350": {
        "name": "reactor-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1"
          }
        ]
      },
      "351": {
        "name": "reactor-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "reactor-field"
          }
        ]
      },
      "352": {
        "name": "reactor-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "353": {
        "name": "reactor-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-fields_I2"
          }
        ]
      },
      "354": {
        "name": "reactor-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "355": {
        "name": "reactor-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "356": {
        "name": "construct-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "357": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": []
      },
      "358": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "359": {
        "name": "table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "360": {
        "name": "table-headers",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "361": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": []
      },
      "362": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "363": {
        "name": "table-headers_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "364": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "365": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "366": {
        "name": "table-headers_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "367": {
        "name": "list-table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "368": {
        "name": "table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "369": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": []
      },
      "370": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "371": {
        "name": "table-header_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "372": {
        "name": "table-rows",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "373": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": []
      },
      "374": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "375": {
        "name": "table-rows_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "376": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "377": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "378": {
        "name": "table-rows_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "379": {
        "name": "table-row",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "380": {
        "name": "table-items",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "381": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": []
      },
      "382": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "383": {
        "name": "table-items_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "384": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "385": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "386": {
        "name": "table-items_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "387": {
        "name": "list-table-item",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "388": {
        "name": "reactor-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "389": {
        "name": "dot-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "390": {
        "name": "bracket-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "391": {
        "name": "get-bang-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "392": {
        "name": "extend-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "393": {
        "name": "update-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "394": {
        "name": "if-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "395": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "396": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "397": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": []
      },
      "398": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "399": {
        "name": "if-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "400": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": []
      },
      "401": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "402": {
        "name": "if-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "403": {
        "name": "else-if",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "404": {
        "name": "if-pipe-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "405": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "406": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "407": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "408": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "409": {
        "name": "if-pipe-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "410": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "411": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "412": {
        "name": "if-pipe-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "413": {
        "name": "if-pipe-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "414": {
        "name": "cases-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "415": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "416": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "417": {
        "name": "cases-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "418": {
        "name": "cases-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "419": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "420": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "421": {
        "name": "cases-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "422": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "423": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "424": {
        "name": "cases-args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "425": {
        "name": "cases-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "426": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "427": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "428": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "429": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "430": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": []
      },
      "431": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "432": {
        "name": "cases-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "433": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": []
      },
      "434": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "435": {
        "name": "cases-expr_I7",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "436": {
        "name": "cases-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "437": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": []
      },
      "438": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "439": {
        "name": "cases-branch_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "440": {
        "name": "for-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "441": {
        "name": "for-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "442": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "443": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "444": {
        "name": "for-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "445": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": []
      },
      "446": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "447": {
        "name": "for-expr_I3_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "448": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "449": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "450": {
        "name": "column-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "451": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "452": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "453": {
        "name": "table-select",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "454": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": []
      },
      "455": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "456": {
        "name": "table-select_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "457": {
        "name": "table-filter",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "458": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": []
      },
      "459": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "460": {
        "name": "table-filter_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "461": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "462": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "463": {
        "name": "table-filter_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "464": {
        "name": "table-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "465": {
        "name": "table-order_I4_star",
        "position": 0,
        "symbols": []
      },
      "466": {
        "name": "table-order_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4"
          }
        ]
      },
      "467": {
        "name": "table-order_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          }
        ]
      },
      "468": {
        "name": "table-extract",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "469": {
        "name": "table-update",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "470": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": []
      },
      "471": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "472": {
        "name": "table-update_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "473": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "474": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "475": {
        "name": "table-update_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "476": {
        "name": "table-extend",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "477": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": []
      },
      "478": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "479": {
        "name": "table-extend_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "480": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "481": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "482": {
        "name": "table-extend_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "483": {
        "name": "table-extend-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "484": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "485": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "486": {
        "name": "table-extend-fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "487": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "488": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "489": {
        "name": "table-extend-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "490": {
        "name": "list-table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "491": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "492": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "493": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "494": {
        "name": "table-extend-field_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "495": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "496": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": []
      },
      "497": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "498": {
        "name": "table-extend-field_A1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "499": {
        "name": "load-table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "500": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "501": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "502": {
        "name": "load-table-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "503": {
        "name": "load-table-specs",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "504": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": []
      },
      "505": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "506": {
        "name": "load-table-specs_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "507": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "508": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "509": {
        "name": "user-block-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "510": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "511": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "512": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "513": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "514": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "515": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "516": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "517": {
        "name": "name-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "518": {
        "name": "comma-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "519": {
        "name": "comma-ann-field_I1_star",
        "position": 0,
        "symbols": []
      },
      "520": {
        "name": "comma-ann-field_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1"
          }
        ]
      },
      "521": {
        "name": "comma-ann-field_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "522": {
        "name": "trailing-opt-comma-ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0"
          }
        ]
      },
      "523": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "524": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "525": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1"
          }
        ]
      },
      "526": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "527": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 0,
        "symbols": []
      },
      "528": {
        "name": "record-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "529": {
        "name": "ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "530": {
        "name": "tuple-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "531": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": []
      },
      "532": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "533": {
        "name": "tuple-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "534": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": []
      },
      "535": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "536": {
        "name": "tuple-ann_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "537": {
        "name": "noparen-arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "538": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "539": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "540": {
        "name": "noparen-arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "541": {
        "name": "arrow-ann-args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "542": {
        "name": "arrow-ann-args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args_A1_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "543": {
        "name": "arrow-ann-args_A1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "544": {
        "name": "arrow-ann-args_A1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "545": {
        "name": "arrow-ann-args_A1_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "546": {
        "name": "arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "547": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "548": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "549": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "550": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "551": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "552": {
        "name": "arrow-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "553": {
        "name": "app-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "554": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "555": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "556": {
        "name": "comma-anns",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "557": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": []
      },
      "558": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "559": {
        "name": "comma-anns_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "560": {
        "name": "pred-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "561": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "562": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "563": {
        "name": "dot-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "564": {
        "name": "START",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "program"
          }
        ]
      },
      "854": {
        "name": "program",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "947": {
        "name": "prelude",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "1228": {
        "name": "prelude_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "1277": {
        "name": "prelude_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "4680": {
        "name": "program",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "4682": {
        "name": "block",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "9645": {
        "name": "prelude",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "9785": {
        "name": "prelude_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "9833": {
        "name": "prelude_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "10026": {
        "name": "id-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "10066": {
        "name": "string-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "10153": {
        "name": "provide-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "10202": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "10204": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "10206": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt"
          }
        ]
      },
      "10208": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "10210": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "10212": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "10214": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "10216": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "10218": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "10220": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "10222": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "10224": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "10226": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "10316": {
        "name": "check-test",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "10801": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "10845": {
        "name": "toplevel-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "10847": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "10849": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "11196": {
        "name": "name-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "11198": {
        "name": "name-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "11200": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "11327": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "11403": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "11493": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "11529": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          }
        ]
      },
      "11575": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLES"
          }
        ]
      },
      "11621": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "11667": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "11713": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "11753": {
        "name": "binop-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "12176": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "12214": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "12252": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "12290": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "12328": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "12366": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "12404": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "12442": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "12480": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "12518": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "12556": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "12594": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "12632": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "12670": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "12708": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "12746": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "12784": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "12822": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "12860": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "12898": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "12936": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "12974": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "13012": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "13050": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "13088": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "13126": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "13164": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "13202": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "13240": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "13278": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "13316": {
        "name": "template-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "13473": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "13511": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "13549": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rfrac-expr"
          }
        ]
      },
      "13587": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "13625": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "13663": {
        "name": "num-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "13701": {
        "name": "frac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "13739": {
        "name": "rfrac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROUGHRATIONAL"
          }
        ]
      },
      "13777": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "13815": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "14805": {
        "name": "block_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "14851": {
        "name": "block_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "19768": {
        "name": "prelude",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "20050": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "20098": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "20295": {
        "name": "provide-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "20348": {
        "name": "spy-stmt_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1"
          }
        ]
      },
      "20350": {
        "name": "spy-stmt_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "20529": {
        "name": "check-test",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "20531": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "20564": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "20597": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "20630": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "20663": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "20696": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "20729": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "20762": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "20795": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "20828": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "20861": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "20894": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "20927": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "20960": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "20993": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "21026": {
        "name": "check-op-postfix",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "21038": {
        "name": "key",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21044": {
        "name": "tuple-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "21091": {
        "name": "obj-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "21275": {
        "name": "ty-params",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "21278": {
        "name": "ty-params_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "21286": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "21288": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "21489": {
        "name": "obj-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "21526": {
        "name": "name-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "21531": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "21535": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "21680": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "21684": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "22016": {
        "name": "binop-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "22564": {
        "name": "app-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "23243": {
        "name": "construct-modifier",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "23319": {
        "name": "table-headers",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "23322": {
        "name": "table-headers_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "23508": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "23511": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "23556": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "23562": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "24026": {
        "name": "prelude_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "24074": {
        "name": "prelude_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "24462": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "24467": {
        "name": "comma-ann-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "24522": {
        "name": "trailing-opt-comma-ann-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0"
          }
        ]
      },
      "24524": {
        "name": "name-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "24536": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "24537": {
        "name": "arrow-ann-args_A1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "24545": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24550": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "24552": {
        "name": "comma-anns",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "24600": {
        "name": "contract-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "24602": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "24604": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "24605": {
        "name": "arrow-ann-args_A1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "24613": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "24614": {
        "name": "arrow-ann-args_A1_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "24622": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "24623": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "24629": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "24634": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "24639": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "24644": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "24645": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "24651": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "24658": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "24660": {
        "name": "noparen-arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "24662": {
        "name": "arrow-ann-args",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "24681": {
        "name": "assign-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "24699": {
        "name": "check-test_A0_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "24832": {
        "name": "let-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "24834": {
        "name": "tuple-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "24844": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "24849": {
        "name": "fun-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "24875": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "24895": {
        "name": "tuple-binding_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "24901": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "24949": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "25219": {
        "name": "comma-names",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "25251": {
        "name": "tuple-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "25289": {
        "name": "obj-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "25327": {
        "name": "obj-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "25340": {
        "name": "name-binding",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "25342": {
        "name": "name-binding_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "25495": {
        "name": "user-block-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "25907": {
        "name": "check-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "25920": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "25966": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "26016": {
        "name": "comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "26128": {
        "name": "opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "26130": {
        "name": "opt-comma-binops_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "26132": {
        "name": "opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          }
        ]
      },
      "26204": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "26236": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "26268": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "26300": {
        "name": "binop-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "26366": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "26398": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "26430": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "26462": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "26494": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "26526": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "26558": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "26590": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "26622": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "26654": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "26686": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "26718": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "26750": {
        "name": "dot-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "26991": {
        "name": "get-bang-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "27067": {
        "name": "paren-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "27149": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27197": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27359": {
        "name": "table-rows",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "27361": {
        "name": "table-rows_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "27370": {
        "name": "table-header",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "27383": {
        "name": "table-headers_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "27388": {
        "name": "table-headers_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "27390": {
        "name": "table-headers_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "27433": {
        "name": "reactor-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-field"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I2_opt"
          }
        ]
      },
      "27439": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27487": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27825": {
        "name": "table-filter_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "27951": {
        "name": "table-update_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "27993": {
        "name": "table-extend_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "28049": {
        "name": "import-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "28098": {
        "name": "import-name",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "28193": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "28241": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "28395": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "28397": {
        "name": "trailing-opt-comma-ann-field_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt"
          }
        ]
      },
      "28399": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field_I0_A0_I1"
          }
        ]
      },
      "28401": {
        "name": "comma-ann-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          }
        ]
      },
      "28409": {
        "name": "record-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "28470": {
        "name": "comma-anns",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "28526": {
        "name": "arrow-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args"
          }
        ]
      },
      "28533": {
        "name": "arrow-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "28546": {
        "name": "spy-stmt_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3"
          }
        ]
      },
      "28548": {
        "name": "spy-stmt_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents"
          }
        ]
      },
      "28550": {
        "name": "spy-contents",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-field"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          }
        ]
      },
      "28556": {
        "name": "spy-field",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "28559": {
        "name": "check-test",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "28561": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "28625": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "28659": {
        "name": "newtype-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "28662": {
        "name": "tuple-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "28666": {
        "name": "tuple-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "28668": {
        "name": "tuple-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "28671": {
        "name": "tuple-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "28673": {
        "name": "fun-header",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "28676": {
        "name": "return-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "28679": {
        "name": "return-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "28712": {
        "name": "args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "28730": {
        "name": "args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "28734": {
        "name": "tuple-binding_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "28735": {
        "name": "tuple-binding_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "28740": {
        "name": "tuple-binding_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "28786": {
        "name": "doc-string",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "28833": {
        "name": "doc-string_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "28927": {
        "name": "comma-names",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "28937": {
        "name": "ty-params_I0",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "28940": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "28943": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "28951": {
        "name": "obj-field_A1_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "29051": {
        "name": "obj-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "29055": {
        "name": "obj-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "29057": {
        "name": "obj-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "29060": {
        "name": "obj-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "29062": {
        "name": "obj-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29068": {
        "name": "name-binding_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29085": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29169": {
        "name": "multi-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "29173": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29223": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29269": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29353": {
        "name": "letrec-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "29369": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29415": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29499": {
        "name": "type-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "29503": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29551": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29630": {
        "name": "var-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29632": {
        "name": "rec-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29636": {
        "name": "comma-binops",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          }
        ]
      },
      "29643": {
        "name": "app-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "29725": {
        "name": "binop-expr_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "29840": {
        "name": "fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "29846": {
        "name": "bracket-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "30044": {
        "name": "table-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30082": {
        "name": "table-rows_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "30083": {
        "name": "table-rows_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "30086": {
        "name": "table-rows_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "30088": {
        "name": "table-row",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "30179": {
        "name": "table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "30183": {
        "name": "table-header_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "30187": {
        "name": "list-table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "30192": {
        "name": "reactor-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30230": {
        "name": "reactor-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-field"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I2_opt"
          }
        ]
      },
      "30634": {
        "name": "if-pipe-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "30637": {
        "name": "if-pipe-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "30640": {
        "name": "if-pipe-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "30688": {
        "name": "for-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "30732": {
        "name": "for-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "30775": {
        "name": "table-select_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "30816": {
        "name": "table-filter_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "30913": {
        "name": "table-update_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "30961": {
        "name": "table-extend_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "31046": {
        "name": "load-table-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "31048": {
        "name": "load-table-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "31211": {
        "name": "ann-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31217": {
        "name": "comma-ann-field_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field_I1"
          }
        ]
      },
      "31220": {
        "name": "dot-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31226": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "31228": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "31238": {
        "name": "comma-anns_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "31258": {
        "name": "noparen-arrow-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31260": {
        "name": "arrow-ann-args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann-args_A1_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-ann-field"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "31278": {
        "name": "spy-stmt",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "SPY"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "spy-stmt_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31280": {
        "name": "spy-contents",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-field"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          }
        ]
      },
      "31319": {
        "name": "type-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31321": {
        "name": "tuple-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31330": {
        "name": "return-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31354": {
        "name": "args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "31361": {
        "name": "args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "31365": {
        "name": "tuple-binding",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "31557": {
        "name": "doc-string_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "31608": {
        "name": "comma-names_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "31612": {
        "name": "obj-field_A1_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31617": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "31665": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "31716": {
        "name": "obj-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "31720": {
        "name": "multi-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "31762": {
        "name": "letrec-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "31804": {
        "name": "type-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31808": {
        "name": "newtype-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31812": {
        "name": "type-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "31856": {
        "name": "check-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31858": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31900": {
        "name": "data-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "31905": {
        "name": "data-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "31910": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31915": {
        "name": "when-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31920": {
        "name": "comma-binops_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-binops_I1"
          }
        ]
      },
      "31926": {
        "name": "inst-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "31964": {
        "name": "inst-expr_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "31967": {
        "name": "extend-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32005": {
        "name": "tuple-get",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32049": {
        "name": "fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "32059": {
        "name": "update-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32181": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "32224": {
        "name": "trailing-opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0"
          }
        ]
      },
      "32226": {
        "name": "table-row",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "32229": {
        "name": "table-items",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "32232": {
        "name": "table-items_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "32416": {
        "name": "table-header_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "32431": {
        "name": "reactor-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32435": {
        "name": "reactor-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "32439": {
        "name": "reactor-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-field"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I2_opt"
          }
        ]
      },
      "32441": {
        "name": "reactor-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "reactor-fields_I1"
          }
        ]
      },
      "32444": {
        "name": "reactor-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-fields_I2"
          }
        ]
      },
      "32575": {
        "name": "if-pipe-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32586": {
        "name": "if-pipe-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32669": {
        "name": "for-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "32752": {
        "name": "table-select_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "32793": {
        "name": "table-filter_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "32800": {
        "name": "column-order",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "32803": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "32806": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "32852": {
        "name": "table-extract",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32890": {
        "name": "table-update_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "32941": {
        "name": "table-extend_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "32996": {
        "name": "load-table-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33034": {
        "name": "load-table-specs",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "33035": {
        "name": "load-table-specs_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "33039": {
        "name": "load-table-specs_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "33262": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "33310": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "33358": {
        "name": "comma-ann-field_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "33366": {
        "name": "comma-anns_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33370": {
        "name": "tuple-ann_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "33379": {
        "name": "tuple-ann_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "33382": {
        "name": "tuple-ann_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "33389": {
        "name": "app-ann",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "33394": {
        "name": "spy-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33400": {
        "name": "spy-contents_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "spy-contents_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "spy-contents_I1"
          }
        ]
      },
      "33403": {
        "name": "check-test_A0_I2",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33440": {
        "name": "args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "33445": {
        "name": "tuple-binding",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "33447": {
        "name": "tuple-binding_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "33487": {
        "name": "where-clause",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "33489": {
        "name": "where-clause_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "33491": {
        "name": "where-clause_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33493": {
        "name": "comma-names_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "33497": {
        "name": "obj-field",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33503": {
        "name": "multi-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33541": {
        "name": "letrec-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33579": {
        "name": "type-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33639": {
        "name": "variant-constructor",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "33645": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33650": {
        "name": "data-with",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "33655": {
        "name": "data-with_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "33704": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33709": {
        "name": "comma-binops_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33712": {
        "name": "inst-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33812": {
        "name": "field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33816": {
        "name": "fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33820": {
        "name": "fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "33822": {
        "name": "fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "33825": {
        "name": "fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "33906": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33908": {
        "name": "trailing-opt-comma-binops_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-binops"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1_opt"
          }
        ]
      },
      "33910": {
        "name": "trailing-opt-comma-binops_I0_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops_I0_A0_I1"
          }
        ]
      },
      "33912": {
        "name": "construct-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "trailing-opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "33952": {
        "name": "table-items_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "34057": {
        "name": "table-items_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "34089": {
        "name": "table-items_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "34134": {
        "name": "reactor-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "reactor-field"
          }
        ]
      },
      "34175": {
        "name": "if-expr_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "34179": {
        "name": "if-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "34183": {
        "name": "if-expr_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "34185": {
        "name": "if-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34191": {
        "name": "if-pipe-branch",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34197": {
        "name": "if-pipe-expr_I3",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34199": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "34202": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "34247": {
        "name": "for-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "34253": {
        "name": "for-expr_I3_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "34384": {
        "name": "table-select",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34422": {
        "name": "table-filter",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34463": {
        "name": "table-filter_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "34469": {
        "name": "table-order",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34507": {
        "name": "table-order_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "table-order_I4"
          }
        ]
      },
      "34513": {
        "name": "table-update_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "34516": {
        "name": "table-update",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34557": {
        "name": "table-extend_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "34560": {
        "name": "table-extend",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "34610": {
        "name": "table-extend-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "34617": {
        "name": "table-extend-fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "34619": {
        "name": "table-extend-fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "34649": {
        "name": "load-table-spec",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "34844": {
        "name": "pred-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34849": {
        "name": "tuple-ann_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "34852": {
        "name": "tuple-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "34857": {
        "name": "arrow-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34862": {
        "name": "spy-contents_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "spy-field"
          }
        ]
      },
      "34865": {
        "name": "args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34868": {
        "name": "tuple-binding_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "34870": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "34908": {
        "name": "where-clause_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34921": {
        "name": "variant-members_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "34923": {
        "name": "variant-members_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "34932": {
        "name": "variant-member_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "34936": {
        "name": "variant-member_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "34940": {
        "name": "data-with_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "34967": {
        "name": "data-expr_I5_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "34972": {
        "name": "data-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "34987": {
        "name": "data-sharing",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "34990": {
        "name": "data-sharing_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "34996": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "35044": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "35095": {
        "name": "fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "35098": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35136": {
        "name": "method-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35174": {
        "name": "list-table-item",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "35206": {
        "name": "if-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35244": {
        "name": "if-expr_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35250": {
        "name": "if-pipe-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35414": {
        "name": "for-expr_I3_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "35417": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "35463": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "35547": {
        "name": "table-filter_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35550": {
        "name": "table-order_I4",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          }
        ]
      },
      "35553": {
        "name": "table-update_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35556": {
        "name": "table-extend_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35566": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "35571": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "35573": {
        "name": "list-table-extend-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "35574": {
        "name": "table-extend-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "35577": {
        "name": "table-extend-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "35579": {
        "name": "table-extend-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "35603": {
        "name": "import-special",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "35651": {
        "name": "import-special_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "35660": {
        "name": "fun-expr",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35662": {
        "name": "variant-members",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "35668": {
        "name": "variant-members_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "35675": {
        "name": "variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "35680": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35685": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35690": {
        "name": "data-sharing_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "35696": {
        "name": "else-if",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35743": {
        "name": "cases-expr_I6_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "35746": {
        "name": "cases-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "35749": {
        "name": "cases-expr_I7_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "35789": {
        "name": "table-extend-field_A0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "35790": {
        "name": "table-extend-field_A1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "35879": {
        "name": "load-table-spec",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "35883": {
        "name": "import-special_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "35886": {
        "name": "obj-field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35892": {
        "name": "variant-members_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "35895": {
        "name": "data-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35897": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35902": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "35910": {
        "name": "else-if",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "35923": {
        "name": "cases-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35961": {
        "name": "for-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "35999": {
        "name": "table-extend-field",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "36086": {
        "name": "variant-members_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "36108": {
        "name": "cases-branch_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "36113": {
        "name": "cases-branch_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "36115": {
        "name": "cases-expr_I7",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36129": {
        "name": "field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "36132": {
        "name": "cases-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "36136": {
        "name": "cases-args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "36145": {
        "name": "cases-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "36151": {
        "name": "cases-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "36153": {
        "name": "cases-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36156": {
        "name": "cases-expr_I7",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36158": {
        "name": "table-extend-field",
        "position": 6,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "36161": {
        "name": "cases-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "36168": {
        "name": "cases-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "36171": {
        "name": "cases-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "36173": {
        "name": "cases-branch",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "36179": {
        "name": "cases-args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "36182": {
        "name": "cases-args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      }
    },
    "actionsByOldId": {
      "0": "Rule.defaultAction",
      "1": "Rule.defaultAction",
      "2": "Rule.Inline",
      "3": "Rule.Inline",
      "4": "Rule.Inline",
      "5": "Rule.Inline",
      "6": "Rule.Inline",
      "7": "Rule.Inline",
      "8": "Rule.Inline",
      "9": "Rule.ListSnoc(\"prelude_I2_star\", \"prelude_I2\", true)",
      "10": "Rule.Inline",
      "11": "Rule.defaultAction",
      "12": "Rule.defaultAction",
      "13": "Rule.defaultAction",
      "14": "Rule.defaultAction",
      "15": "Rule.defaultAction",
      "16": "Rule.defaultAction",
      "17": "Rule.Inline",
      "18": "Rule.ListSnoc(\"import-special_I3_star\", \"import-special_I3\", true)",
      "19": "Rule.Inline",
      "20": "Rule.defaultAction",
      "21": "Rule.defaultAction",
      "22": "Rule.defaultAction",
      "23": "Rule.defaultAction",
      "24": "Rule.defaultAction",
      "25": "Rule.defaultAction",
      "26": "Rule.Inline",
      "27": "Rule.ListSnoc(\"comma-names_I1_star\", \"comma-names_I1\", true)",
      "28": "Rule.Inline",
      "29": "Rule.defaultAction",
      "30": "Rule.Inline",
      "31": "Rule.ListSnoc(\"block_I0_star\", \"block_I0\", true)",
      "32": "Rule.Inline",
      "33": "Rule.defaultAction",
      "34": "Rule.defaultAction",
      "35": "Rule.defaultAction",
      "36": "Rule.defaultAction",
      "37": "Rule.defaultAction",
      "38": "Rule.defaultAction",
      "39": "Rule.defaultAction",
      "40": "Rule.defaultAction",
      "41": "Rule.defaultAction",
      "42": "Rule.defaultAction",
      "43": "Rule.defaultAction",
      "44": "Rule.defaultAction",
      "45": "Rule.defaultAction",
      "46": "Rule.defaultAction",
      "47": "Rule.Inline",
      "48": "Rule.Inline",
      "49": "Rule.Inline",
      "50": "Rule.Inline",
      "51": "Rule.Inline",
      "52": "Rule.Inline",
      "53": "Rule.defaultAction",
      "54": "Rule.Inline",
      "55": "Rule.ListSnoc(\"spy-contents_I1_star\", \"spy-contents_I1\", true)",
      "56": "Rule.Inline",
      "57": "Rule.defaultAction",
      "58": "Rule.defaultAction",
      "59": "Rule.defaultAction",
      "60": "Rule.defaultAction",
      "61": "Rule.defaultAction",
      "62": "Rule.defaultAction",
      "63": "Rule.defaultAction",
      "64": "Rule.defaultAction",
      "65": "Rule.Inline",
      "66": "Rule.ListSnoc(\"tuple-binding_I1_star\", \"tuple-binding_I1\", true)",
      "67": "Rule.Inline",
      "68": "Rule.Inline",
      "69": "Rule.Inline",
      "70": "Rule.Inline",
      "71": "Rule.Inline",
      "72": "Rule.Inline",
      "73": "Rule.Inline",
      "74": "Rule.defaultAction",
      "75": "Rule.Inline",
      "76": "Rule.Inline",
      "77": "Rule.Inline",
      "78": "Rule.Inline",
      "79": "Rule.Inline",
      "80": "Rule.Inline",
      "81": "Rule.defaultAction",
      "82": "Rule.defaultAction",
      "83": "Rule.Inline",
      "84": "Rule.ListSnoc(\"multi-let-expr_I2_star\", \"multi-let-expr_I2\", true)",
      "85": "Rule.Inline",
      "86": "Rule.Inline",
      "87": "Rule.Inline",
      "88": "Rule.defaultAction",
      "89": "Rule.defaultAction",
      "90": "Rule.defaultAction",
      "91": "Rule.Inline",
      "92": "Rule.ListSnoc(\"letrec-expr_I2_star\", \"letrec-expr_I2\", true)",
      "93": "Rule.Inline",
      "94": "Rule.Inline",
      "95": "Rule.Inline",
      "96": "Rule.defaultAction",
      "97": "Rule.defaultAction",
      "98": "Rule.defaultAction",
      "99": "Rule.defaultAction",
      "100": "Rule.defaultAction",
      "101": "Rule.Inline",
      "102": "Rule.ListSnoc(\"type-let-expr_I2_star\", \"type-let-expr_I2\", true)",
      "103": "Rule.Inline",
      "104": "Rule.Inline",
      "105": "Rule.Inline",
      "106": "Rule.defaultAction",
      "107": "Rule.Inline",
      "108": "Rule.Inline",
      "109": "Rule.defaultAction",
      "110": "Rule.Inline",
      "111": "Rule.Inline",
      "112": "Rule.defaultAction",
      "113": "Rule.defaultAction",
      "114": "Rule.Inline",
      "115": "Rule.Inline",
      "116": "Rule.Inline",
      "117": "Rule.Inline",
      "118": "Rule.Inline",
      "119": "Rule.Inline",
      "120": "Rule.Inline",
      "121": "Rule.defaultAction",
      "122": "Rule.Inline",
      "123": "Rule.Inline",
      "124": "Rule.Inline",
      "125": "Rule.Inline",
      "126": "Rule.Inline",
      "127": "Rule.Inline",
      "128": "Rule.ListSnoc(\"args_I1_I1_star\", \"args_I1_I1\", true)",
      "129": "Rule.Inline",
      "130": "Rule.defaultAction",
      "131": "Rule.Inline",
      "132": "Rule.Inline",
      "133": "Rule.Inline",
      "134": "Rule.defaultAction",
      "135": "Rule.Inline",
      "136": "Rule.Inline",
      "137": "Rule.Inline",
      "138": "Rule.defaultAction",
      "139": "Rule.Inline",
      "140": "Rule.Inline",
      "141": "Rule.Inline",
      "142": "Rule.defaultAction",
      "143": "Rule.Inline",
      "144": "Rule.Inline",
      "145": "Rule.defaultAction",
      "146": "Rule.Inline",
      "147": "Rule.Inline",
      "148": "Rule.defaultAction",
      "149": "Rule.Inline",
      "150": "Rule.Inline",
      "151": "Rule.Inline",
      "152": "Rule.Inline",
      "153": "Rule.Inline",
      "154": "Rule.defaultAction",
      "155": "Rule.defaultAction",
      "156": "Rule.defaultAction",
      "157": "Rule.Inline",
      "158": "Rule.Inline",
      "159": "Rule.Inline",
      "160": "Rule.Inline",
      "161": "Rule.ListSnoc(\"data-expr_I5_star\", \"data-expr_I5\", true)",
      "162": "Rule.Inline",
      "163": "Rule.defaultAction",
      "164": "Rule.defaultAction",
      "165": "Rule.defaultAction",
      "166": "Rule.defaultAction",
      "167": "Rule.defaultAction",
      "168": "Rule.defaultAction",
      "169": "Rule.Inline",
      "170": "Rule.Inline",
      "171": "Rule.Inline",
      "172": "Rule.Inline",
      "173": "Rule.ListSnoc(\"variant-members_I1_I1_star\", \"variant-members_I1_I1\", true)",
      "174": "Rule.Inline",
      "175": "Rule.defaultAction",
      "176": "Rule.Inline",
      "177": "Rule.Inline",
      "178": "Rule.Inline",
      "179": "Rule.defaultAction",
      "180": "Rule.Inline",
      "181": "Rule.Inline",
      "182": "Rule.Inline",
      "183": "Rule.defaultAction",
      "184": "Rule.Inline",
      "185": "Rule.Inline",
      "186": "Rule.Inline",
      "187": "Rule.defaultAction",
      "188": "Rule.defaultAction",
      "189": "Rule.defaultAction",
      "190": "Rule.defaultAction",
      "191": "Rule.Inline",
      "192": "Rule.Inline",
      "193": "Rule.defaultAction",
      "194": "Rule.Inline",
      "195": "Rule.ListSnoc(\"binop-expr_I1_star\", \"binop-expr_I1\", true)",
      "196": "Rule.Inline",
      "197": "Rule.defaultAction",
      "198": "Rule.defaultAction",
      "199": "Rule.defaultAction",
      "200": "Rule.defaultAction",
      "201": "Rule.defaultAction",
      "202": "Rule.defaultAction",
      "203": "Rule.defaultAction",
      "204": "Rule.defaultAction",
      "205": "Rule.defaultAction",
      "206": "Rule.defaultAction",
      "207": "Rule.defaultAction",
      "208": "Rule.defaultAction",
      "209": "Rule.defaultAction",
      "210": "Rule.defaultAction",
      "211": "Rule.defaultAction",
      "212": "Rule.defaultAction",
      "213": "Rule.defaultAction",
      "214": "Rule.defaultAction",
      "215": "Rule.defaultAction",
      "216": "Rule.defaultAction",
      "217": "Rule.defaultAction",
      "218": "Rule.defaultAction",
      "219": "Rule.defaultAction",
      "220": "Rule.defaultAction",
      "221": "Rule.defaultAction",
      "222": "Rule.defaultAction",
      "223": "Rule.defaultAction",
      "224": "Rule.defaultAction",
      "225": "Rule.defaultAction",
      "226": "Rule.defaultAction",
      "227": "Rule.defaultAction",
      "228": "Rule.defaultAction",
      "229": "Rule.defaultAction",
      "230": "Rule.defaultAction",
      "231": "Rule.defaultAction",
      "232": "Rule.defaultAction",
      "233": "Rule.defaultAction",
      "234": "Rule.defaultAction",
      "235": "Rule.defaultAction",
      "236": "Rule.defaultAction",
      "237": "Rule.defaultAction",
      "238": "Rule.defaultAction",
      "239": "Rule.defaultAction",
      "240": "Rule.defaultAction",
      "241": "Rule.defaultAction",
      "242": "Rule.defaultAction",
      "243": "Rule.defaultAction",
      "244": "Rule.defaultAction",
      "245": "Rule.defaultAction",
      "246": "Rule.defaultAction",
      "247": "Rule.defaultAction",
      "248": "Rule.defaultAction",
      "249": "Rule.defaultAction",
      "250": "Rule.defaultAction",
      "251": "Rule.defaultAction",
      "252": "Rule.defaultAction",
      "253": "Rule.defaultAction",
      "254": "Rule.defaultAction",
      "255": "Rule.defaultAction",
      "256": "Rule.defaultAction",
      "257": "Rule.defaultAction",
      "258": "Rule.defaultAction",
      "259": "Rule.defaultAction",
      "260": "Rule.defaultAction",
      "261": "Rule.defaultAction",
      "262": "Rule.defaultAction",
      "263": "Rule.defaultAction",
      "264": "Rule.defaultAction",
      "265": "Rule.defaultAction",
      "266": "Rule.defaultAction",
      "267": "Rule.defaultAction",
      "268": "Rule.defaultAction",
      "269": "Rule.Inline",
      "270": "Rule.Inline",
      "271": "Rule.defaultAction",
      "272": "Rule.defaultAction",
      "273": "Rule.defaultAction",
      "274": "Rule.defaultAction",
      "275": "Rule.defaultAction",
      "276": "Rule.defaultAction",
      "277": "Rule.defaultAction",
      "278": "Rule.defaultAction",
      "279": "Rule.defaultAction",
      "280": "Rule.defaultAction",
      "281": "Rule.defaultAction",
      "282": "Rule.defaultAction",
      "283": "Rule.defaultAction",
      "284": "Rule.Inline",
      "285": "Rule.Inline",
      "286": "Rule.defaultAction",
      "287": "Rule.defaultAction",
      "288": "Rule.Inline",
      "289": "Rule.Inline",
      "290": "Rule.defaultAction",
      "291": "Rule.defaultAction",
      "292": "Rule.defaultAction",
      "293": "Rule.Inline",
      "294": "Rule.Inline",
      "295": "Rule.Inline",
      "296": "Rule.defaultAction",
      "297": "Rule.Inline",
      "298": "Rule.ListSnoc(\"comma-binops_I1_star\", \"comma-binops_I1\", true)",
      "299": "Rule.Inline",
      "300": "Rule.defaultAction",
      "301": "Rule.Inline",
      "302": "Rule.Inline",
      "303": "Rule.Inline",
      "304": "Rule.Inline",
      "305": "Rule.Inline",
      "306": "Rule.defaultAction",
      "307": "Rule.Inline",
      "308": "Rule.ListSnoc(\"inst-expr_I3_star\", \"inst-expr_I3\", true)",
      "309": "Rule.Inline",
      "310": "Rule.defaultAction",
      "311": "Rule.defaultAction",
      "312": "Rule.Inline",
      "313": "Rule.ListSnoc(\"tuple-fields_I1_star\", \"tuple-fields_I1\", true)",
      "314": "Rule.Inline",
      "315": "Rule.Inline",
      "316": "Rule.Inline",
      "317": "Rule.Inline",
      "318": "Rule.defaultAction",
      "319": "Rule.defaultAction",
      "320": "Rule.defaultAction",
      "321": "Rule.defaultAction",
      "322": "Rule.Inline",
      "323": "Rule.ListSnoc(\"obj-fields_I1_star\", \"obj-fields_I1\", true)",
      "324": "Rule.Inline",
      "325": "Rule.Inline",
      "326": "Rule.Inline",
      "327": "Rule.Inline",
      "328": "Rule.defaultAction",
      "329": "Rule.defaultAction",
      "330": "Rule.Inline",
      "331": "Rule.Inline",
      "332": "Rule.Inline",
      "333": "Rule.defaultAction",
      "334": "Rule.Inline",
      "335": "Rule.Inline",
      "336": "Rule.defaultAction",
      "337": "Rule.Inline",
      "338": "Rule.ListSnoc(\"fields_I1_star\", \"fields_I1\", true)",
      "339": "Rule.Inline",
      "340": "Rule.Inline",
      "341": "Rule.Inline",
      "342": "Rule.Inline",
      "343": "Rule.defaultAction",
      "344": "Rule.defaultAction",
      "345": "Rule.Inline",
      "346": "Rule.Inline",
      "347": "Rule.defaultAction",
      "348": "Rule.defaultAction",
      "349": "Rule.Inline",
      "350": "Rule.ListSnoc(\"reactor-fields_I1_star\", \"reactor-fields_I1\", true)",
      "351": "Rule.Inline",
      "352": "Rule.Inline",
      "353": "Rule.Inline",
      "354": "Rule.Inline",
      "355": "Rule.defaultAction",
      "356": "Rule.defaultAction",
      "357": "Rule.defaultAction",
      "358": "Rule.defaultAction",
      "359": "Rule.defaultAction",
      "360": "Rule.defaultAction",
      "361": "Rule.Inline",
      "362": "Rule.Inline",
      "363": "Rule.Inline",
      "364": "Rule.Inline",
      "365": "Rule.ListSnoc(\"table-headers_I0_I0_star\", \"table-headers_I0_I0\", true)",
      "366": "Rule.Inline",
      "367": "Rule.defaultAction",
      "368": "Rule.defaultAction",
      "369": "Rule.Inline",
      "370": "Rule.Inline",
      "371": "Rule.Inline",
      "372": "Rule.defaultAction",
      "373": "Rule.Inline",
      "374": "Rule.Inline",
      "375": "Rule.Inline",
      "376": "Rule.Inline",
      "377": "Rule.ListSnoc(\"table-rows_I0_I0_star\", \"table-rows_I0_I0\", true)",
      "378": "Rule.Inline",
      "379": "Rule.defaultAction",
      "380": "Rule.defaultAction",
      "381": "Rule.Inline",
      "382": "Rule.Inline",
      "383": "Rule.Inline",
      "384": "Rule.Inline",
      "385": "Rule.ListSnoc(\"table-items_I0_I0_star\", \"table-items_I0_I0\", true)",
      "386": "Rule.Inline",
      "387": "Rule.defaultAction",
      "388": "Rule.defaultAction",
      "389": "Rule.defaultAction",
      "390": "Rule.defaultAction",
      "391": "Rule.defaultAction",
      "392": "Rule.defaultAction",
      "393": "Rule.defaultAction",
      "394": "Rule.defaultAction",
      "395": "Rule.Inline",
      "396": "Rule.Inline",
      "397": "Rule.Inline",
      "398": "Rule.ListSnoc(\"if-expr_I4_star\", \"if-expr_I4\", true)",
      "399": "Rule.Inline",
      "400": "Rule.Inline",
      "401": "Rule.Inline",
      "402": "Rule.Inline",
      "403": "Rule.defaultAction",
      "404": "Rule.defaultAction",
      "405": "Rule.Inline",
      "406": "Rule.Inline",
      "407": "Rule.Inline",
      "408": "Rule.ListSnoc(\"if-pipe-expr_I2_star\", \"if-pipe-expr_I2\", true)",
      "409": "Rule.Inline",
      "410": "Rule.Inline",
      "411": "Rule.Inline",
      "412": "Rule.Inline",
      "413": "Rule.defaultAction",
      "414": "Rule.defaultAction",
      "415": "Rule.Inline",
      "416": "Rule.Inline",
      "417": "Rule.Inline",
      "418": "Rule.defaultAction",
      "419": "Rule.Inline",
      "420": "Rule.Inline",
      "421": "Rule.Inline",
      "422": "Rule.Inline",
      "423": "Rule.ListSnoc(\"cases-args_I1_I1_star\", \"cases-args_I1_I1\", true)",
      "424": "Rule.Inline",
      "425": "Rule.defaultAction",
      "426": "Rule.Inline",
      "427": "Rule.Inline",
      "428": "Rule.Inline",
      "429": "Rule.Inline",
      "430": "Rule.Inline",
      "431": "Rule.ListSnoc(\"cases-expr_I6_star\", \"cases-expr_I6\", true)",
      "432": "Rule.Inline",
      "433": "Rule.Inline",
      "434": "Rule.Inline",
      "435": "Rule.Inline",
      "436": "Rule.defaultAction",
      "437": "Rule.Inline",
      "438": "Rule.Inline",
      "439": "Rule.Inline",
      "440": "Rule.defaultAction",
      "441": "Rule.defaultAction",
      "442": "Rule.Inline",
      "443": "Rule.Inline",
      "444": "Rule.Inline",
      "445": "Rule.Inline",
      "446": "Rule.ListSnoc(\"for-expr_I3_I1_star\", \"for-expr_I3_I1\", true)",
      "447": "Rule.Inline",
      "448": "Rule.Inline",
      "449": "Rule.Inline",
      "450": "Rule.defaultAction",
      "451": "Rule.Inline",
      "452": "Rule.Inline",
      "453": "Rule.defaultAction",
      "454": "Rule.Inline",
      "455": "Rule.ListSnoc(\"table-select_I2_star\", \"table-select_I2\", true)",
      "456": "Rule.Inline",
      "457": "Rule.defaultAction",
      "458": "Rule.Inline",
      "459": "Rule.Inline",
      "460": "Rule.Inline",
      "461": "Rule.Inline",
      "462": "Rule.ListSnoc(\"table-filter_I2_I2_star\", \"table-filter_I2_I2\", true)",
      "463": "Rule.Inline",
      "464": "Rule.defaultAction",
      "465": "Rule.Inline",
      "466": "Rule.ListSnoc(\"table-order_I4_star\", \"table-order_I4\", true)",
      "467": "Rule.Inline",
      "468": "Rule.defaultAction",
      "469": "Rule.defaultAction",
      "470": "Rule.Inline",
      "471": "Rule.Inline",
      "472": "Rule.Inline",
      "473": "Rule.Inline",
      "474": "Rule.ListSnoc(\"table-update_I2_I2_star\", \"table-update_I2_I2\", true)",
      "475": "Rule.Inline",
      "476": "Rule.defaultAction",
      "477": "Rule.Inline",
      "478": "Rule.Inline",
      "479": "Rule.Inline",
      "480": "Rule.Inline",
      "481": "Rule.ListSnoc(\"table-extend_I2_I2_star\", \"table-extend_I2_I2\", true)",
      "482": "Rule.Inline",
      "483": "Rule.defaultAction",
      "484": "Rule.Inline",
      "485": "Rule.ListSnoc(\"table-extend-fields_I0_star\", \"table-extend-fields_I0\", true)",
      "486": "Rule.Inline",
      "487": "Rule.Inline",
      "488": "Rule.Inline",
      "489": "Rule.Inline",
      "490": "Rule.defaultAction",
      "491": "Rule.defaultAction",
      "492": "Rule.Inline",
      "493": "Rule.Inline",
      "494": "Rule.Inline",
      "495": "Rule.defaultAction",
      "496": "Rule.Inline",
      "497": "Rule.Inline",
      "498": "Rule.Inline",
      "499": "Rule.defaultAction",
      "500": "Rule.Inline",
      "501": "Rule.Inline",
      "502": "Rule.Inline",
      "503": "Rule.defaultAction",
      "504": "Rule.Inline",
      "505": "Rule.ListSnoc(\"load-table-specs_I0_star\", \"load-table-specs_I0\", true)",
      "506": "Rule.Inline",
      "507": "Rule.defaultAction",
      "508": "Rule.defaultAction",
      "509": "Rule.defaultAction",
      "510": "Rule.defaultAction",
      "511": "Rule.defaultAction",
      "512": "Rule.defaultAction",
      "513": "Rule.defaultAction",
      "514": "Rule.defaultAction",
      "515": "Rule.defaultAction",
      "516": "Rule.defaultAction",
      "517": "Rule.defaultAction",
      "518": "Rule.defaultAction",
      "519": "Rule.Inline",
      "520": "Rule.ListSnoc(\"comma-ann-field_I1_star\", \"comma-ann-field_I1\", true)",
      "521": "Rule.Inline",
      "522": "Rule.defaultAction",
      "523": "Rule.Inline",
      "524": "Rule.Inline",
      "525": "Rule.Inline",
      "526": "Rule.Inline",
      "527": "Rule.Inline",
      "528": "Rule.defaultAction",
      "529": "Rule.defaultAction",
      "530": "Rule.defaultAction",
      "531": "Rule.Inline",
      "532": "Rule.ListSnoc(\"tuple-ann_I2_star\", \"tuple-ann_I2\", true)",
      "533": "Rule.Inline",
      "534": "Rule.Inline",
      "535": "Rule.Inline",
      "536": "Rule.Inline",
      "537": "Rule.defaultAction",
      "538": "Rule.Inline",
      "539": "Rule.Inline",
      "540": "Rule.Inline",
      "541": "Rule.defaultAction",
      "542": "Rule.defaultAction",
      "543": "Rule.Inline",
      "544": "Rule.Inline",
      "545": "Rule.Inline",
      "546": "Rule.defaultAction",
      "547": "Rule.Inline",
      "548": "Rule.Inline",
      "549": "Rule.Inline",
      "550": "Rule.Inline",
      "551": "Rule.Inline",
      "552": "Rule.Inline",
      "553": "Rule.defaultAction",
      "554": "Rule.Inline",
      "555": "Rule.Inline",
      "556": "Rule.defaultAction",
      "557": "Rule.Inline",
      "558": "Rule.ListSnoc(\"comma-anns_I1_star\", \"comma-anns_I1\", true)",
      "559": "Rule.Inline",
      "560": "Rule.defaultAction",
      "561": "Rule.Inline",
      "562": "Rule.Inline",
      "563": "Rule.defaultAction",
      "564": "Rule.defaultAction"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      145,
      143,
      144,
      146,
      147,
      148,
      154,
      155,
      149,
      150,
      151,
      152,
      153,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      286,
      284,
      285,
      284,
      285,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      305,
      302,
      303,
      304,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      333,
      330,
      331,
      332,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488,
      489,
      490,
      491,
      495,
      492,
      493,
      494,
      496,
      497,
      498,
      499,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      516,
      517,
      518,
      519,
      520,
      521,
      522,
      523,
      527,
      524,
      525,
      526,
      528,
      529,
      530,
      531,
      532,
      533,
      534,
      535,
      536,
      537,
      538,
      539,
      540,
      541,
      542,
      543,
      544,
      545,
      546,
      547,
      548,
      549,
      550,
      551,
      552,
      553,
      554,
      555,
      556,
      557,
      558,
      559,
      560,
      561,
      562,
      563,
      564
    ],
    "rnTable": [
      {
        "program": {
          "push": 1
        },
        "prelude": {
          "push": 2
        },
        "prelude_I0_opt": {
          "push": 3
        },
        "prelude_I0": {
          "push": 4
        },
        "provide-stmt": {
          "push": 5
        },
        "'PROVIDE": {
          "push": 6
        },
        "$": {
          "reductions": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        }
      },
      {
        "$": {
          "accept": true
        }
      },
      {
        "block": {
          "push": 7
        },
        "block_I0_star": {
          "push": 8
        },
        "$": {
          "reductions": [
            [
              854,
              8
            ],
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "prelude_I1_opt": {
          "push": 9
        },
        "prelude_I1": {
          "push": 10
        },
        "provide-types-stmt": {
          "push": 11
        },
        "'PROVIDE-TYPES": {
          "push": 12
        },
        "$": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              947,
              105
            ],
            [
              5,
              4
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1228,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1277,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              75,
              16
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 15
        },
        "'STAR": {
          "push": 16
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "spy-stmt": {
          "push": 19
        },
        "let-expr": {
          "push": 20
        },
        "fun-expr": {
          "push": 21
        },
        "data-expr": {
          "push": 22
        },
        "when-expr": {
          "push": 23
        },
        "var-expr": {
          "push": 24
        },
        "rec-expr": {
          "push": 25
        },
        "assign-expr": {
          "push": 26
        },
        "check-test": {
          "push": 27
        },
        "check-expr": {
          "push": 28
        },
        "contract-stmt": {
          "push": 29
        },
        "'SPY": {
          "push": 30
        },
        "binop-expr": {
          "push": 31
        },
        "id-expr": {
          "push": 32
        },
        "'TYPE": {
          "push": 33
        },
        "'NEWTYPE": {
          "push": 34
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 39
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'FUN": {
          "push": 50
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "check-expr_I0": {
          "push": 52
        },
        "'CHECK": {
          "push": 53
        },
        "'EXAMPLES": {
          "push": 54
        },
        "'CHECKCOLON": {
          "push": 55
        },
        "'EXAMPLESCOLON": {
          "push": 56
        },
        "'PARENSPACE": {
          "push": 57
        },
        "'DATA": {
          "push": 58
        },
        "'VAR": {
          "push": 59
        },
        "'REC": {
          "push": 60
        },
        "'WHEN": {
          "push": 61
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        }
      },
      {
        "$": {
          "reductions": [
            [
              4680,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              75,
              16
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 121
        },
        "block_I0": {
          "push": 122
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "spy-stmt": {
          "push": 19
        },
        "let-expr": {
          "push": 20
        },
        "fun-expr": {
          "push": 21
        },
        "data-expr": {
          "push": 22
        },
        "when-expr": {
          "push": 23
        },
        "var-expr": {
          "push": 24
        },
        "rec-expr": {
          "push": 25
        },
        "assign-expr": {
          "push": 26
        },
        "check-test": {
          "push": 27
        },
        "check-expr": {
          "push": 28
        },
        "contract-stmt": {
          "push": 29
        },
        "'SPY": {
          "push": 30
        },
        "binop-expr": {
          "push": 31
        },
        "id-expr": {
          "push": 32
        },
        "'TYPE": {
          "push": 33
        },
        "'NEWTYPE": {
          "push": 34
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 39
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'FUN": {
          "push": 50
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "check-expr_I0": {
          "push": 52
        },
        "'CHECK": {
          "push": 53
        },
        "'EXAMPLES": {
          "push": 54
        },
        "'CHECKCOLON": {
          "push": 55
        },
        "'EXAMPLESCOLON": {
          "push": 56
        },
        "'PARENSPACE": {
          "push": 57
        },
        "'DATA": {
          "push": 58
        },
        "'VAR": {
          "push": 59
        },
        "'REC": {
          "push": 60
        },
        "'WHEN": {
          "push": 61
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        },
        "$": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              4682,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2_star": {
          "push": 123
        },
        "$": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9645,
              5
            ],
            [
              8,
              5
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9785,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9833,
              0
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 124
        },
        "record-ann": {
          "push": 125
        },
        "'LBRACE": {
          "push": 126
        }
      },
      {
        "'COLONCOLON": {
          "push": 127
        },
        "'COLONEQUALS": {
          "push": 128
        },
        "$": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10026,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10066,
              0
            ]
          ]
        }
      },
      {
        "'END": {
          "push": 129
        }
      },
      {
        "$": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10153,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10202,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10204,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10206,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10208,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10210,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10212,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10214,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10216,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10218,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10220,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10222,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10224,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10226,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 130
        },
        "'STRING": {
          "push": 14
        },
        "spy-stmt_I1_opt": {
          "push": 131
        },
        "spy-stmt_I1": {
          "push": 132
        },
        "binop-expr": {
          "push": 133
        },
        "id-expr": {
          "push": 32
        },
        "'LBRACE": {
          "push": 134
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "'PARENSPACE": {
          "push": 57
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        },
        "'COLON": {
          "reductions": [
            [
              47,
              10
            ]
          ]
        }
      },
      {
        "check-op": {
          "push": 135
        },
        "check-op-postfix": {
          "push": 136
        },
        "'IS": {
          "push": 137
        },
        "'ISEQUALEQUAL": {
          "push": 138
        },
        "'ISEQUALTILDE": {
          "push": 139
        },
        "'ISSPACESHIP": {
          "push": 140
        },
        "'ISROUGHLY": {
          "push": 141
        },
        "'ISNOT": {
          "push": 142
        },
        "'ISNOTEQUALEQUAL": {
          "push": 143
        },
        "'ISNOTEQUALTILDE": {
          "push": 144
        },
        "'ISNOTSPACESHIP": {
          "push": 145
        },
        "'RAISES": {
          "push": 146
        },
        "'RAISESOTHER": {
          "push": 147
        },
        "'SATISFIES": {
          "push": 148
        },
        "'SATISFIESNOT": {
          "push": 149
        },
        "'RAISESSATISFIES": {
          "push": 150
        },
        "'RAISESVIOLATES": {
          "push": 151
        },
        "'RAISESNOT": {
          "push": 152
        },
        "$": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10316,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10801,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 153
        }
      },
      {
        "'NAME": {
          "push": 154
        }
      },
      {
        "'EQUALS": {
          "push": 155
        }
      },
      {
        "'EQUALS": {
          "reductions": [
            [
              10845,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10847,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10849,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 156,
          "reductions": [
            [
              65,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 157
        },
        "id-expr": {
          "push": 32
        },
        "ty-params": {
          "push": 158
        },
        "'LBRACE": {
          "push": 134,
          "reductions": [
            [
              65,
              13
            ]
          ]
        },
        "tuple-binding_I1_star": {
          "push": 159
        },
        "'RBRACE": {
          "push": 160
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "fun-header": {
          "push": 161
        },
        "ty-params_I0_opt": {
          "push": 162
        },
        "ty-params_I0": {
          "push": 163
        },
        "ty-params_I0_I0": {
          "push": 164
        },
        "'LANGLE": {
          "push": 165
        },
        "'LT": {
          "push": 166
        },
        "'PARENAFTERBRACE": {
          "push": 51,
          "reductions": [
            [
              113,
              21
            ],
            [
              114,
              22
            ]
          ]
        },
        "'PARENSPACE": {
          "push": 57
        },
        "'REF": {
          "push": 167
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 168
        },
        "tuple-fields": {
          "push": 169
        },
        "obj-fields": {
          "push": 170
        },
        "obj-field": {
          "push": 171
        },
        "key": {
          "push": 172
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              113,
              21
            ],
            [
              114,
              22
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              65,
              13
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 173
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11196,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11198,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11200,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 174
        },
        "var-expr": {
          "push": 175
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "let-binding": {
          "push": 177
        },
        "'VAR": {
          "push": 59
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "block": {
          "push": 178
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11327,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 179
        },
        "toplevel-binding": {
          "push": 35
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11403,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 180
        },
        "'NEWTYPE": {
          "push": 181
        },
        "type-bind": {
          "push": 182
        },
        "newtype-bind": {
          "push": 183
        },
        "type-let-bind": {
          "push": 184
        }
      },
      {
        "'NAME": {
          "push": 185
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11493,
              0
            ]
          ]
        }
      },
      {
        "block": {
          "push": 186
        },
        "'STRING": {
          "push": 187,
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11529,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11575,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11621,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11667,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11713,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 188
        }
      },
      {
        "toplevel-binding": {
          "push": 189
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "toplevel-binding": {
          "push": 190
        },
        "binding": {
          "push": 36
        },
        "name-binding": {
          "push": 37
        },
        "tuple-binding": {
          "push": 38
        },
        "'LBRACE": {
          "push": 176
        },
        "name-binding_I0_opt": {
          "push": 40
        },
        "name-binding_I0": {
          "push": 41
        },
        "'SHADOW": {
          "push": 42
        },
        "'NAME": {
          "reductions": [
            [
              75,
              16
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 130
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 191
        },
        "id-expr": {
          "push": 32
        },
        "'LBRACE": {
          "push": 134
        },
        "multi-let-expr": {
          "push": 43
        },
        "'LET": {
          "push": 44
        },
        "'BLOCK": {
          "push": 45
        },
        "letrec-expr": {
          "push": 46
        },
        "'LETREC": {
          "push": 47
        },
        "type-let-expr": {
          "push": 48
        },
        "'TYPE-LET": {
          "push": 49
        },
        "'PARENAFTERBRACE": {
          "push": 51
        },
        "'PARENSPACE": {
          "push": 57
        },
        "expr": {
          "push": 62
        },
        "paren-expr": {
          "push": 63
        },
        "prim-expr": {
          "push": 64
        },
        "lambda-expr": {
          "push": 65
        },
        "method-expr": {
          "push": 66
        },
        "app-expr": {
          "push": 67
        },
        "obj-expr": {
          "push": 68
        },
        "tuple-expr": {
          "push": 69
        },
        "tuple-get": {
          "push": 70
        },
        "dot-expr": {
          "push": 71
        },
        "template-expr": {
          "push": 72
        },
        "bracket-expr": {
          "push": 73
        },
        "get-bang-expr": {
          "push": 74
        },
        "update-expr": {
          "push": 75
        },
        "extend-expr": {
          "push": 76
        },
        "if-expr": {
          "push": 77
        },
        "if-pipe-expr": {
          "push": 78
        },
        "cases-expr": {
          "push": 79
        },
        "for-expr": {
          "push": 80
        },
        "user-block-expr": {
          "push": 81
        },
        "inst-expr": {
          "push": 82
        },
        "construct-expr": {
          "push": 83
        },
        "table-select": {
          "push": 84
        },
        "table-extend": {
          "push": 85
        },
        "table-filter": {
          "push": 86
        },
        "table-order": {
          "push": 87
        },
        "table-extract": {
          "push": 88
        },
        "table-update": {
          "push": 89
        },
        "table-expr": {
          "push": 90
        },
        "load-table-expr": {
          "push": 91
        },
        "reactor-expr": {
          "push": 92
        },
        "'DOTDOTDOT": {
          "push": 93
        },
        "paren-expr_I0": {
          "push": 94
        },
        "num-expr": {
          "push": 95
        },
        "frac-expr": {
          "push": 96
        },
        "rfrac-expr": {
          "push": 97
        },
        "bool-expr": {
          "push": 98
        },
        "string-expr": {
          "push": 99
        },
        "'NUMBER": {
          "push": 100
        },
        "'RATIONAL": {
          "push": 101
        },
        "'ROUGHRATIONAL": {
          "push": 102
        },
        "'TRUE": {
          "push": 103
        },
        "'FALSE": {
          "push": 104
        },
        "'LAM": {
          "push": 105
        },
        "'METHOD": {
          "push": 106
        },
        "'LBRACK": {
          "push": 107
        },
        "'TABLE": {
          "push": 108
        },
        "'REACTOR": {
          "push": 109
        },
        "'IF": {
          "push": 110
        },
        "'ASK": {
          "push": 111
        },
        "'CASES": {
          "push": 112
        },
        "'FOR": {
          "push": 113
        },
        "'TABLE-SELECT": {
          "push": 114
        },
        "'TABLE-FILTER": {
          "push": 115
        },
        "'TABLE-ORDER": {
          "push": 116
        },
        "'TABLE-EXTRACT": {
          "push": 117
        },
        "'TABLE-UPDATE": {
          "push": 118
        },
        "'TABLE-EXTEND": {
          "push": 119
        },
        "'LOAD-TABLE": {
          "push": 120
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 192
        },
        "'LANGLE": {
          "push": 193
        },
        "binop-expr_I1_star": {
          "push": 194
        },
        "app-args": {
          "push": 195
        },
        "'DOT": {
          "push": 196
        },
        "'LBRACK": {
          "push": 197,
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'BANG": {
          "push": 198
        },
        "$": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              194,
              41
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11753,
              41
            ],
            [
              194,
              41
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12176,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12214,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12252,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12290,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12328,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12366,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12404,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12442,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12480,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12518,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12556,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12594,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12632,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12670,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12708,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12746,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12784,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12822,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12860,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12898,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12936,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'EXAMPLES": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ROUGHRATIONAL": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12974,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'SPY": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              13012,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              13012,
              0
            ]
        },