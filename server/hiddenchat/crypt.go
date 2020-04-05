package hiddenchat

import (
	"io"
	"golang.org/x/crypto/openpgp"
)

// CreateKeyPair generates a new pgp key pair
func CreateKeyPair(w io.Writer) (err error) {
	var entity *openpgp.Entity
	entity, err = openpgp.NewEntity("hiddenchat", "", "hiddenchat@hidden.chat", nil)

	if err != nil {
		return err
	}

	err = entity.PrimaryKey.Serialize(w)
	return err
}
