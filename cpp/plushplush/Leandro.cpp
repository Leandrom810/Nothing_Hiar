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
  public:
  void va(){
    std::cout<<"vavavavavava\n";
  }
protected:
  std::string pass="qwerty";
};

class Microsoft : public Leandro{
public:
  std::string getPass(){
    return this->pass;
  }
};

int main(int argc, char **argv){
  std::cout<<"Dados: \n";
  Microsoft micro;
  micro.language();
  micro.va();
  std::cout<<micro.getPass();
  Skillz * s;
  return s->confirm();
}
