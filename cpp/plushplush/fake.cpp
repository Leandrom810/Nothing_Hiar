#include <iostream>

class Mom{
public:
  void mom(){
    std::cout << "Im chat's mom \n";

  }

};
class Chat : public Mom{
public:
  void chat(){
    std::cout << "gachiGASM clap gachiGASM \n";

  }

};
class Fors : public Chat{
public:
  void fors(){
    std::cout << "Im chat's Streamer \n";

  }

};

int main(int argc, char const *argv[]) {
  Mom chatmom;
  Chat chat;
  Fors farsen;
  chatmom.mom();
  chat.chat();
  farsen.fors();
  return 0;
}
