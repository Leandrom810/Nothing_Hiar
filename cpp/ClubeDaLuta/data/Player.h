#include <iostream>

class Player {
    protected:
        std::string name;
        float forzamtp = 1.0;
        unsigned int forza = 10;
        unsigned int health = 100;
    public:
        void setstatus() {
            std::cout << "Diga seu nome garoto.\n >> ";
            std::cin >> name;
            while(1) {
                int inpt;
                std::cout << '\n' << "O quão forte você é?\n";
                std::cout << "[0] Frango [1] Médio [2] Chad\n >> ";
                std::cin >> inpt;
                if(inpt == 0) {
                    forza = 60;
                    break;
                }
                else if(inpt == 1) {
                    forza = 80;
                    break;
                }
                else if(inpt == 2) {
                    forza = 100;
                    break;
                }
                else {
                    std::cout << "Análise\n";
                }
            }
            std::cout << "\n. \n. \n. \n"<< "Bem-vindo ao Clube da Luta\n";
        }

        // data info
        std::string getname() {
            return name;
        }
        float getforzamtp() {
            return forzamtp;
        }
        int getforza() {
            return forza;
        }
        int gethealth() {
            return health;
        }
};

