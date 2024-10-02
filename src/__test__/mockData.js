export const mockGetUserUserResponse = {
    "statusCode": 200,
    "data": {
        "_id": "66f8a2ade9f68828ddf6ae62",
        "firstName": "Monish",
        "lastName": "Reddy",
        "email": "Monishreddy666@gmail.com",
        "secondaryEmail": "Monishreddy9898@gmail.com",
        "username": "monish1999",
        "phoneNumber": "8899776652",
        "city": "Misouri",
        "state": "MO",
        "zipCode": "61010",
        "profilePicture": "https://myapplication-backups.s3.us-west-2.amazonaws.com/1727713075858_star.png",
        "createdAt": "2024-09-29T00:43:25.577Z",
        "updatedAt": "2024-09-30T16:37:40.692Z",
        "__v": 0
    },
    "message": "User found successfully",
    "success": true
}

export const mockUserRequest = {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@gmail.com",
    secondaryEmail: "alice.secondary@example.com",
    username: "alicej89",
    phoneNumber: "8765432123",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
};


export const mockCreateUserReaponse = {
    "statusCode": 201,
    "data": {
        "firstName": "ram",
        "lastName": "Reddy",
        "email": "ram@gmail.com",
        "secondaryEmail": "sai998@gmail.com",
        "username": "ram",
        "phoneNumber": "8899773652",
        "city": "Misouri",
        "state": "MO",
        "zipCode": "63986",
        "profilePicture": "",
        "_id": "66fad47709f0a11860a87432",
        "createdAt": "2024-09-30T16:40:23.354Z",
        "updatedAt": "2024-09-30T16:40:23.354Z",
        "__v": 0
    },
    "message": "User created successfully",
    "success": true
}

export const mockValidationRequest = {
    "secondaryEmail": "alice.secondary@example.com",
    "phoneNumber": "8765432123",
    "city": "Los Angeles",
    "state": "CA",
    "zipCode": "90001"
}



export const mockUpdateUserRequest = {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@gmail.com",  // Must end with @gmail.com
    secondaryEmail: "alice.secondary@example.com",
    username: "alicej89",
    phoneNumber: "8765432123", // Must be 10 digits
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001" // Ensure this is a valid 5-digit ZIP code
};


export const mockUpdateUserResponse = {
    "statusCode": 200,
    "data": {
        "_id": "66f8a2ade9f68828ddf6ae62",
        "firstName": "Monish",
        "lastName": "Reddy",
        "email": "Monishreddy666@gmail.com",
        "secondaryEmail": "Monishreddy9898@gmail.com",
        "username": "monish1999",
        "phoneNumber": "8899776652",
        "city": "Misouri",
        "state": "MO",
        "zipCode": "61010",
        "profilePicture": "https://myapplication-backups.s3.us-west-2.amazonaws.com/1727714588142_star.png",
        "createdAt": "2024-09-29T00:43:25.577Z",
        "updatedAt": "2024-09-30T16:52:03.192Z",
        "__v": 0
    },
    "message": "User details updated successfully",
    "success": true
}


export const mockUpdateUserProfileResponse = {
    "statusCode": 200,
    "data": {
        "_id": "66f8a2ade9f68828ddf6ae62",
        "firstName": "Monish",
        "lastName": "Reddy",
        "email": "Monishreddy666@gmail.com",
        "secondaryEmail": "Monishreddy9898@gmail.com",
        "username": "monish1999",
        "phoneNumber": "8899776652",
        "city": "Misouri",
        "state": "MO",
        "zipCode": "61010",
        "profilePicture": "https://myapplication-backups.s3.us-west-2.amazonaws.com/1727714588142_star.png",
        "createdAt": "2024-09-29T00:43:25.577Z",
        "updatedAt": "2024-09-30T16:43:08.517Z",
        "__v": 0
    },
    "message": "Profile image updated successfully",
    "success": true
}