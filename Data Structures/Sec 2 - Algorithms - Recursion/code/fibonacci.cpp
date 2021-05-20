#include <iostream>
using namespace std;

int main() {
	// fib(5, 0, 1);
}

int fib(int n, int a, int b) {

	if(n==0) return a;
	if(n==1) return b;

	cout << n-1, b, a+b;

	return fib(n-1, b, a+b);
}