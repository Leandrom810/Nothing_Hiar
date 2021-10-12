#ifndef INDIANFRIEND_H
#define INDIANFRIEND_H
#include <iostream>

namespace Neighborhood{
    class Home{
    public:
    std::string comp = "uii";

    protected: 
    char essid[5] = {'H', 'o', 'm', 'e', '\0'};

    private:
    std::string pass = "abc" + comp;

    friend class Neighbor;
};

class Neighbor{
    public:
    void Controller(){
        Home h;
        std::cout << "im wolking flend!! you can tlust me! your password is " << h.pass << "and your address is " << h.essid << "Im is not hacked you ok flend?\n";
    }
};
};

#endif