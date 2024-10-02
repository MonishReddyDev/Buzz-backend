import request from "supertest";
import app from "../../app.js"

import { createUserService, findUserProfileService, updateProfileService, updateUserService } from "../../services/user.service.js";
import { mockGetUserUserResponse, mockCreateUserReaponse, mockValidationRequest, mockUserRequest, mockUpdateUserResponse, mockUpdateUserRequest, mockUpdateUserProfileResponse } from '../mockData';



const mockUserEmail = "alice.johnson@gmail.com";
const userRouteEndpoint = "/api/v1/user/profile"
const profileUpdateEndpoint = "/api/v1/user/updateProfile"
const imagePath = "src/assets/free-images.jpg"


jest.mock("../../services/user.service.js")


test('Server should respond with "working....."', async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("working.....");
});

describe('User Profile Retrieval', () => {

    test('should return user details when email is matched', async () => {

        findUserProfileService.mockResolvedValue(mockGetUserUserResponse)

        const response = await request(app)
            .get(userRouteEndpoint)
            .send({ email: 'alice.johnson@gmail.com' });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("User found successfully")
        expect(response.body.data).toEqual(mockGetUserUserResponse)
    })

    test('should return 404 error when user is not found', async () => {
        // Mock the service to return null (user not found)
        findUserProfileService.mockResolvedValue(null)

        const response = await request(app).get(userRouteEndpoint).send({ email: 'alice.johns@gmail.com' });

        expect(response.statusCode).toBe(404)
        expect(response.body.message).toBe("user not found")
    })
});


describe("User Creation", () => {

    test('should successfully create a user', async () => {

        createUserService.mockResolvedValue(mockCreateUserReaponse)

        const response = await request(app).post(userRouteEndpoint).send(mockUserRequest)



        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("User created successfully")
        // console.log(response.body)
        // console.log(mockResponseFromService.newUser) Note => ask about this
        expect(response.body.data).toEqual(mockCreateUserReaponse)
    })

    test('should fail when required fields are missing', async () => {
        // No need to mock the service since validation fails before reaching the service
        const response = await request(app)
            .post(userRouteEndpoint)
            .send(mockValidationRequest)

        // Expecting the validation middleware to fail and return 400 Bad Request
        expect(response.status).toBe(400);

        // Asserting that the error message contains information about the missing fields
        expect(response.body.details).toContain("\"firstName\" is required");
        expect(response.body.details).toContain("\"lastName\" is required");
        expect(response.body.details).toContain("\"email\" is required");
        expect(response.body.details).toContain("\"username\" is required");


    });

})


describe("User Profile Update", () => {

    test('should update user details successfully', async () => {

        updateUserService.mockResolvedValue(mockUpdateUserResponse)


        const response = await request(app).put(userRouteEndpoint).send(mockUpdateUserRequest)

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("User details updated successfully")
        expect(response.body.data).toEqual(mockUpdateUserResponse)
    })

    test('should fail when required fields are missing during update', async () => {
        // No need to mock the service since validation fails before reaching the service
        const response = await request(app)
            .put(userRouteEndpoint)
            .send(mockValidationRequest)

        // Expecting the validation middleware to fail and return 400 Bad Request
        expect(response.status).toBe(400);

        // Asserting that the error message contains information about the missing fields
        expect(response.body.details).toContain("\"firstName\" is required");
        expect(response.body.details).toContain("\"lastName\" is required");
        expect(response.body.details).toContain("\"email\" is required");
        expect(response.body.details).toContain("\"username\" is required");


    });

})



describe('User Profile Picture Update"', () => {


    test('should update the user profile picture successfully', async () => {

        updateProfileService.mockResolvedValue(mockUpdateUserProfileResponse)

        const response = await request(app).post(profileUpdateEndpoint).field("email", mockUserEmail).attach("image", imagePath);

        expect(response.statusCode).toEqual(200);

        expect(response.body.message).toBe("Profile image updated successfully")
        expect(response.body.data).toEqual(mockUpdateUserProfileResponse)
    })


})


