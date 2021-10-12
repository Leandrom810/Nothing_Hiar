#include <iostream>
#include <string.h>

namespace Try{
    template <class T>
    class Stack{
    public:
    void pilha( T array, int max){
        int i = {0};

        while(i < max){
            std::cout<<"Elements: " << array[i] << std::endl;
            ++i;
        }
    }
};
};

int main(int argc, char const *argv[])
{
    Try::Stack<std::string* > s;
    //char array[] = {'A', 'B', 'C', 'D', 'E'};
    std::string array[] = {"eu", "sou", "muito", "otário", "pqp"};
    int max = sizeof(array) / sizeof(array[0]);

    std::string * pmarray = array;
    s.pilha(array, max);
    return 0;
}
