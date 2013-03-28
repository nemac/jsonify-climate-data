describe("monthly", function () {
    "use strict";

    describe("function definition", function () {

        it("should define a function named generateMonthly", function () {
            expect(typeof(generateMonthly)).toBe("function");
        });

    });

    describe("parsing from test file data/USC00010008.normals.prcp.dat", function () {

        var loadingFinished = false,
            data,
            n;

        $.ajax({
            url : '../data/USC00010008.normals.prcp.dat',
            dataType : 'text',
            success : function (response) {
                loadingFinished = true;
                data = response;
            }
        });

        beforeEach(function () {
            waitsFor(function() {
                if (loadingFinished) {
                    n = generateMonthly(data);
                }
                return loadingFinished;
            });
        });

        describe("generate monthly", function () {

            xit("should have a date", function () {

            });

        });
    });
});
