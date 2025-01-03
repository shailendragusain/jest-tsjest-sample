/***
 * NOTE: test and it are exactly the same thing. The keyword 'it' 
 * is used to add readability to the tests.
 * */
describe('User Tests', () => {
    let sampleVariable = 0;

    beforeEach(() => {
        sampleVariable++;
        console.log(`Before Each. sampleVariable: ${sampleVariable}`);
    });

    it("First Test", () => {
        expect(sampleVariable).toEqual(1);
    });

    it("Second Test", () => {
        expect(sampleVariable).toEqual(2);
    });

    test("Third Test", () => {
        expect(sampleVariable).toEqual(3);
    });
});
