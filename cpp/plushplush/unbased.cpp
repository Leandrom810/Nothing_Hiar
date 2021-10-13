#include <iostream>

long int fib(int n){
    return( n <= 1) ? n : fib(n - 1) + fib( n - 2);
}


int main(int argc, char const *argv[])
{
    std::cout << fib(30) << std::endl;
    /* code */

    return 0;
}
