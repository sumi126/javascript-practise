package main

import (
	"fmt"
	"net/http"
)

func HandleFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Facebook</title>
	</head>
	<body>
		<div>
			 <h1>Facebook</h1>
			 <p>Facebook helps you connect and share with the people in your life</p>
			 <button onclick="https://www.facebook.com">HTML Tutorial</button>
			 
		</div>
	</body>
	</html>`)
}

func main() {
	http.HandleFunc("/", HandleFunc)
	fmt.Println("Starting server at port 105")
	http.ListenAndServe(":105", nil)
}
