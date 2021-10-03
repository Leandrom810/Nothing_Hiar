#include <iostream>



class Skillz{
  public:
  void language(){
    std::cout<<"Chinês :tf:\n";
  }
  int confirm(){
    return ok;
  }
private:
int ok = 0;
};

class Leandro : public Skillz{
private:
  rg = 6942024242424;
  public:
  void va(){
    std::cout<<"vavavavavava\n";
  }
  int rg(){
    std::cout<<":ratinho:\n";
    return this->rg;
  }
protected:
  std::string pass="qwerty";
};

class Eu : public Leandro{
public:
  int rg(int *num){
    return &num;
  }
};

int main(int argc, char **argv){

  int *num = 24;
  Leandro leam;
  Eu eu;
  std::cout<<"Dados:\n";
  std::cout<<Leandro.rg() << std::endl;
  std::cout<<eu.rg(*num) << std::endl;
  std::cout<<"fim.\n";

  Skillz * s;
  return s->confirm();
}
