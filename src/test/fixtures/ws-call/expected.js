module.exports = {
  module: {
    source: "dist/test/server/my-server",
    remoteUrl: "http://www.poe3.com"
  },
  identifier: "$post",
  httpMethod: "post",
  expressions: [
    { type: "MemberExpression", memberName: "getAllTodos" },
    {
      type: "CallExpression",
      arguments: [
        { type: "NumericLiteral", value: 1 },
        { name: "a", type: "Identifier" }
      ]
    }
  ]
};