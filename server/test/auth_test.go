// hiddenchat_test tests the functions of hiddenchat
package hiddenchat_test

import (
	"testing"

	"matse.work/hiddenchat"
)

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
