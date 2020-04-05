// randomid_test tests the functions of randomid
package randomid_test

import (
	"../../internal/randomid"
	"testing"
)

// TestGenerate tests the id generation
func TestGenerate(t *testing.T) {
	id, err := randomid.Generate()

	if err != nil {
		t.Error(err)
	}

	if id == "" {
		t.Error("Generated id is empty")
	}

	if len(id) != len("0ujsszwN8NRY24YaXiTIE2VWDTS") {
		t.Error("Generated id is too short")
	}
}