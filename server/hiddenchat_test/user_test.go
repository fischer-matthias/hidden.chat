// hiddenchat_test tests the functions of hiddenchat
package hiddenchat_test

import (
	"testing"
	"../hiddenchat"
)

// TestGenerateUserID tests a new user id generation
func TestGenerateUserID(t *testing.T) {
	userID, err := hiddenchat.GenerateUserID()

	if err != nil {
		t.Error(err)
	}

	if userID == "" {
		t.Error("UID is empty!")
	}

	if len(userID) != len("0ujsszwN8NRY24YaXiTIE2VWDTS") {
		t.Error("UID lenght not ok!")
	}
}