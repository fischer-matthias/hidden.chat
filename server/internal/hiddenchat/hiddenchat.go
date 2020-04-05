// Package hiddenchat is a pgp based
package hiddenchat

import (
	"errors"
	"github.com/segmentio/ksuid"
)

// GenerateUserID generates a new user id
func GenerateUserID() (id string, err error) {
	userid := ksuid.New()
	id = userid.String()

	if len(id) > 0 {
		return id, nil
	}

	err = errors.New("hiddenchat.GenerateUserID(): couldn't generate user id")
	return "", err
}
