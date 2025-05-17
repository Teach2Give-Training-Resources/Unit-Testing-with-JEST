import { authenticateUser, product, UserNameToLowerCase } from "../app/BasicUtils"

describe("BasicUtils test suite ", () => {
    it("should return the product of 3 and 2 ", () => {
        const actual = product(3, 2)
        expect(actual).toBe(6)
        expect(actual).not.toBe(5) // This is a negative test case
        expect(actual).toEqual(6) // This is a positive test case
        expect(actual).toBeLessThan(10) // toBeLessThan is a matcher that checks if the value is less than the expected value
        expect(actual).toBeLessThanOrEqual(6) // toBeLessThanOrEqual is a matcher that checks if the value is less than or equal to the expected value
        expect(actual).toBeGreaterThan(5) // This is a positive test case
        expect(actual).toBeGreaterThanOrEqual(6) // This is a positive test case
        expect(actual).toBeCloseTo(6.0) // This is a positive test case
    })

    // step 2:  if any of the above test cases fail, it will show the error message in the console and the test will fail
    // it.only('User authentication test', () => {
    it('User authentication test', () => {
        // Arrange
        const sut = authenticateUser // System Under Test
        // Act
        const actual = sut("deveLOPER", "dev") // System Under Test
        // Assert
        expect(actual.usernameToLower).toBe("developer")
        //    Arrays (tobe) will fail because an array is a reference type whereas string is a value type, toBe will only work for primitive types
        // expect(actual.usernameCharacters).toBe(['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']) // This is a negative test case
        expect(actual.usernameCharacters).toEqual(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R']) // This is a positive test case
        expect(actual.usernameCharacters).toContain('d') // toContain is a matcher that checks if the array contains the expected value
    })
})














// 😁😁 A better way but not yet

describe("BasicUtils test suite ", () => {
    it("should return the product of 3 and 2 ", () => {
        const actual = product(3, 2)
        expect(actual).toBe(6)
    })

    // TODO - Add a describe here - added only for testing
    describe('User authentication test', () => {

        it("Return the lowercase username of a valid user", () => {
            // Arrange
            const sut = authenticateUser // System Under Test
            // Act
            const actual = sut("deveLOPER", "dev") // System Under Test
            // Assert
            expect(actual.usernameToLower).toBe("developer")
        });

        it("Return the username characters of a valid user", () => {
            // Arrange
            const sut = authenticateUser // System Under Test
            // Act
            const actual = sut("deveLOPER", "dev") // System Under Test
            // Assert
            expect(actual.usernameCharacters).toEqual(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R'])
        });

        // what is a user enters -   'L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e',,
        it("Return username characters contsains a valid user", () => {
            // Arrange
            const sut = authenticateUser // System Under Test
            // Act
            const actual = sut("deveLOPER", "dev") // System Under Test
            // Assert
            expect(actual.usernameCharacters).toEqual(
                expect.arrayContaining(['L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e']));
        });

        // more matchers
        it("Return userDetails as empty object for a valid user", () => {
            // Arrange
            const sut = authenticateUser // System Under Test
            // Act
            const actual = sut("deveLOPER", "dev") // System Under Test
            // Assert
            expect(actual.userDetails).toEqual({}) // This is a positive test case
            expect(actual.isAuthenticated).toBeDefined()
            expect(actual.isAuthenticated).not.toBeUndefined()
            expect(actual.isAuthenticated).toBeTruthy() // This is a positive test case
            expect(actual.isAuthenticated).not.toBeFalsy() // This is a positive test case
        });
        // Truthy and Falsy
        it("Return isAuthenticated as true for a valid user", () => {
            // Arrange
            const sut = authenticateUser // System Under Test
            // Act
            const actual = sut("deveLOPER", "dev") // System Under Test
            // Assert
            expect(actual.isAuthenticated).toBeTruthy() // This is a positive test case
            expect(actual.isAuthenticated).not.toBeFalsy() // This is a positive test case
        });

    })



    // 😁😁 DRY Do not Repeat Yourself so much, let learn about JEST hooks 

    describe.skip("UsernameToLowerCase test suite ", () => {
        // setup 
        let sut: UserNameToLowerCase
        beforeEach(() => {
            console.log("Setup is here");
            sut = new UserNameToLowerCase()
        })

        it("should return the lowercase username of a valid user", () => {
            const actual = sut.toLower("Bob");
            console.log("I am here");
            expect(actual).toBe("bob")
        })

        it('should throw an error when username is empty', () => {
            expect(() => {
                sut.toLower("")
            }).toThrow("Username cannot be empty")

            // or
            expect(() => sut.toLower("")).toThrow()
        })
        it.todo("test for valid passwrord")


        //TODO: parameterized testing---  // testing for more than two parameters
        it.each([
            [3, 2, 6],
            [4, 2, 8],
            [5, 2, 10],
            [6, 2, 12],
        ])("should return the product of %i and %i", (a: number, b: number, expected: number) => {
            const actual = product(a, b)
            expect(actual).toBe(expected)
        })

        // STRINGS
        it.each([
            { input: 'BriaN', expected: 'brian' },
            { input: 'Bob', expected: 'bob' },
            { input: 'Alice', expected: 'alice' },
        ])('$input to lowercase should be $expected', ({ input, expected }) => {
            const actual = sut.toLower(input)
            expect(actual).toBe(expected)
        })


    })





})


/**
 * describe.only - will run only this test case
 * describe.skip - will skip this test case
 * it.only - will run only this test case
 * it.skip - will skip this test case
 * it.todo - will create a test case but not run it
 * fit (only)- will run only this test case, works with describe and it meaning it will run only this test case
 * xit - will skip this test case. works with describe and it meaning it will skip this test case
 * 
 */