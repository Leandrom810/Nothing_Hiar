#include <iostream>



class Skillz{
  public:
  void language(){
    std::cout<<"Chinês :tf:\n";
  }
};

class Leandro : public Skillz{
  public:
  void va(){
    std::cout<<"vavavavavava\n";
  }
};

int main(int argc, char **argv){
  Leandro leam;
  leam.va();
  leam.language();
}
