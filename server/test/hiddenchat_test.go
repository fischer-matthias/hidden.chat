// hiddenchat_test tests the functions of hiddenchat
package hiddenchat_test

import (
	"../internal/hiddenchat"
	"testing"
)

// TestGenerateUserID tests a new user id generation
func TestGenerateUserID(t *testing.T) {
	uid, err := hiddenchat.GenerateUserID()

	if err != nil {
		t.Error(err)
	}

	if uid == "" {
		t.Error("UID is empty!")
	}

	if len(uid) != len("0ujsszwN8NRY24YaXiTIE2VWDTS") {
		t.Error("UID lenght not ok!")
	}
}
