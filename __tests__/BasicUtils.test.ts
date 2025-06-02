import { authenticateUser, product, UserNameToLowerCase } from "../src/BasicUtils";

describe("Basic Utils suite", () => {
    it("should return the product of 3 and 2", () => {
        const actual = product(3, 2);
        expect(actual).toBe(6);
        expect(actual).not.toBe(5);
        expect(actual).toEqual(6);
        expect(actual).toBeLessThan(10);
        expect(actual).toBeLessThanOrEqual(6);
        expect(actual).toBeGreaterThan(5);
        expect(actual).toBeGreaterThanOrEqual(6);
        expect(actual).toBeCloseTo(6.005);
    })

    // STEP 2: using AAA Phases to properly write unit tests
    it('User authentication test', () => {
        // Arrange
        const sut = authenticateUser; //system under test

        // Act
        const actual = sut("deveLOPER", "dev")

        // Assert
        expect(actual.usernameToLower).toBe("developer")
        //    Arrays (tobe) will fail because an array is a reference type whereas string is a value type, toBe will only work for primitive types
        // expect(actual.usernameCharacters).toBe(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R'])

        expect(actual.usernameCharacters).toEqual(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R'])
        expect(actual.usernameCharacters).toContain('d')

    })
})







//STEP 3: FIRST-U Principle
describe("Basic Utils suite - FIRST-U Principle", () => {
    it("should return the product of 3 and 2", () => {
        const actual = product(3, 2)
        expect(actual).toBe(6)
    })

    it("should return the product of 4 and 2", () => {
        const actual = product(4, 2)
        expect(actual).toBe(8)
    })

    describe("User authentication tests", () => {
        it("Return a lowercase username of a valid user", () => {
            // Arrange
            const sut = authenticateUser; //system under test

            // Act
            const actual = sut("deveLOPER", "dev")

            // Assert
            expect(actual.usernameToLower).toBe("developer")
        });
        it("Return the username characters of a valid user", () => {
            // Arrange
            const sut = authenticateUser; //system under test

            // Act
            const actual = sut("deveLOPER", "dev")

            // Assert
            expect(actual.usernameCharacters).toEqual(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R'])
        })
        it("Return the username characters of a valid user", () => {
            // Arrange
            const sut = authenticateUser; //system under test

            // Act
            const actual = sut("deveLOPER", "dev")
            // Assert
            expect(actual.usernameCharacters).toContain('d')
        })


        it("Return userDetails with correct values for a valid user", () => {
            // Arrange
            const sut = authenticateUser;

            // Act
            const actual = sut("deveLOPER", "dev");

            // Assert
            expect(actual.userDetails).toEqual({
                email: "dev@email.com",
                username: "deveLOPER",
                password: "dev"
            });

            // type userInfo
            type UserInfo = {
                email: string;
                username: string;
                password: string;
            }

            // Check each property individually
            expect(actual.userDetails).toHaveProperty("email");
            expect(actual.userDetails).toHaveProperty("username");
            expect(actual.userDetails).toHaveProperty("password");
            expect((actual.userDetails as { email: string; username: string; password: string }).email).toBe("dev@email.com");
            expect((actual.userDetails as UserInfo).username).toBe("deveLOPER");
            expect((actual.userDetails as UserInfo).password).toBe("dev");
        })

        it("Return isAuthenticated as false for invalid credentials", () => {
            // Arrange
            const sut = authenticateUser;

            // Act
            const actual = sut("wrongUser", "wrongPass");

            // Assert
            expect(actual.isAuthenticated).toBe(false);
        })

        // Truthy and Falsy
        it("Return isAuthenticated as true for valid credentials", () => {
            // Arrange
            const sut = authenticateUser;

            // Act
            const actual = sut("deveLOPER", "dev");

            // Assert
            expect(actual.isAuthenticated).toBeTruthy();
            expect(actual.isAuthenticated).toBeDefined();
            expect(actual.isAuthenticated).not.toBeFalsy();
        })

    })

    // 😁😁 DRY Do not Repeat Yourself so much, let learn about JEST hooks 

    describe.skip("UsernameToLower tests suite", () => {
        let sut: UserNameToLowerCase
        // setup: function that runs before each test in this block

        beforeEach(() => {
            console.log("Running setup here........");
            sut = new UserNameToLowerCase()
        })

        it("should return a lowercase username of a valid user", () => {
            const actual = sut.toLowerCase("deveLOPER")
            console.log("Running test here........");
            expect(actual).toBe("developer")
        })

        it("should throw an error when username is empty", () => {
            expect(() => {
                sut.toLowerCase("")
            }).toThrow("Username cannot be empty")
        })

        // Parametrized tests - testing multiple inputs with the same logic (parameters)
        it.each([
            ["deveLOPER", "developer"],
            ["KEMBOI", "kemboi"],
            ["JOHNDOE", "johndoe"],
            ["JaneDoe", "janedoe"]
        ])("should return a lowercase username for %s", (input, expected) => {
            const actual = sut.toLowerCase(input)
            expect(actual).toBe(expected)
        })

        it.each([
            [3, 2, 6],
            [4, 2, 8],
            [5, 2, 10],
            [6, 2, 12],
        ])("should return the product of %i and %i as %i", (a, b, expected) => {
            const actual = product(a, b)
            expect(actual).toBe(expected)
        })
    })


    // Mocking Functions

    // todo
    it.todo("should implement a new feature for user authentication")
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