package hiddenchat

import (
	"errors"

	"matse.work/hiddenchat/randomid"
)

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