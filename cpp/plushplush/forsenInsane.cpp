#include <iostream>

class Any{
private:
  std::string eu = ".";
public:
  void Leandro(){
    std::cout<<"vavavava ";
  }
  Any(){
    std::cout<<"hi ";
  }
  Any(std::string x){
    this->eu = x;
  }
  Any(int x, int y){
    std::cout<< " Resultado: " << x * y << "\n :ratinho:";
  }
  ~Any(){
    std::cout<<"eu sou " << eu <<" tchau\n";
  }
};

int main(int argc, char const *argv[]) {
  Any teste;
  Any a("gay");
  a.Leandro();
  std::cout << "gachiGASM gachiGASM gachiGASM\n";
  return 0;
}
