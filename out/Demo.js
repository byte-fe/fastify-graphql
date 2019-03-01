"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestUtils_1 = require("./test/TestUtils");
TestUtils_1.createFastifyApp(TestUtils_1.createGQLSchema()).listen(3000, (err) => {
    if (err)
        console.error(err);
});
//# sourceMappingURL=Demo.js.map