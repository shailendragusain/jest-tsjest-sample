describe('User Tests', () => {
    let sampleVariable = 0;

    beforeEach(() => {
        sampleVariable++;
        console.log(`Before Each. sampleVariable: ${sampleVariable}`);
    });

    test("First Test", () => {
        expect(sampleVariable).toEqual(1);
    });

    test("Second Test", () => {
        expect(sampleVariable).toEqual(2);
    });

    test("Third Test", () => {
        expect(sampleVariable).toEqual(3);
    });
});
