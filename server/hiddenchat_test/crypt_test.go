// hiddenchat_test tests the functions of hiddenchat
package hiddenchat_test

import (
	"bytes"
	"strings"
	"testing"
	"../hiddenchat"
)

// TestCreateKeyPair tests the creation of a new pgp key pair
func TestCreateKeyPair(t *testing.T) {
	buf := new(bytes.Buffer)
	err := hiddenchat.CreateKeyPair(buf)

	if err != nil {
		t.Error(err)
	}

	armouredPublicKey := buf.String()

	if len(armouredPublicKey) == 0 || armouredPublicKey == "" {
		t.Error("generated public key is empty")
	}

	if !strings.HasPrefix(armouredPublicKey, "-----BEGIN PGP PUBLIC KEY BLOCK-----") {
		t.Error("generated key has not the required prefix")
	}

	if !strings.HasSuffix(armouredPublicKey, "-----END PGP PUBLIC KEY BLOCK-----") {
		t.Error("generated key has not the required suffix")
	}
}
