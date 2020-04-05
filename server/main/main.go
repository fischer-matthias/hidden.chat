// main - hidden.chat server entry point
package main

import (
	"bytes"
	"fmt"

	"matse.work/hiddenchat"
)

func main() {
	fmt.Println("Starting hidden.chat server application ...")

	buf := new(bytes.Buffer)
	_ = hiddenchat.CreateKeyPair(buf)

	fmt.Println(buf.String())
}
