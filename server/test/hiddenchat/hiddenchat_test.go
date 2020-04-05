// hiddenchat_test tests the functions of hiddenchat
package hiddenchat_test

import (
	"../../internal/hiddenchat"
	"testing"
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

// TestGenerateAuthToken tests a sign in token creation
func TestGenerateAuthToken(t *testing.T) {
	userID, _ := hiddenchat.GenerateUserID()
	auth, err := hiddenchat.GenerateAuthToken(userID)

	if err != nil {
		t.Error(err)
	}

	if auth.ID != userID {
		t.Error("UserID doesn't match requested user id!")
	}

	if auth.Token == "" {
		t.Error("Token is empty!")
	}
}
