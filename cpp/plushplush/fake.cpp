#include <iostream>

class Mom{
public:
  virtual  void message(){
    std::cout << "Im chat's mom \n";

  }

};
class Chat : public Mom{
public:
  void message(){
    std::cout << "gachiGASM clap gachiGASM \n";

  }

};
class Fors : public Chat{
public:
  void message(){
    std::cout << "Im chat's Streamer \n";

  }

};

void answer(Mom * m){
  m->message();
}

int main(int argc, char const *argv[]) {
  Mom chatmom;
  Chat chat;
  Fors farsen;
  chatmom.message();
  chat.message();
  farsen.message();
  std::cout<<std::endl << std::endl;
  answer(&chatmom);
  answer(&chat);
  answer(&farsen);
  return 0;
}
