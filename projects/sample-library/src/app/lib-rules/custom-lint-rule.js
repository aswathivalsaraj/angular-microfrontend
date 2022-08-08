/*    meta: {
        type: "problem",

        docs: {
            description: "disallow unnecessary semicolons",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-extra-semi"
        },
        fixable: "code",
        schema: [] // no options
    }, */
module.exports = { 
    create: function(context) {
        return {
           CallExpression(node){
                if(node.callee.name =="getPayments") {
                    
                }
           }
        };
    }
};