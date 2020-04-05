// Package randomid creates a random id using ksuid
package randomid

import (
	"errors"

	"github.com/segmentio/ksuid"
)

// Generate creates a random id using ksuid
func Generate() (ID string, err error) {
	ksuid := ksuid.New()
	
	if len(ksuid.String()) > 0 {
		return ksuid.String(), nil
	}

	return "", errors.New("Couldn't create a random id")
}