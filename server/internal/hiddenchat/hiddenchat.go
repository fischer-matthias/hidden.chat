// Package hiddenchat is a pgp based
package hiddenchat

import (
	"errors"
	"../randomid"
)

// Auth is an structure for authenticate the user
type Auth struct {
	ID string
	Token string
}

// GenerateUserID generates a new user id
func GenerateUserID() (id string, err error) {
	id, err = randomid.Generate()

	if err != nil {
		return "", err
	}

	if len(id) > 0 {
		return id, nil
	}

	err = errors.New("Couldn't generate user id")
	return "", err
}

// GenerateAuthToken generates a sign in token for a specific user
func GenerateAuthToken(userID string) (auth Auth, err error) {
	if len(userID) == 0 || userID == "" {
		return auth, errors.New("No userid given")
	}

	id, err := randomid.Generate()

	if err != nil {
		return auth, err
	}

	auth.ID = userID
	auth.Token = id

	return auth, err
}
